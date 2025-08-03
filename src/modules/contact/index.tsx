"use client";

import { Icons } from "@/components/icons";
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
            className="flex h-screen items-center justify-center gap-x-28 pt-36"
            style={{ backgroundImage: `url(${CONTACT_IMG})` }}
        >
            <div className="space-y-8">
                <div className="flex gap-x-8">
                    <MapPin className="fill-secondary size-10" />
                    <ul className="space-y-5">
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
                <ul className="space-y-8">
                    {CONTACTS.map((c, index) => (
                        <li key={index} className="flex gap-x-8">
                            <c.icon className="fill-secondary size-8" />
                            <ContactItem {...c} />
                        </li>
                    ))}
                </ul>

                <hr />

                <div className="flex items-center gap-x-6">
                    <p className="text-xl font-semibold text-white">
                        Theo dõi chúng tôi tại:
                    </p>
                    <Link href="#!" className="ml-4">
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
