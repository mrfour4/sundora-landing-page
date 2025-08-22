import { prisma } from "@/lib/prisma";
import { columns } from "./column";
import { DataTable } from "./data-table";

export default async function ListPosts() {
    const data = await prisma.post.findMany({
        orderBy: {
            updatedAt: "desc",
        },
    });
    return <DataTable columns={columns} data={data} />;
}
