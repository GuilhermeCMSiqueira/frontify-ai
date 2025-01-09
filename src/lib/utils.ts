import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const config = {

  geminiKey: 'AIzaSyD00CoZM9HKUPcb1eapxDlQpj-CGLzYfpc',

};
