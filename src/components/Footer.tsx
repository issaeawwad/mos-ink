import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-purple-900/40 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.jpg"
              alt="MO's Ink Tattoos"
              width={160}
              height={64}
              className="h-14 w-auto object-contain mb-4 opacity-90"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional tattoo artistry rooted in precision, passion, and
              creativity. Every piece tells your story.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-purple-400 font-semibold mb-4 uppercase tracking-widest text-xs">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/gallery", label: "Gallery" },
                { href: "/services", label: "Services" },
                { href: "/book", label: "Book Appointment" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-purple-400 font-semibold mb-4 uppercase tracking-widest text-xs">
              Studio Hours
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Mon – Fri: 12pm – 5pm</li>
              <li>Mon – Fri after 5pm: Appointment Only</li>
              <li>Weekends: Appointment Only</li>
            </ul>
            <div className="mt-4 space-y-1 text-sm text-gray-400">
              <p>📍 529 E Center St, Ithaca, MI 48847</p>
              <p>📞 (989) 330-8991</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-purple-900/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} MO&apos;s Ink. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/mos.artnstuff"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-purple-400 text-sm transition-colors duration-200"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/Mos1nk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-purple-400 text-sm transition-colors duration-200"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
