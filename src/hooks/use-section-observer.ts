import { useNavigationContext } from "@/components/navigation-context";
import { ESectionId } from "@/types";
import { useEffect } from "react";

type Opts = { rootId?: string; disableOnMobile?: boolean };

export const useSectionObserver = (id: ESectionId, opts?: Opts) => {
    const { setSectionId } = useNavigationContext();

    useEffect(() => {
        // const isSmallScreen =
        //     typeof window !== "undefined" &&
        //     window.matchMedia("(max-width: 1024px), (pointer: coarse)").matches;

        // if (opts?.disableOnMobile !== false && isSmallScreen) return;

        const el = document.getElementById(String(id));
        if (!el) return;

        const root = opts?.rootId ? document.getElementById(opts.rootId) : null;

        let raf = 0;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (!entry) return;
                cancelAnimationFrame(raf);
                if (entry.isIntersecting) {
                    raf = requestAnimationFrame(() => setSectionId(id));
                }
            },
            {
                root,
                rootMargin: "-30% 0px -70% 0px",
                threshold: 0,
            },
        );

        io.observe(el);
        return () => {
            cancelAnimationFrame(raf);
            io.disconnect();
        };
    }, [id, opts?.rootId, opts?.disableOnMobile, setSectionId]);
};
