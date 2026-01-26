import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const formatValue = <T>(
  value: T | null | undefined | "",
  formatter?: (v: T) => string,
  fallback: string = "N/A"
): string | T => {
  // Explicit check for "emptiness"
  if (value === null || value === undefined || value === "") {
    return fallback;
  }
  
  return formatter ? formatter(value as T) : value;
};