import fs from "fs";
import path from "path";
import { MarkdownPage } from "@/components/markdown-page";

export const metadata = {
  title: "Privacy Policy — elëos events",
};

export default function PrivacyPage() {
  const source = fs.readFileSync(
    path.join(process.cwd(), "src/content/privacy.md"),
    "utf-8"
  );

  return <MarkdownPage source={source} />;
}
