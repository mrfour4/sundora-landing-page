import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { UploadDropzone } from "./upload-image";

type Props = {
    url?: string | null;
    onChange: (url: string | null) => void;
    disabled?: boolean;
};

export const ImageUploadDropzone = ({ url, onChange, disabled }: Props) => {
    const [prevUrl, setPrevUrl] = useState<string | null>(null);

    return (
        <>
            {url ? (
                <div className="relative mt-2 flex h-[246px] w-full items-center justify-center rounded-lg bg-gray-200">
                    <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        className="absolute top-1 right-1 z-50 cursor-pointer rounded-full p-1!"
                        onClick={() => {
                            onChange(null);
                        }}
                    >
                        <X />
                    </Button>
                    <Image src={url} alt="" fill className="object-contain" />
                </div>
            ) : (
                <UploadDropzone
                    endpoint="imageUploader"
                    input={{ prevUrl }}
                    onClientUploadComplete={(res) => {
                        const signedUrl = res[0].serverData.thumbnail;
                        onChange(signedUrl);
                        setPrevUrl(signedUrl);
                    }}
                    disabled={disabled}
                    config={{
                        appendOnPaste: true,
                        mode: "auto",
                    }}
                />
            )}
        </>
    );
};
