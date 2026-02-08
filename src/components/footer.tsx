import Link from "next/link";
import { copy } from "@/lib/copy";

export function Footer() {
  return (
    <footer className="border-t border-[#333333] bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-[#a0a0a0]">
            {copy.footer.copyright.replace("{year}", String(new Date().getFullYear()))}
          </p>
          <div className="flex space-x-8">
            {copy.footer.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#a0a0a0] hover:text-[#00d4ff] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
