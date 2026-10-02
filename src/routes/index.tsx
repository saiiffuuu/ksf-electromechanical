import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactBanner, Eyebrow, PageFrame, phoneLink, whatsappLink } from "@/components/site";
import { principles, services } from "@/lib/site-content";
import plantroom from "@/assets/ksf-plantroom.jpg";
import pipingImage from "@/assets/ksf-piping.jpg";
import electricalImage from "@/assets/ksf-electrical.jpg";

const companyLogos = [
  { name: "Emaar Properties", src: "/company-logos/emaar.png" },
  { name: "Meraas", src: "/company-logos/meraas.png" },
  { name: "Dubai Holding", src: "/company-logos/dubai-holding.png"},
  { name: "Binghatti Developers", src: "/company-logos/binghatti.svg", darken: true },
  { name: "Omniyat", src: "/company-logos/omniyat.png" },
  { name: "Azizi Developments", src: "/company-logos/azizi.png" },
  { name: "Nakheel", src: "/company-logos/nakheel.png" },
  { name: "DAMAC Properties", src: "/company-logos/damac.png" },
  { name: "Sobha Realty", src: "/company-logos/sobha.svg", darken: true },
  { name: "Al Habtoor Group", src: "/company-logos/al-habtoor.png" },
  { name: "Dutco Construction", src: "/company-logos/dutco.jpg" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KSF Electromechanical Works L.L.C. | Electromechanical Services Dubai" },
      { name: "description", content: "Reliable electromechanical solutions for commercial, industrial and building projects in Dubai, UAE." },
      { property: "og:title", content: "KSF Electromechanical Works L.L.C. | Dubai" },
      { property: "og:description", content: "Professional electromechanical solutions in Dubai, UAE." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageFrame>
      <section className="hero page-width">
        <div className="hero__grid">
          <div className="hero__copy">
            <Eyebrow>Electromechanical solutions · Dubai, UAE</Eyebrow>
            <h1>Reliable solutions.<br /><em>Built for performance.</em></h1>
            <p className="hero__description">KSF Electromechanical Works L.L.C. delivers professional electromechanical solutions for commercial, industrial and building projects across Dubai and the UAE.</p>
            <div className="hero__actions">
              <Button asChild variant="brand" size="lg"><Link to="/contact">Request a Quote <ArrowUpRight aria-hidden="true" /></Link></Button>
              <Button asChild variant="whatsapp" size="lg"><a href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> Chat on WhatsApp</a></Button>
              <Button asChild variant="outline" size="lg"><a href={phoneLink}><Phone aria-hidden="true" /> Call Now</a></Button>
            </div>
          </div>
          <div className="hero__image-wrap">
            <img className="hero__image" src={plantroom} alt="Commercial building plant room with HVAC equipment and ductwork" width={1024} height={1280} fetchPriority="high" />
            <span className="hero__image-note">Building systems · Dubai, UAE</span>
          </div>
        </div>
      </section>

      <section className="client-logo-carousel" aria-label="Client company logos">
        <h2 className="client-logo-carousel__heading">Trusted by Leading Developers &amp; Contractors</h2>
        <div className="client-logo-carousel__viewport">
          <div className="client-logo-carousel__track">
            {[0, 1].map((copy) => (
              <div className="client-logo-carousel__group" aria-hidden={copy === 1} key={copy}>
                {companyLogos.map((company) => (
                  <div className="client-logo-carousel__item" key={company.name}>
                    <img
                      className={company.darken ? "client-logo-carousel__image--darken" : undefined}
                      src={company.src}
                      alt={copy === 0 ? company.name : ""}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="KSF service commitments">
        <div className="page-width trust-strip__grid">
          {["Professional engineering", "Quality workmanship", "Reliable service", "Client-focused solutions"].map((label, index) => (
            <div className="trust-strip__item" key={label}><div className="trust-strip__title">0{index + 1}</div><div className="trust-strip__caption">{label}</div></div>
          ))}
        </div>
      </section>

      <section className="section page-width">
        <div className="section-heading">
          <div><Eyebrow>What we do</Eyebrow><h2>Our core services</h2></div>
          <Link className="section-heading__link" to="/services">View all services <ArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="home-service-grid">
          {services.map((service, index) => (
            <article className="home-service" key={service.title}>
              <img src={service.image} alt="" width={1024} height={768} loading="lazy" />
              <div><span className="home-service__number">0{index + 1} / KSF</span><h3>{service.title}</h3><p>{service.description}</p><Link className="home-service__link" to="/services">Learn more <ArrowRight aria-hidden="true" /></Link></div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-about">
        <img className="home-about__image" src={pipingImage} alt="Building services piping and mechanical equipment" width={1024} height={768} loading="lazy" />
        <div className="home-about__copy">
          <Eyebrow>Who we are</Eyebrow>
          <h2>Engineering solutions you can rely on.</h2>
          <p>KSF Electromechanical Works L.L.C. is a Dubai-based electromechanical company focused on dependable engineering and technical solutions, with emphasis on quality, safety and customer satisfaction.</p>
          <Button asChild variant="outline" size="lg"><Link to="/about">About KSF <ArrowRight aria-hidden="true" /></Link></Button>
        </div>
      </section>

      <section className="section values-band">
        <div className="page-width">
          <div className="values-band__intro"><Eyebrow>Why work with KSF?</Eyebrow><h2>A considered approach to every requirement.</h2></div>
          <div className="value-grid">{principles.map((item) => <article className="value-item" key={item.number}><span className="value-item__number">{item.number}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
        </div>
      </section>

      <section className="section page-width">
        <div className="section-heading"><div><Eyebrow>Where we work</Eyebrow><h2>Supporting modern buildings and projects.</h2></div></div>
        <div className="image-trio">
          <div className="image-trio__item"><img src={plantroom} alt="Commercial building systems" width={1024} height={1280} loading="lazy" /><span className="image-trio__caption">Commercial buildings</span></div>
          <div className="image-trio__item"><img src={electricalImage} alt="Electrical and technical services" width={1024} height={768} loading="lazy" /><span className="image-trio__caption">Engineering & technical services</span></div>
          <div className="image-trio__item"><img src={pipingImage} alt="Building maintenance systems" width={1024} height={768} loading="lazy" /><span className="image-trio__caption">Building maintenance</span></div>
        </div>
      </section>

      <ContactBanner />
    </PageFrame>
  );
}