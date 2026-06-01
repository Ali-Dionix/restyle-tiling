import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

const serviceLinks = [
  { label: "Wall Tiling", href: "/services/wall-tiling" },
  { label: "Floor Tiling", href: "/services/floor-tiling" },
  { label: "Bathroom Tiling", href: "/services/bathroom-tiling" },
  { label: "Kitchen Tiling", href: "/services/kitchen-tiling" },
  { label: "Tile Repairs", href: "/services/tile-repairs" },
  { label: "Grouting & Finishing", href: "/services/grouting-finishing" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      {/* Orange accent line */}
      <div className="h-1 bg-gradient-to-r from-orange via-blue to-navy" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Logo + Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/restyle-logo.png"
              alt="Restyle Wall & Floor Tiling"
              width={160}
              height={44}
              className="h-10 w-auto brightness-0 invert mb-5"
            />
            <p className="text-[14px] text-white/60 leading-relaxed">
              Restyle Wall & Floor Tiling provides professional wall and floor
              tiling services with clean workmanship, careful preparation, and a
              high-quality finish.
            </p>
            <a
              href="tel:+447889890122"
              className="mt-4 inline-flex items-center gap-2 text-[14px] font-medium text-orange hover:text-orange-light transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +44 7889 890122
            </a>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-[15px] font-bold mb-5 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-orange" />
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/60 hover:text-orange transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="text-[15px] font-bold mb-5 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-orange" />
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-[14px] text-white/60 hover:text-orange transition-colors duration-200"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="text-[15px] font-bold mb-5 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-orange" />
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <svg className="w-4 h-4 text-orange mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a href="tel:+447889890122" className="text-[14px] text-white/60 hover:text-orange transition-colors">
                  +44 7889 890122
                </a>
              </li>
              <li className="flex gap-3">
                <svg className="w-4 h-4 text-orange mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                <span className="text-[14px] text-white/60">restyletiling.co.uk</span>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                href="/#contact"
                className="inline-flex items-center px-5 py-2.5 bg-orange text-white text-[13px] font-semibold rounded-md hover:bg-orange-light transition-all duration-200"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-white/40">
            <p>
              &copy; {currentYear} Restyle Wall & Floor Tiling. All rights reserved.
            </p>
            <p>
              Designed and managed by{" "}
              <a
                href="https://www.dionix.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange hover:text-orange-light transition-colors"
              >
                DIONIX
              </a>{" "}
              and{" "}
              <a
                href="https://www.exibify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange hover:text-orange-light transition-colors"
              >
                Exibify
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
