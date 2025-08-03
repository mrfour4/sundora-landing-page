import { Icons } from "@/components/icons";
import { LucideIcon } from "lucide-react";

export enum ESectionId {
    HOME = "home",
    VIDEO = "video",
    OVERVIEW = "overview",
    INSPIRATION = "inspiration",
    LOCATION = "location",
    PRIVILEGE = "privilege",
    UTILITIES = "utilities",
    GROUND = "ground",
    APARTMENT = "apartment",
    LIBRARY = "library",
    PARTNERS = "partners",
    NEWS = "news",
    CONTACT = "contact",
}

export type TProjectInfo = {
    label: string;
    value: string;
};

export type TLocationItem = {
    name: string;
    distance: string;
};

export type TTravelGroup = {
    duration: string;
    locations: TLocationItem[];
};

export type TNews = {
    imageUrl: string;
    title: string;
    href: string;
};

export type TContactLocation = {
    office: string;
    address: string;
};

type TCustomIcon = typeof Icons.mail;

export type TContact = {
    icon: LucideIcon | TCustomIcon;
    href: string;
    label: string;
    content: string;
};
