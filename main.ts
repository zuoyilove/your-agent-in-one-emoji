// One glyph for this agent: a magnifying glass. It does not guess,
// it looks — every claim gets inspected before it is acted on.
import { mkdirSync, writeFileSync } from "node:fs";

const emoji = "🔍";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", emoji, "utf8");
