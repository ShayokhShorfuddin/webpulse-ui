import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import headImage from "../assets/head-image.svg";

export default function Heading1() {
  return (
    <section className="min-h-svh">
      <Navbar />
      <Hero />

      <div className="flex justify-center mt-16">
        <Image src={headImage} height={500} width={500} alt="Heading-image" />
      </div>
    </section>
  );
}
