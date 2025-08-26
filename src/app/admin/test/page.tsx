"use client";

import { ImageUploadDropzone } from "@/components/custom-uploader";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <ImageUploadDropzone
                onChange={(url) => {
                    console.log("🚀 ~ Home ~ url:", url);
                }}
            />
        </main>
    );
}
