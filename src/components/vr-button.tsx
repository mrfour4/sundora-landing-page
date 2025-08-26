"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/sundora/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
    className?: HTMLDivElement["className"];
    showDetail?: boolean;
};

export const VRButton = ({ className, showDetail = false }: Props) => {
    return (
        <motion.div
            animate={{
                boxShadow: [
                    "0 0 0px var(--sundora-secondary)",
                    "0 0 12px var(--sundora-secondary)",
                    "0 0 0px var(--sundora-secondary)",
                ],
                borderColor: [
                    "var(--sundora-secondary)",
                    "var(--sundora-secondary-foreground)",
                    "var(--sundora-secondary)",
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
                    "border-sundora-secondary hover:text-sundora-secondary cursor-pointer rounded-full border-1 text-xs font-medium text-inherit hover:bg-transparent! lg:text-sm",
                    !showDetail && "size-6 px-0! lg:size-7",
                )}
                asChild
            >
                <Link
                    href="https://tour.panoee.net/iframe/Sundora-Tower-Danang"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icons.isolation className="size-3 shrink-0 lg:size-4" />
                    {showDetail && <span>VR 360 DỰ ÁN</span>}
                </Link>
            </Button>
        </motion.div>
    );
};
