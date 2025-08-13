import { z } from "zod";
import { personBaseSchema } from "./person-base";

export const contactSchema = personBaseSchema.extend({
    email: z.email("Email không hợp lệ").optional(),
    message: z.string().optional(),
});
export type TContactValues = z.infer<typeof contactSchema>;
