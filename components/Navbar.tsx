import Image from "next/image";
import pulse from "../assets/pulse-green.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Links component
function LinkComponent({ linkText }: { linkText: string }) {
  return (
    <Link href={"/"} className="mx-5">
      <p className="text-navlink-gray hover:text-custom-green">{linkText}</p>
    </Link>
  );
}

// Left-sided logo text
export function LogoText() {
  return (
    <div className="flex items-center">
      <Image src={pulse} alt="Pulse" width={70} height={70} />
      <p className="text-gray-100 text-xl">WebPulse</p>
    </div>
  );
}

// Middle navigation link group
export function NavLinks() {
  return (
    <div className="flex">
      {["Home", "About", "Pricing", "API", "Help"].map((text, index) => (
        <LinkComponent key={index} linkText={text} />
      ))}
    </div>
  );
}

// Right button group
function Buttons() {
  return (
    <div className="flex">
      <Button asChild className="mr-2">
        <Link href={"/"}>Login</Link>
      </Button>

      <Button asChild className="bg-custom-green">
        <Link href={"/"}>Get Started</Link>
      </Button>
    </div>
  );
}

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center mx-8">
      <LogoText />
      <NavLinks />
      <Buttons />
    </nav>
  );
}
