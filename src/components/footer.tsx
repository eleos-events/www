import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#333333] bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-[#a0a0a0]">
            © {new Date().getFullYear()} elëos events. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <Link
              href="/privacy"
              className="text-sm text-[#a0a0a0] hover:text-[#00d4ff] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-[#a0a0a0] hover:text-[#00d4ff] transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
