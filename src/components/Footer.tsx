import Image from "next/image";
import Link from "next/link";
import TypeformLink from "@/components/TypeformLink";
import { siteConfig } from "@/config/site.config";

export default function Footer() {
  return (
    <footer className="relative z-20 bg-[#0f172a] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="#" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt={siteConfig.name}
                width={200}
                height={58}
                className="h-10 w-auto object-contain brightness-0 invert opacity-90"
                unoptimized
              />
            </a>
            <p className="text-slate-400 leading-relaxed">
              {siteConfig.tagline}
              <br />
              Dein Partner für zukunftssichere Weiterbildung.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {siteConfig.nav.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href={`mailto:${siteConfig.footer.email}`} className="hover:text-white">
                  {siteConfig.footer.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="h-4 w-4 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {siteConfig.footer.address}
              </li>
            </ul>
            <TypeformLink className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors">
              Jetzt beraten lassen
            </TypeformLink>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-slate-500">
          <span>{siteConfig.footer.copyright}</span>
          <span className="flex gap-6">
            <Link href="/impressum" className="hover:text-white text-slate-400">
              Impressum
            </Link>
            <Link href="/impressum#datenschutz" className="hover:text-white text-slate-400">
              Datenschutz
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
