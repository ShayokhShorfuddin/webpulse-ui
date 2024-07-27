import Link from "next/link";
import { LogoText } from "./Navbar";

export default function Footer() {
  return (
    <section className="flex flex-col items-center container my-10">
      <LogoText />

      {["Home", "About", "Pricing", "API", "Help"].map((text, index) => (
        <Link key={index} href={"/"} className="my-1">
          <p className="text-navlink-gray hover:text-custom-green">{text}</p>
        </Link>
      ))}
    </section>
  );
}

// TODO: Landing page looks nice. Start working on the dashboard. See dashboard1.webp
// Add charts (install recharts. ShadCN charts components has already been installed)
