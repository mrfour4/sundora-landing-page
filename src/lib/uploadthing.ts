import type { FileRouter } from "uploadthing/next";

import { createUploadthing } from "uploadthing/next";

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
            maxFileSize: "4MB",
            maxFileCount: 1,
        },
    })
        .middleware(() => {
            return {};
        })
        .onUploadComplete(async ({ metadata, file }) => {
            return { thumbnail: file.ufsUrl };
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
