import type { FileRouter } from "uploadthing/next";

import { auth } from "@/auth";
import { createUploadthing } from "uploadthing/next";
import z from "zod";
import { ensureUploader } from "./rbac";
import { utapi } from "./server-upload";

const f = createUploadthing();

export const ourFileRouter = {
    editorUploader: f({
        image: { maxFileSize: "16MB", maxFileCount: 1 },
        text: { maxFileSize: "16MB" },
        blob: { maxFileSize: "16MB" },
        pdf: { maxFileSize: "16MB" },
        video: { maxFileSize: "16MB" },
        audio: { maxFileSize: "16MB" },
    })
        .middleware(({ files }) => {
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
            maxFileSize: "16MB",
            maxFileCount: 1,
        },
    })
        .input(z.object({ prevUrl: z.url().nullable() }))
        .middleware(async ({ input }) => {
            await ensureUploader(auth);

            const fileKey = input.prevUrl
                ? new URL(input.prevUrl).pathname.split("/f/")[1]
                : null;

            return { fileKey };
        })
        .onUploadComplete(async ({ file, metadata }) => {
            if (metadata.fileKey) {
                await utapi.deleteFiles(metadata.fileKey);
            }
            return { thumbnail: file.ufsUrl };
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
