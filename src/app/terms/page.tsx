import fs from "fs";
import path from "path";
import { MarkdownPage } from "@/components/markdown-page";

export const metadata = {
  title: "Terms & Conditions — elëos events",
};

export default function TermsPage() {
  const source = fs.readFileSync(
    path.join(process.cwd(), "src/content/terms.md"),
    "utf-8"
  );

  return <MarkdownPage source={source} />;
}
