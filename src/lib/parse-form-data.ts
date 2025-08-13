import { z } from "zod";
import { SafeParseReturnType, ZodEffects } from "zod/v3";

function unwrapObjectSchema(schema: z.ZodTypeAny): z.ZodObject<any> {
    let cur: z.ZodTypeAny = schema;
    while (cur instanceof ZodEffects) {
        cur = cur.innerType();
    }
    if (!(cur instanceof z.ZodObject)) {
        throw new Error("parseFormData: schema must be or wrap a ZodObject");
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
            out[key] = all;
        } else {
            out[key] = all[0];
        }
    }

    return schema.parse(out);
}

export function safeParseFormData<T extends z.ZodTypeAny>(
    formData: FormData,
    schema: T,
): SafeParseReturnType<unknown, z.infer<T>> {
    try {
        const value = parseFormData(formData, schema);
        return { success: true, data: value } as any;
    } catch (e) {
        if (e instanceof z.ZodError) {
            return { success: false, error: e } as any;
        }
        throw e;
    }
}
