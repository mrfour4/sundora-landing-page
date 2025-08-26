"use client";

import { useMounted } from "@/hooks/use-mounted";
import { PlateEditor } from "./plate-editor";

type Props = {
    value?: unknown;
    className?: HTMLDivElement["className"];
    contentStyle?: string;
    readOnly: boolean;
};

export const EditorClient = (props: Props) => {
    const mounted = useMounted();

    if (!mounted) {
        return null;
    }

    return <PlateEditor {...props} />;
};
