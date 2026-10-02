import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Menu, MessageCircle, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const phoneLink = "tel:+971 50 222 8678";
export const contactEmail = "baharuddinksf@gmail.com";
export const whatsappLink =
  "https://wa.me/+971502228678?text=Hello%20KSF%20Electromechanical%20Works%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.";

const navItems = [
  { label: "Home", to: "/" as const },
  { label: "About Us", to: "/about" as const },
  { label: "Services", to: "/services" as const },
  { label: "Contact Us", to: "/contact" as const },
];

export function Brand() {
  return (
    <Link to="/" aria-label="KSF Electromechanical Works home" className="brand-lockup">
      <span className="brand-lockup__name">KSF</span>
      <span className="brand-lockup__details">
        <span className="brand-lockup__company">Electromechanical Works</span>
        <span className="brand-lockup__location">L.L.C. · Dubai, UAE</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <header className="site-header">
      <div className="site-header__inner page-width">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={pathname === item.to ? "nav-link nav-link--active" : "nav-link"}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Button asChild variant="whatsapp" className="header-whatsapp">
            <a href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /><span>WhatsApp</span></a>
          </Button>
          <Button asChild variant="outline" className="header-call">
            <a href={phoneLink} aria-label="Call KSF at +971 50 2228678">
              <Phone aria-hidden="true" />
              <span>+971 50 2228678</span>
            </a>
          </Button>
          <Button asChild variant="brand" size="lg" className="header-quote">
            <Link to="/contact">Get a Quote <ArrowUpRight aria-hidden="true" /></Link>
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="mobile-menu-button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={pathname === item.to ? "mobile-nav__link is-active" : "mobile-nav__link"}
              onClick={() => setOpen(false)}
            >
              {item.label}<ArrowRight aria-hidden="true" />
            </Link>
          ))}
          <a className="mobile-nav__phone" href={phoneLink}>
            <Phone aria-hidden="true" /> Call Now · +971 50 2228678
          </a>
          <a className="mobile-nav__phone" href={whatsappLink} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" /> Chat on WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-width site-footer__main">
        <div className="site-footer__identity">
          <Brand />
          <p>Professional electromechanical solutions in Dubai, UAE.</p>
        </div>
        <div className="site-footer__links">
          <p className="footer-label">Explore</p>
          {navItems.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
        </div>
        <div className="site-footer__contact">
          <p className="footer-label">Get in touch</p>
          <a href={phoneLink}>+971 50 2228678</a>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <p>P.O. Box 377147, Dubai, U.A.E.</p>
          <a className="footer-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer">Chat on WhatsApp <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </div>
      <div className="page-width site-footer__bottom">
        <span>© 2026 KSF Electromechanical Works L.L.C. All Rights Reserved.</span>
        <span>Dubai, United Arab Emirates</span>
      </div>
    </footer>
  );
}

export function FloatingContact() {
  return (
    <>
      <a className="floating-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <MessageCircle aria-hidden="true" />
        <span>Chat on WhatsApp</span>
      </a>
      <div className="mobile-contact-bar">
        <Button asChild variant="whatsapp" size="lg"><a href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> WhatsApp</a></Button>
        <Button asChild variant="brand" size="lg"><a href={phoneLink}><Phone aria-hidden="true" /> Call Now</a></Button>
      </div>
    </>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return <><SiteHeader /><main>{children}</main><SiteFooter /><FloatingContact /></>;
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow"><span aria-hidden="true" />{children}</div>;
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="page-intro">
      <div className="page-width page-intro__inner">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

export function ContactBanner() {
  return (
    <section className="contact-banner">
      <div className="page-width contact-banner__inner">
        <div><Eyebrow>Start a conversation</Eyebrow><h2>Let’s discuss your project.</h2><p>Tell us what you need. We’ll be glad to hear from you.</p></div>
        <div className="contact-banner__actions">
          <Button asChild variant="brand" size="lg"><Link to="/contact">Request a Quote <ArrowRight aria-hidden="true" /></Link></Button>
          <Button asChild variant="whatsapp" size="lg"><a href={whatsappLink} target="_blank" rel="noreferrer">Chat on WhatsApp</a></Button>
          <Button asChild variant="inverse-outline" size="lg"><a href={phoneLink}><Phone aria-hidden="true" /> Call Now</a></Button>
        </div>
      </div>
    </section>
  );
}