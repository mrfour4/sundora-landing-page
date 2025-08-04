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
                className="text-secondary-foreground text-sm font-medium"
            >
                {label}
            </Link>
            <p className="text-sm font-semibold text-white">{content}</p>
        </div>
    );
};
