"use client";

import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { CONTACT_IMG, CONTACT_LOCATIONS, CONTACTS } from "@/constants";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { ESectionId } from "@/types";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "./contact-form";
import { ContactItem } from "./contact-item";

export const Contact = () => {
    useSectionObserver(ESectionId.CONTACT);
    return (
        <section
            id={ESectionId.CONTACT}
            className="xs:mt-16 mt-auto flex h-dvh flex-col-reverse items-center justify-center gap-y-4 lg:flex-row lg:gap-x-40 lg:px-28 lg:pt-0"
            style={{ backgroundImage: `url(${CONTACT_IMG})` }}
        >
            <div className="space-y-2 lg:space-y-6">
                <div className="flex gap-x-3">
                    <MapPin className="fill-sundora-secondary mt-1 size-4" />
                    <ul className="space-y-0 lg:space-y-3">
                        {CONTACT_LOCATIONS.map((c, index) => (
                            <li key={index}>
                                <ContactItem
                                    href="#!"
                                    label={c.office}
                                    content={c.address}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                <ul className="lg:space-y-3">
                    {CONTACTS.map((c, index) => (
                        <li key={index} className="flex items-start gap-x-3">
                            <c.icon className="fill-sundora-secondary mt-1 size-4" />
                            <ContactItem {...c} />
                        </li>
                    ))}
                </ul>

                <Separator className="bg-sundora-secondary-foreground" />

                <div className="flex items-center gap-x-4 [&_svg]:size-6">
                    <p className="text-sm font-semibold text-white">
                        Theo dõi chúng tôi tại:
                    </p>
                    <Link
                        href="https://www.facebook.com/profile.php?id=61578685858106"
                        className="ml-2"
                    >
                        <Icons.facebook />
                    </Link>
                    <Link href="https://zalo.me/46251002081481672">
                        <Icons.zalo />
                    </Link>
                </div>
            </div>

            <ContactForm />
        </section>
    );
};
