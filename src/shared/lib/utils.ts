// src/shared/lib/utils.ts

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind + conditional classNames nicely
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
