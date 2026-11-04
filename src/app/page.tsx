import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PublicationCard } from "@/components/PublicationCard";
import { Section } from "@/components/Section";
import { TeachingItem } from "@/components/TeachingItem";
import { profile, siteUrl } from "@/data/profile";
import { publications } from "@/data/publications";
import { teaching } from "@/data/teaching";

// Structured data so search engines understand who this page is about.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  image: `${siteUrl}${profile.photo}`,
  jobTitle: "AI Researcher",
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Polytechnique Montréal" },
    { "@type": "CollegeOrUniversity", name: "Amirkabir University of Technology" },
  ],
  knowsAbout: [
    "Probabilistic deep learning",
    "Computer vision",
    "Generative models",
    "Climate downscaling",
    "Uncertainty quantification",
  ],
  sameAs: profile.socials
    .filter((s) => s.href.startsWith("https://"))
    .map((s) => s.href),
};

export default function Home() {
  return (
    <div id="top">
      <Header />
      <main className="mx-auto max-w-3xl px-5 pb-24 sm:px-6">
        <Hero />

        <Section id="publications" title="Publications" delay={120}>
          <div className="space-y-12">
            {publications.map((pub) => (
              <PublicationCard key={pub.title} {...pub} />
            ))}
          </div>
        </Section>

        <Section id="teaching" title="Teaching" delay={240}>
          <ol className="space-y-10">
            {teaching.map((entry) => (
              <TeachingItem key={`${entry.role}-${entry.period}`} {...entry} />
            ))}
          </ol>
        </Section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
