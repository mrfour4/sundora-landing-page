"use client";

import { ESectionId } from "@/types";
import { createContext, useContext, useState } from "react";

type NavigationContextType = {
    sectionId: ESectionId | null;
    setSectionId: (id: ESectionId) => void;
};

const NavigationContext = createContext<NavigationContextType | undefined>(
    undefined,
);

export const NavigationProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [sectionId, setSectionId] = useState<ESectionId | null>(null);

    return (
        <NavigationContext.Provider value={{ sectionId, setSectionId }}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigationContext = () => {
    const ctx = useContext(NavigationContext);
    if (!ctx)
        throw new Error(
            "useNavigationContext must be used inside NavigationProvider",
        );
    return ctx;
};
