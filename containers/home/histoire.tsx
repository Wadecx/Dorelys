import { Section } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { AnimateContainer } from "@/animations";
import { Title } from "@/components/common/Title";

export const Histoire = () => {
  return (
    <Section size={"9/10"} className="z-[999]">
      <div className="flex items-center justify-center flex-col md:flex-row gap-8">
        <div className="md:w-5/12 md:ml-24">
        <AnimateContainer delay={0.2}>
        <Image
            src="/assets/images/home/section_1.png"
            width="0"
            height="0"
            className="w-full max-h-[700px] object-contain"
            alt="Image d'une d'orure"
          ></Image>
        </AnimateContainer>
          
        </div>

        <div className="flex-1 flex flex-col gap-8 text-start md:ml-4">
          <AnimateContainer>
            {/* <h2 className="uppercase font-light text-3xl md:text-5xl md:max-w-[90%]">
              L'histoire derrière l'execellence
            </h2> */}

            <Title lineColor="#000">L'histoire derrière l'execellence</Title>
          </AnimateContainer>

          <AnimateContainer delay={0.2}>
            <p className="text-justify md:max-w-[80%] text-xl">
              Il y a 15 ans, j’ai découvert la dorure. Mon activité propose une
              immersion dans l’univers des ors et des matières, empruntant des
              références classiques et des éléments de décoration.
            </p>
          </AnimateContainer>

          <AnimateContainer delay={0.2}>
            <p className="text-justify md:max-w-[80%] text-xl">
              Chaque projet est unique. Précision et passion se rencontrent pour
              donner vie aux intérieurs les plus prestigieux.
            </p>
          </AnimateContainer>

          <AnimateContainer delay={0.2}>
            <p className="text-justify max-w-[80%] text-xl">
              Vous aussi, donnez une dimension unique à vos <br /> projets 👇
            </p>
          </AnimateContainer>

          <AnimateContainer delay={0.2}>
            <Link
              href="/"
              className="flex items-center uppercase justify-center font-bold bg-primary text-white h-10 rounded-md px-6 py-6 w-fit text-xl uppercase hover:shadow-xl transition duration-300"
            >
              échangeons ensemble
            </Link>
          </AnimateContainer>
        </div>
      </div>
      <div className="absolute right-0 md:top-[1400px] top-[1700px] md:opacity-60 opacity-30">
        <Image
          src="/assets/logo/signature.png"
          alt="image d'une signature"
          width={500}
          height={0}
        ></Image>
      </div>
    </Section>
  );
};
