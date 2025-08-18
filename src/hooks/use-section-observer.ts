import { useNavigationContext } from "@/components/navigation-context";
import { ESectionId } from "@/types";
import { useEffect } from "react";

type Opts = { rootId?: string };

export const useSectionObserver = (id: ESectionId, opts?: Opts) => {
    const { setSectionId } = useNavigationContext();

    useEffect(() => {
        const el = document.getElementById(String(id));
        if (!el) return;

        const root = opts?.rootId ? document.getElementById(opts.rootId) : null;

        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setSectionId(id);
                }
            },
            {
                root,
                rootMargin: "-30% 0px -70% 0px",
                threshold: [0, 0.01],
            },
        );

        io.observe(el);
        return () => io.disconnect();
    }, [id, opts?.rootId, setSectionId]);
};
