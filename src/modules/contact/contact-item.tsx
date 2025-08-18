import Link from "next/link";

type Props = {
    href: string;
    label: string;
    content: string;
};

export const ContactItem = ({ href, label, content }: Props) => {
    return (
        <div className="max-w-[308px]">
            <Link
                href={href}
                className="text-secondary-foreground text-xs font-medium lg:text-sm"
            >
                {label}
            </Link>
            <p className="text-xs font-semibold text-white lg:text-sm">
                {content}
            </p>
        </div>
    );
};
