import { createFileRoute } from "@tanstack/react-router";
import heroEarrings from "@/assets/hero-earrings.jpg";
import collectionStuds from "@/assets/collection-studs.jpg";
import collectionJhumkas from "@/assets/collection-jhumkas.jpg";
import collectionHoops from "@/assets/collection-hoops.jpg";
import { useReveal } from "@/hooks/use-reveal";

const TITLE = "Malhotra Jewels — Premium Gold, Diamond & Silver Earrings, Noida";
const DESCRIPTION =
  "Malhotra Jewels at Sab Mall, Sector 27 Noida — a women-owned heritage boutique crafting premium gold, diamond and silver earrings. 5.0 stars from 839 reviews.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: heroEarrings },
      { name: "twitter:image", content: heroEarrings },
    ],
  }),
  component: Index,
});

const collections = [
  {
    img: collectionStuds,
    title: "The Sab Mall Signature",
    label: "Hallmarked 22K Gold Studs",
    offset: false,
  },
  {
    img: collectionJhumkas,
    title: "Heirloom Chandelier",
    label: "Handcrafted Traditional Jhumkas",
    offset: true,
  },
  {
    img: collectionHoops,
    title: "The Contemporary Edict",
    label: "Certified Diamond Hoops",
    offset: false,
  },
];

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-paper text-obsidian font-sans antialiased">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-obsidian/5 px-6 md:px-10 py-5 flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-serif tracking-[0.2em] uppercase">
          Malhotra Jewels
        </a>
        <div className="hidden md:flex gap-10 text-[11px] tracking-[0.25em] uppercase font-medium">
          <a href="#collections" className="hover:text-gold-antique transition-colors">Collections</a>
          <a href="#atelier" className="hover:text-gold-antique transition-colors">The Atelier</a>
          <a href="#story" className="hover:text-gold-antique transition-colors">Heritage</a>
          <a href="#visit" className="hover:text-gold-antique transition-colors">Visit Noida</a>
        </div>
        <a
          href="tel:08178184295"
          className="text-[10px] uppercase tracking-[0.2em] border-b border-obsidian pb-0.5 hover:text-gold-antique hover:border-gold-antique transition-colors"
        >
          Enquire
        </a>
      </nav>

      {/* Hero */}
      <section className="relative h-[88vh] min-h-[640px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={heroEarrings}
            alt="Intricate gold and diamond chandelier earrings on cream silk"
            width={1920}
            height={1280}
            className="w-full h-full object-cover mj-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-paper/85 via-paper/40 to-transparent" />
        </div>
        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <div className="max-w-2xl">
            <span className="mj-reveal block text-[11px] uppercase tracking-[0.4em] mb-6 text-gold-antique font-semibold italic">
              Est. Noida · Sector 27
            </span>
            <h1 className="mj-reveal mj-delay-1 text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] mb-8">
              The Art of <br />
              <span className="italic font-light mj-shimmer">Generational</span> Gold
            </h1>
            <p className="mj-reveal mj-delay-2 text-base md:text-lg text-obsidian/70 font-serif italic max-w-md leading-relaxed mb-10">
              Preserving purity and intricate detailing through every handcrafted piece.
              From Malhotra Jewels to your legacy.
            </p>
            <a
              href="#collections"
              className="mj-reveal mj-delay-3 mj-cta inline-block bg-obsidian text-paper px-10 py-4 text-[11px] uppercase tracking-[0.25em] hover:bg-gold-antique transition-all duration-500"
            >
              Explore Collections
            </a>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="py-24 md:py-32 px-6 md:px-10 bg-white">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
          <div>
            <h2 className="mj-reveal text-[11px] uppercase tracking-[0.3em] text-gold-antique mb-4 font-bold mj-rule">
              Featured Edicts
            </h2>
            <p className="mj-reveal mj-delay-1 text-4xl md:text-5xl font-serif italic">Curated Earrings</p>
          </div>
          <a
            href="#visit"
            className="mj-reveal mj-delay-2 text-[11px] uppercase tracking-[0.25em] border-b border-obsidian/20 pb-1 hover:border-gold-antique hover:text-gold-antique transition-colors self-start md:self-auto"
          >
            View All 839 Designs
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {collections.map((c, i) => (
            <article
              key={c.title}
              className={`mj-card mj-reveal mj-delay-${i + 1} group cursor-pointer ${c.offset ? "md:translate-y-12" : ""}`}
            >
              <div className="overflow-hidden mb-6 bg-paper">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="mj-img w-full aspect-[4/5] object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl mb-1">{c.title}</h3>
              <p className="text-[11px] uppercase tracking-[0.2em] text-obsidian/50">{c.label}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Atelier / Heritage strip */}
      <section id="atelier" className="py-24 md:py-32 px-6 md:px-10 bg-paper">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <h2 className="mj-reveal text-[11px] uppercase tracking-[0.3em] text-gold-antique mb-4 font-bold mj-rule">
              The Atelier
            </h2>
            <p className="mj-reveal mj-delay-1 text-4xl md:text-5xl font-serif italic leading-tight">
              A heritage of <br />quiet luxury.
            </p>
          </div>
          <div className="md:col-span-3 space-y-6 text-obsidian/70 leading-relaxed text-[15px]">
            <p className="mj-reveal mj-delay-2">
              From a young age, premium silver, gold and diamond jewellery has earned a
              distinguished place in each household — blending tradition with modern tastes
              and fashion trends. Be it the festive spirit of celebration or everyday style,
              fine jewellery complements every occasion.
            </p>
            <p className="mj-reveal mj-delay-3">
              At Malhotra Jewels, hallmarked gold and certified diamond collections are
              crafted with intricate detailing to offer statement pieces treasured for
              generations — a perfect amalgamation of comfort and opulence.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-obsidian/10">
              {[
                ["BIS", "Hallmarked Gold"],
                ["IGI", "Certified Diamonds"],
                ["100%", "Women-Owned"],
              ].map(([k, v], i) => (
                <div key={v} className={`mj-reveal mj-delay-${i + 1}`}>
                  <div className="font-serif text-2xl text-gold-antique">{k}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-obsidian/50 mt-2">
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial / Experience */}
      <section id="story" className="py-28 md:py-40 px-6 md:px-10 bg-obsidian text-paper">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mj-reveal text-gold-muted text-[11px] uppercase tracking-[0.5em] mb-12">
            Visit Our Noida Showroom
          </h2>
          <p className="mj-reveal mj-delay-1 text-3xl md:text-5xl font-serif leading-snug mb-16 italic">
            &ldquo;The best shop to shop for gold and diamonds. You can trust the quality.
            One of the oldest shops in Noida in the best location.&rdquo;
          </p>
          <p className="mj-reveal mj-delay-2 text-[10px] tracking-[0.3em] uppercase text-gold-muted mb-16">
            — K. Navneet · Local Guide · Google Review
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-[10px] uppercase tracking-[0.2em] opacity-80">
            {[
              ["Location", "Sab Mall, Sector 27"],
              ["Hours", "Open until 8:00 PM"],
              ["Identity", "Women-Owned Business"],
              ["Rating", "5.0 / 839 Reviews"],
            ].map(([k, v], i) => (
              <div key={k} className={`mj-reveal mj-delay-${i + 1} space-y-2`}>
                <p className="text-gold-muted">{k}</p>
                <p>{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="py-24 md:py-32 px-6 md:px-10 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="mj-reveal text-[11px] uppercase tracking-[0.3em] text-gold-antique mb-4 font-bold mj-rule">
              Find Us
            </h2>
            <p className="mj-reveal mj-delay-1 text-4xl md:text-5xl font-serif italic mb-10">
              Step inside the boutique.
            </p>
            <dl className="space-y-6 text-[14px]">
              <div className="mj-reveal mj-delay-2">
                <dt className="text-[10px] uppercase tracking-[0.25em] text-obsidian/40 mb-2">Address</dt>
                <dd className="text-obsidian/80 leading-relaxed">
                  Sab Mall, Captain Vijyant Thapar Marg,<br />
                  E Block, Pocket E, Sector 27,<br />
                  Noida, Uttar Pradesh 201301
                </dd>
              </div>
              <div className="mj-reveal mj-delay-3">
                <dt className="text-[10px] uppercase tracking-[0.25em] text-obsidian/40 mb-2">Hours</dt>
                <dd className="text-obsidian/80">Open daily · Closes 8:00 PM</dd>
              </div>
              <div className="mj-reveal mj-delay-4">
                <dt className="text-[10px] uppercase tracking-[0.25em] text-obsidian/40 mb-2">Telephone</dt>
                <dd className="text-obsidian/80">
                  <a href="tel:08178184295" className="hover:text-gold-antique transition-colors">
                    081781 84295
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="mj-reveal mj-delay-2 bg-paper border border-obsidian/5 p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl italic mb-4">Book a private viewing</h3>
              <p className="text-obsidian/60 text-sm leading-relaxed mb-8">
                Reserve a quiet hour with our atelier to explore bridal sets,
                bespoke diamond commissions or heritage gold pieces.
              </p>
            </div>
            <div className="space-y-3">
              <a
                href="tel:08178184295"
                className="mj-cta block text-center bg-obsidian text-paper px-8 py-4 text-[11px] uppercase tracking-[0.25em] hover:bg-gold-antique transition-colors"
              >
                Call to Reserve
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Malhotra+Jewels+Sab+Mall+Noida"
                target="_blank"
                rel="noreferrer"
                className="mj-cta block text-center border border-obsidian/20 px-8 py-4 text-[11px] uppercase tracking-[0.25em] hover:border-gold-antique hover:text-gold-antique transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-10 border-t border-obsidian/5 bg-paper">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] tracking-[0.25em] opacity-60 uppercase">
            © {new Date().getFullYear()} Malhotra Jewels · Noida
          </div>
          <div className="font-serif italic text-xl">Malhotra Jewels</div>
          <div className="flex gap-8 text-[10px] tracking-[0.25em] uppercase opacity-60">
            <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
            <a href="https://wa.me/918178184295" className="hover:opacity-100 transition-opacity">Whatsapp</a>
            <a href="tel:08178184295" className="hover:opacity-100 transition-opacity">Enquire</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
