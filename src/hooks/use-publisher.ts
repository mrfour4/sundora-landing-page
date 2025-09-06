import { useSession } from "next-auth/react";

export const useIsPublisher = () => {
    const { data } = useSession();
    // @ts-expect-error
    const roles = data?.user?.roles as string[] | undefined;
    return roles?.includes("publisher");
};
