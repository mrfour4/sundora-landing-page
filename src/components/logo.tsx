"use client";

import { RICH_LOGO_IN_VIEWS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useNavigationContext } from "./navigation-context";

export const Logo = () => {
    const { sectionId } = useNavigationContext();
    const isRich = sectionId && RICH_LOGO_IN_VIEWS.includes(sectionId);

    return (
        <Link href="/" className="shrink-0">
            <Image
                src={isRich ? "/logo-rich.svg" : "/logo.svg"}
                alt="Sundora"
                width={243}
                height={137}
                className="h-[73px] w-32 xl:h-20 xl:w-36"
                priority
            />
        </Link>
    );
};
