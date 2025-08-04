"use client";

import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { CONTACT_IMG, CONTACT_LOCATIONS, CONTACTS } from "@/constants";
import { useSectionObserver } from "@/hooks/use-section-observer";
import { ESectionId } from "@/types";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { ContactItem } from "./contact-item";
import { RegisterForm } from "./register-form";

export const Contact = () => {
    useSectionObserver(ESectionId.CONTACT);
    return (
        <section
            id={ESectionId.CONTACT}
            className="flex h-screen items-center justify-center gap-x-40 px-28"
            style={{ backgroundImage: `url(${CONTACT_IMG})` }}
        >
            <div className="space-y-6">
                <div className="flex gap-x-3">
                    <MapPin className="fill-secondary mt-1 size-4" />
                    <ul className="space-y-3">
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
                <ul className="space-y-3">
                    {CONTACTS.map((c, index) => (
                        <li key={index} className="flex items-start gap-x-3">
                            <c.icon className="fill-secondary mt-1 size-4" />
                            <ContactItem {...c} />
                        </li>
                    ))}
                </ul>

                <Separator className="bg-secondary-foreground" />

                <div className="flex items-center gap-x-4 [&_svg]:size-6">
                    <p className="text-sm font-semibold text-white">
                        Theo dõi chúng tôi tại:
                    </p>
                    <Link href="#!" className="ml-2">
                        <Icons.facebook />
                    </Link>
                    <Link href="#!">
                        <Icons.youtube />
                    </Link>
                </div>
            </div>

            <RegisterForm />
        </section>
    );
};
