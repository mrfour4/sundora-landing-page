import { z } from "zod";
import { ZodEffects } from "zod/v3";

/* eslint-disable  @typescript-eslint/no-explicit-any */
function unwrapObjectSchema(schema: z.ZodTypeAny): z.ZodObject<any> {
    let cur: z.ZodTypeAny = schema;
    while (cur instanceof ZodEffects) cur = cur.innerType();
    if (!(cur instanceof z.ZodObject)) {
        throw new Error("schema must be ZodObject");
    }
    return cur as z.ZodObject<any>;
}

export function parseFormData<T extends z.ZodTypeAny>(
    formData: FormData,
    schema: T,
): z.infer<T> {
    const objSchema = unwrapObjectSchema(schema);
    const shape = objSchema.shape;
    const out: Record<string, unknown> = {};

    for (const key of Object.keys(shape)) {
        const def = shape[key] as z.ZodTypeAny | undefined;
        if (!def) continue;

        const all = formData.getAll(key);
        if (all.length === 0) continue;

        if (def instanceof z.ZodArray) {
            out[key] = all.map((val) => (val === "" ? undefined : val));
        } else {
            const value = all[0];
            out[key] = value === "" ? undefined : value;
        }
    }

    return schema.parse(out);
}
