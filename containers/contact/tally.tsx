"use client";
import { Section } from "@/components";
import { useEffect } from "react";

export const Tally = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      Tally.loadEmbeds();
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Section className="mt-0 md:mt-0 mb-0 md:mb-0 bg-secondary py-24" size="full">
      <iframe
        data-tally-src="https://tally.so/embed/nGkWNj?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="70%"
        height="448"
        title="CONTACT"
        className="max-w-9/10 mx-auto 3xl:max-w-[1400px]"
      ></iframe>
    </Section>
  );
};
