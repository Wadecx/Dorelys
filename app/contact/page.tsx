import { ScrollTop } from "@/components/common/scrolltop";
import { HerobannerContact } from "@/containers/contact/herobanner";
import { Questions } from "@/containers/contact/Questions";
import { Tally } from "@/containers/contact/tally";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact",
  description: "",
};

export default function HomePage() {
  return (
    <>
      <HerobannerContact/>
      <Tally />
      <Questions/>
      <ScrollTop/>
    </>
  );
}
