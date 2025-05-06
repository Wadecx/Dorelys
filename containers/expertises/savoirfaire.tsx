import { Section } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { AnimateContainer } from "@/animations";
import { Title } from "@/components/common/Title";

export const SavoirFaire = () => {
  return (
    <Section size={"9/10"} className=" z-[999]">
      <div className="flex items-center justify-center flex-col md:flex-row gap-8">
        <div className="md:w-5/12 md:ml-24">
          <AnimateContainer>
            <Image
              src="/assets/images/expertises/homme.png"
              width="0"
              height="0"
              className="w-full max-h-[700px] object-contain"
              alt="Image d'une d'orure"
            ></Image>
          </AnimateContainer>
        </div>

        <div className="flex-1 flex flex-col gap-12 text-start md:ml-4 md:mb-[150px]">
          <AnimateContainer delay={0.2}>
            {/* <h2 className="uppercase font-light text-3xl md:text-5xl md:max-w-[95%]">
              un savoir-faire au service du prestige
            </h2> */}

            <Title lineColor="#000">un savoir-faire au service du prestige</Title>
          </AnimateContainer>

          <AnimateContainer delay={0.2}>
            <p className="text-justify md:max-w-[80%] text-xl">
              Dorélys sublime les intérieurs avec de la dorure sur-mesure,
              conçue pour répondre aux exigences des architectes et designers
              haut de gamme.
            </p>
          </AnimateContainer>

          <AnimateContainer delay={0.2}>
            <p className="text-justify md:max-w-[80%] text-xl">
              Nous transformons les matières avec l’éclat d’un matériau
              précieux, qu’il s’agisse de restauration patrimoniale ou de
              créations contemporaines !
            </p>
          </AnimateContainer>
        </div>
      </div>
      <div className="absolute right-0 top-[1500px] md:opacity-40 opacity-30">
        <Image
          src="/assets/logo/signature.png"
          alt="image d'une signature"
          width={400}
          height={0}
        />
      </div>
    </Section>
  );
};
