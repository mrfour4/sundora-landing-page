import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Column } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react";

interface Props<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
    column: Column<TData, TValue>;
    title: string;
}

export const ColumnHeader = <TData, TValue>({
    column,
    title,
    className,
}: Props<TData, TValue>) => {
    if (!column.getCanSort()) {
        return <div className={cn(className)}>{title}</div>;
    }

    const sorted = column.getIsSorted();

    return (
        <div className={cn("flex items-center gap-2", className)}>
            <Button
                variant="ghost"
                size="sm"
                className="data-[state=open]:bg-accent -ml-3 h-8"
                onClick={() => column.toggleSorting(sorted === "asc")}
            >
                <span>{title}</span>
                {sorted === "desc" ? (
                    <ArrowDown />
                ) : sorted === "asc" ? (
                    <ArrowUp />
                ) : (
                    <ChevronsUpDown />
                )}
            </Button>
        </div>
    );
};
