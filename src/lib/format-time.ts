import { differenceInHours, format, formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";

export function formatTime(date: string) {
    const diffHours = differenceInHours(new Date(), date);

    if (diffHours < 24) {
        return formatDistanceToNow(date, { addSuffix: true, locale: vi });
    } else {
        return format(date, "dd/MM/yyyy", { locale: vi });
    }
}
