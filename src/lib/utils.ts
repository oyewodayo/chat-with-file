import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: (string | ClassValue)[]): string {
    return twMerge(clsx(inputs));
}
