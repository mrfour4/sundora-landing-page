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

export type LocationItem = {
    name: string;
    distance: string;
};

export type TravelGroup = {
    duration: string;
    locations: LocationItem[];
};
