import { useNavigationContext } from "@/components/navigation-context";
import { ESectionId } from "@/types";
import { useEffect } from "react";

export const useSectionObserver = (id: ESectionId) => {
    const { setSectionId } = useNavigationContext();

    useEffect(() => {
        const element = document.getElementById(id);
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setSectionId(id);
                }
            },
            {
                rootMargin: "0px 0px -70% 0px", // Trigger khi phần tử vào 30% đầu viewport
                threshold: 0.3,
            },
        );

        observer.observe(element);
        return () => observer.unobserve(element);
    }, [id, setSectionId]);
};
