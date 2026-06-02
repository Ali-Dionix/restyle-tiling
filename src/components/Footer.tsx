"use client";

import { useActionState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { subscribeToNewsletter, type NewsletterState } from "@/services/email/actions";

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

const initialState: NewsletterState = {
  success: false,
  errors: {},
  error: "",
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [state, formAction, pending] = useActionState(subscribeToNewsletter, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state?.success]);

  return (
    <footer className="bg-navy text-white">
      {/* Orange accent line */}
      <div className="h-1 bg-gradient-to-r from-orange via-blue to-navy" />

      {/* Newsletter Signup Banner Row */}
      <div className="border-b border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-md">
            <h4 className="text-[17px] font-bold text-white mb-2">Subscribe to our Newsletter</h4>
            <p className="text-[13px] text-white/60 leading-relaxed">
              Receive professional tiling maintenance tips, project updates, and guides directly in your inbox.
            </p>
          </div>
          
          <div className="w-full md:w-auto flex flex-col gap-2">
            <form 
              ref={formRef}
              action={formAction} 
              className="w-full md:w-auto flex flex-col sm:flex-row gap-3 min-w-[280px] sm:min-w-[400px]"
              noValidate
            >
              <div className="relative flex-1 sm:min-w-[260px]">
                <label htmlFor="newsletter-email" className="sr-only">Email Address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  aria-invalid={!!state?.errors?.email}
                  aria-describedby={state?.errors?.email ? "newsletter-error" : undefined}
                  className={`w-full px-4 py-2.5 bg-white/5 border rounded-md text-[13px] text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-orange/30 transition-all ${
                    state?.errors?.email ? "border-red-400 focus:border-red-400" : "border-white/10 focus:border-orange"
                  }`}
                />
              </div>
              <button
                type="submit"
                disabled={pending}
                className="px-6 py-2.5 bg-orange text-white text-[13px] font-semibold rounded-md hover:bg-orange-light transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {pending ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Subscribing...
                  </>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
            
            {/* Inline validation feedback */}
            {state?.errors?.email && (
              <p className="text-[12px] text-red-400 font-medium" id="newsletter-error" role="alert">
                {state.errors.email}
              </p>
            )}
            {state?.success && (
              <p className="text-[12px] text-emerald-400 font-medium" role="alert">
                ✓ Success! Check your inbox for confirmation.
              </p>
            )}
            {state?.error && (
              <p className="text-[12px] text-red-400 font-medium" role="alert">
                ✗ {state.error}
              </p>
            )}
          </div>
        </div>
      </div>

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
                <a 
                  href="https://www.restyletiling.com" 
                  className="text-[14px] text-white/60 hover:text-orange transition-colors font-medium"
                >
                  www.restyletiling.com
                </a>
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
