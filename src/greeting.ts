import type { GreetingOptions } from "./types";

export function createGreeting(name: string, options: GreetingOptions = {}): string {
  const trimmedName = name.trim();

  if (!trimmedName) {
    throw new TypeError("A non-empty name is required.");
  }

  return `Hello, ${trimmedName}${options.punctuation ?? "!"}`;
}
