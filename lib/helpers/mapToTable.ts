export const formatValue = <T>(
    value: T | null | undefined | "",
    formatter?: (v: T) => string,
    fallback: string = "N/A"
): string | T => {
    if (value === null || value === undefined || value === "") return fallback;
    return formatter ? formatter(value as T) : value;
};

export const mapToTable = <T, U>(
    data: T[] | null | undefined,
    mapper: (item: T, f: typeof formatValue) => U
): U[] => {
    if (!data || !Array.isArray(data)) return [];
    return data.map((item) => mapper(item, formatValue));
};
