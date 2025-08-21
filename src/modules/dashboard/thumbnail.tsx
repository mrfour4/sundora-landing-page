import { ImageIcon } from "lucide-react";
import Image from "next/image";

type Props = {
    src: string | null;
    className?: HTMLDivElement["className"];
};

export const Thumbnail = ({ src, className }: Props) => {
    if (!src) {
        return (
            <div className="flex size-16 items-center justify-center rounded-md border border-dashed border-gray-300 bg-gray-50 text-gray-400">
                <ImageIcon className="h-6 w-6" />
            </div>
        );
    }
    return (
        <div className="relative size-16 overflow-hidden rounded-md object-cover">
            <Image src={src} alt="" fill className="object-cover" />
        </div>
    );
};
