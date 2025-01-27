import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const getEnvironmentVariable = (environmentVariable: string): string => {
  const unvalidatedEnvironmentVariable = process.env[environmentVariable];
  if (!unvalidatedEnvironmentVariable) {
    return '';
  } else {
    return unvalidatedEnvironmentVariable;
  }
};

export const config = {
  geminiKey: getEnvironmentVariable('GEMINI_KEY'),
  apiURL: getEnvironmentVariable('NEXT_PUBLIC_API_URL'),
};
