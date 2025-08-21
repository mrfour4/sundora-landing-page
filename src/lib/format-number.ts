export const formatNumber = (n: number | null | undefined) =>
    Intl.NumberFormat("en-US").format(n ?? 0);
