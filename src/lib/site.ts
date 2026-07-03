export const SITE_URL = "https://kraigbritton.com";
export const SITE_NAME = "Kraig Britton";
export const SITE_TITLE = "Kraig Britton — Staff Engineer";
export const SITE_DESCRIPTION =
  "Staff engineer with 14 years across startups and enterprise. Writing about software engineering, quality engineering, and the shifting nature of the craft.";

// Serialize JSON-LD for embedding in a <script> tag; escapes "<" so the
// payload can never contain a premature "</script>" terminator.
export function jsonLdString(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
