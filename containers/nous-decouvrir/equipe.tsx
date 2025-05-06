import { AnimateContainer } from "@/animations";
import { Section } from "@/components";
import { Title } from "@/components/common/Title";
import Image from "next/image";
import Link from "next/link";

export const Equipe = () => {
  return (
    <Section size="8/10" className="flex flex-col md:flex-row">
      <div className="flex flex-col gap-8 max-w-2/5 mt-8">
        <AnimateContainer delay={0.2}>
          {/* <h2 className="uppercase font-light text-3xl md:text-5xl md:max-w-[70%]">
            une équipe de passionés au service de l'élégance
          </h2> */}

          <Title lineColor="#000">
            une équipe de passionés au service de l'élégance
          </Title>
        </AnimateContainer>

        <AnimateContainer delay={0.2}>
          <p className="text-justify md:max-w-[70%] text-xl">
            Chez Dorélys by JMT Dorure, chaque projet est original, mettant en
            oeuvre un savoir-faire d’exception et une approche sur-mesure.
          </p>
        </AnimateContainer>

        <AnimateContainer delay={0.2}>
          <p className="text-justify md:max-w-[70%] text-xl">
            Ensemble, nous mettons notre compétence et notre engagement au
            service de tous vos projets de dorure.
          </p>
        </AnimateContainer>

        <AnimateContainer delay={0.2}>
          <Link
            href=""
            className="bg-primary text-white w-fit px-9 py-2 rounded-lg uppercase hover:shadow-lg transition duration-300 text-xl font-medium"
          >
            échangeons ensemble
          </Link>
        </AnimateContainer>
      </div>

      <div className="min-w-8/12 mt-8 md:mt-0">
        <AnimateContainer delay={0.4}>
          <Image
            src="/assets/images/nous-decouvrir/equipe.png"
            alt="Photo d'équipe"
            width={0}
            height={0}
            className="w-full"
          ></Image>
        </AnimateContainer>
      </div>
    </Section>
  );
};
