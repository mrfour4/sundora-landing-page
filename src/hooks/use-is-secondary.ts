import { useNavigationContext } from "@/components/navigation-context";
import { SECONDARY_IN_VIEWS } from "@/constants";

export const useIsSecondary = () => {
    const { sectionId } = useNavigationContext();
    return !!sectionId && SECONDARY_IN_VIEWS.includes(sectionId);
};
