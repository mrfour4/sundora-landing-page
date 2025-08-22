import { OurFileRouter } from "@/lib/uploadthing";
import {
    generateUploadButton,
    generateUploadDropzone,
} from "@uploadthing/react";

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
