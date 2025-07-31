import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
    return (
        <Link href="/">
            <Image src="/logo.svg" alt="Sundora" width={243} height={137} />
        </Link>
    );
};
