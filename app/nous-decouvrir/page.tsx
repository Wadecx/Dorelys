import { ScrollTop } from "@/components/common/scrolltop";
import { Equipe } from "@/containers/nous-decouvrir/equipe";
import { HerobannerDecouvrir } from "@/containers/nous-decouvrir/herobanner";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Nous Découvrir",
  description: "",
};

export default function HomePage() {
  return (
    <>
      <HerobannerDecouvrir />
      <Equipe />
      <ScrollTop/>
    </>
  );
}
