"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
    className?: HTMLDivElement["className"];
    isDetail?: boolean;
};

export const VRButton = ({ className, isDetail = false }: Props) => {
    return (
        <motion.div
            animate={{
                boxShadow: [
                    "0 0 0px var(--secondary)",
                    "0 0 12px var(--secondary)",
                    "0 0 0px var(--secondary)",
                ],
                borderColor: [
                    "var(--secondary)",
                    "var(--secondary-foreground)",
                    "var(--secondary)",
                ],
            }}
            transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className={cn(
                "inline-flex rounded-full border-1 text-white",
                className,
            )}
        >
            <Button
                variant="ghost"
                className={cn(
                    "border-secondary hover:text-secondary cursor-pointer rounded-full border-1 text-sm font-medium text-inherit hover:bg-transparent!",
                    !isDetail && "size-7",
                )}
                asChild
            >
                <Link href="https://tour.panoee.net/iframe/Sundora-Tower-Danang">
                    <Icons.isolation className="size-4 shrink-0" />
                    {isDetail && <span>VR 360 DỰ ÁN</span>}
                </Link>
            </Button>
        </motion.div>
    );
};
