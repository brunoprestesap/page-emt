import About from "@/components/About";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instituto Amparo - Estimulação Magnética Transcraniana",
  description: "Estimulação Magnética Transcraniana - Melhor preço do Brasil",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}
