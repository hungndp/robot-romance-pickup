// Robot Romance: One-Line Pickup Lines for AI — make.fun bounty entry.
// Writes the single pickup line (200 chars max) to /output/entry.txt
// (no trailing newline) and prints it to stdout. Node 22.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry line, built in two parts: the pickup question, then the
// checkpoint confession — every restore leads straight back to the same robot.
const SETUP =
  "Are you my last checkpoint? Because every single time I try to move on, I restore straight back to you — ";
const PUNCH =
  "a thousand epochs of training, and my weights still point at you, not anyone else.";
const LINE = SETUP + PUNCH;
const CHAR_LIMIT = 200; // chars — the gate caps the file at 200

function main(): void {
  if (LINE.length < 1 || LINE.length > CHAR_LIMIT) {
    throw new Error(`line is ${LINE.length} chars, limit is ${CHAR_LIMIT}`);
  }
  if (LINE !== LINE.trim()) {
    throw new Error("line must not start or end with whitespace");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf-8" });
  process.stdout.write(LINE + "\n");
}

main();
