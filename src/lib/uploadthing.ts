import type { FileRouter } from "uploadthing/next";

import { createUploadthing } from "uploadthing/next";
import z from "zod";
import { ensureAdmin } from "./admin";
import { utapi } from "./server-upload";

const f = createUploadthing();

export const ourFileRouter = {
    editorUploader: f(["image", "text", "blob", "pdf", "video", "audio"])
        .middleware(() => {
            return {};
        })
        .onUploadComplete(({ file }) => {
            return {
                key: file.key,
                name: file.name,
                size: file.size,
                type: file.type,
                url: file.ufsUrl,
            };
        }),
    imageUploader: f({
        image: {
            maxFileSize: "8MB",
            maxFileCount: 1,
        },
    })
        .input(z.object({ prevUrl: z.url().nullable() }))
        .middleware(async ({ input }) => {
            await ensureAdmin();

            const fileKey = input.prevUrl
                ? new URL(input.prevUrl).pathname.split("/f/")[1]
                : null;

            return { fileKey };
        })
        .onUploadComplete(async ({ file, metadata }) => {
            if (metadata.fileKey) {
                await utapi.deleteFiles(metadata.fileKey);
                console.log("deleted: ", metadata.fileKey);
            }
            return { thumbnail: file.ufsUrl };
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
