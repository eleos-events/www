import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="border-t border-[#333333] bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Logo className="h-8 w-auto text-white" />
            </div>
            <p className="text-sm text-[#a0a0a0]">
              Boston-based bespoke events company producing high-quality live-music parties.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/events" className="text-sm text-[#a0a0a0] hover:text-[#00d4ff] transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-[#a0a0a0] hover:text-[#00d4ff] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/artists" className="text-sm text-[#a0a0a0] hover:text-[#00d4ff] transition-colors">
                  Artists
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-[#a0a0a0] hover:text-[#00d4ff] transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-[#a0a0a0] hover:text-[#00d4ff] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-[#a0a0a0] hover:text-[#00d4ff] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/vip" className="text-sm text-[#a0a0a0] hover:text-[#00d4ff] transition-colors">
                  VIP
                </Link>
              </li>
              <li>
                <Link href="/store" className="text-sm text-[#a0a0a0] hover:text-[#00d4ff] transition-colors">
                  Store
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase mb-4">Newsletter</h3>
            <p className="text-sm text-[#a0a0a0] mb-4">
              Never miss an event. Sign up for announcements and presales.
            </p>
            <Button asChild variant="outline">
              <Link href="/#newsletter">Sign Up</Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#333333]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-[#a0a0a0]">
              © {new Date().getFullYear()} elëos events. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-[#a0a0a0] hover:text-[#00d4ff] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-[#a0a0a0] hover:text-[#00d4ff] transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

