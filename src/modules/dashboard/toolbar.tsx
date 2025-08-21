"use client";

import { Table } from "@tanstack/react-table";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { PostStatus } from "@prisma/client";
import { DataTableFacetedFilter } from "./faceted-filter";

interface DataTableToolbarProps<TData> {
    table: Table<TData>;
}

export function DataTableToolbar<TData>({
    table,
}: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0;

    const statuses = Object.values(PostStatus).map((status) => ({
        label: status.toLocaleLowerCase(),
        value: status,
    }));

    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center gap-2">
                <Input
                    placeholder="Filter title..."
                    value={
                        (table
                            .getColumn("title")
                            ?.getFilterValue() as string) ?? ""
                    }
                    onChange={(event) =>
                        table
                            .getColumn("title")
                            ?.setFilterValue(event.target.value)
                    }
                    className="h-8 w-[150px] lg:w-[250px]"
                />
                {table.getColumn("status") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("status")}
                        title="Status"
                        options={statuses}
                    />
                )}
                {isFiltered && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => table.resetColumnFilters()}
                    >
                        Reset
                        <X />
                    </Button>
                )}
            </div>
            <Button
                type="submit"
                className="rounded-md border border-blue-300/60 bg-gradient-to-b from-blue-100 to-blue-200 px-3 py-1.5 text-sm font-semibold text-blue-700 shadow-sm hover:opacity-95 focus:ring-2 focus:ring-blue-400/50 focus:outline-none"
            >
                Tạo bài viết
            </Button>
        </div>
    );
}
