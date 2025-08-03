import Link from "next/link";

type Props = {
    href: string;
    label: string;
    content: string;
};

export const ContactItem = ({ href, label, content }: Props) => {
    return (
        <div>
            <Link
                href={href}
                className="text-secondary-foreground text-2xl font-medium"
            >
                {label}
            </Link>
            <p className="mt-2 w-lg text-xl font-semibold text-white">
                {content}
            </p>
        </div>
    );
};
