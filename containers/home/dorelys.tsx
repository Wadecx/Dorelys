import { Section } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { AnimateContainer } from "@/animations";
import { Title } from "@/components/common/Title";

export const Dorelys = () => {
  return (
    <Section size={"9/10"} className=" z-[999]">
      <div className="flex items-center justify-center flex-col md:flex-row gap-8">
        <div className="md:w-2/5 md:ml-24">
          <AnimateContainer delay={0.2}>
            <Image
              src="/assets/images/home/pinceau.png"
              width="0"
              height="0"
              className="w-full max-h-[700px] object-cover"
              alt="Image d'une d'orure"
            ></Image>
          </AnimateContainer>
        </div>

        <div className="flex-1 flex flex-col gap-12 text-start md:ml-8">
          <AnimateContainer delay={0.2}>
            {/* <h2 className="uppercase font-light md:text-5xl text-3xl">
              POURQUOI CHOISIR DORÉLYS BY JMT DORURE ?
            </h2> */}

            <Title lineColor="#000" className="min-w-[90%]"> POURQUOI CHOISIR DORÉLYS BY JMT DORURE ?</Title>
          </AnimateContainer>

          <ul className="list-disc md:ml-8 ml-4 flex flex-col gap-12">
            <AnimateContainer delay={0.2}>
              <li className="md:max-w-[70%] lg:max-w-[90%] text-xl text-justify">
                <span className="font-medium">
                  Un savoir-faire d’exception :
                </span>{" "}
                15 ans d’expérience en dorure sur bois, alliant tradition et
                modernité.
              </li>
            </AnimateContainer>

            <AnimateContainer delay={0.2}>
              <li className="md:max-w-[80%] text-xl text-justify">
                <span className="font-medium">
                  Un accompagnement sur-mesure :
                </span>{" "}
                conseils personnalisés dès la conception pour garantir un
                résultat optimal.
              </li>
            </AnimateContainer>

            <AnimateContainer delay={0.2}>
              <li className="md:max-w-[80%] text-xl text-justify">
                <span className="font-medium">
                  Une valeur ajoutée singulière :
                </span>{" "}
                travail sur-mesure pour chaque projet, garantissant une finition
                unique et durable.
              </li>
            </AnimateContainer>
          </ul>
          <AnimateContainer delay={0.2}>
            <Link
              href="/"
              className="flex items-center uppercase justify-center font-bold bg-primary text-white h-10 rounded-md px-6 py-6 w-fit text-xl uppercase hover:shadow-xl transition duration-300"
            >
              j'ai un projet
            </Link>
          </AnimateContainer>
        </div>
      </div>
    </Section>
  );
};
