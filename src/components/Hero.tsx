import Image from "next/image";
import { profile } from "@/data/profile";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  return (
    <section
      id="about"
      aria-label="About"
      className="grid scroll-mt-20 gap-8 pt-12 pb-4 sm:pt-16 md:grid-cols-[1fr_14rem] md:items-start md:gap-12"
    >
      <div className="motion-safe:animate-fade-up md:order-2 md:pt-2">
        <Image
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          width={640}
          height={640}
          loading="eager"
          fetchPriority="high"
          className="size-32 rounded-full object-cover shadow-sm ring-1 ring-border sm:size-40 md:size-56"
        />
      </div>

      <div className="motion-safe:animate-fade-up md:order-1">
        <h1 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-2 text-muted">{profile.tagline}</p>

        <div className="mt-6 space-y-4 text-fg/90">
          <p>
            I recently graduated with a Master’s in Applied Mathematics from{" "}
            <a className="link" href="https://www.polymtl.ca/">
              Polytechnique Montréal
            </a>
            , where I was a graduate research assistant at{" "}
            <a className="link" href="https://mila.quebec/">
              Mila – Quebec AI Institute
            </a>{" "}
            under the supervision of{" "}
            <a className="link" href="https://www.polymtl.ca/expertises/carreau-julie">
              Julie Carreau
            </a>
            . My research focused on the intersection of probabilistic deep learning,
            computer vision, and scientific machine learning, with applications in
            uncertainty-aware modeling and climate modeling. I also worked as a Machine
            Learning Research Intern at{" "}
            <a className="link" href="https://www.ouranos.ca/">
              Ouranos
            </a>
            , where I developed deep learning models for high-resolution data
            generation. Before that, I obtained my Bachelor’s in Applied Mathematics with
            a minor in Computer Science from{" "}
            <a className="link" href="https://aut.ac.ir/en">
              Amirkabir University of Technology
            </a>
            , one of the top universities in Iran.
          </p>
          <p>
            My research interests lie in building reliable and interpretable AI systems,
            especially through probabilistic generative models, uncertainty-aware deep
            learning, and high-dimensional computer vision pipelines. More recently, I
            have become increasingly interested in large language models (LLMs),
            including explainability, reliability, and their integration into end-to-end
            AI systems. With a strong mathematical foundation and hands-on experience
            across the full ML lifecycle, I am interested in advancing research on
            generative AI, multimodal learning, and trustworthy AI systems.
          </p>
        </div>

        <div className="mt-8">
          <SocialLinks links={profile.socials} />
        </div>
      </div>
    </section>
  );
}
