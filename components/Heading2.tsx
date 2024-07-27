import Image from "next/image";
import unbounceLogo from "../assets/unbounce.svg";
import baseCampLogo from "../assets/basecamp.svg";
import expediaLogo from "../assets/expedia.svg";
import framerLogo from "../assets/framer.svg";
import retoolLogo from "../assets/retool.svg";
import globeImage from "../assets/globe.svg";
import pingImage from "../assets/ping.svg";

// Service card
function ServiceCard({
  icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center w-[450px] shadow-lg p-10 mx-5 border-2 border-custom-green">
      <div className="flex justify-center">
        <Image src={icon} alt="globe" width="30" height="30" className="mr-2" />
        <h1 className="text-3xl font-medium">{title}</h1>
      </div>

      <p className="text-gray-700 mt-3">{subtitle}</p>
    </div>
  );
}

// The list of companies.
function LogoGroup() {
  return (
    <section className="flex justify-center">
      {[framerLogo, unbounceLogo, expediaLogo, baseCampLogo, retoolLogo].map(
        (logo, index) => (
          <Image
            key={index}
            src={logo}
            alt="Logo"
            width="200"
            height="200"
            className="mx-8 mt-10"
          />
        )
      )}
    </section>
  );
}

// Services section.
function Services() {
  return (
    <section className="flex flex-col items-center mt-24 pb-32">
      <h1 className="text-center text-6xl leading-tight">
        <span className="text-custom-green">Powerful</span> monitoring tools
        <br />
        in one place<span className="text-custom-green">.</span>
      </h1>

      <div className="flex mt-10">
        <ServiceCard
          icon={globeImage}
          title="Website monitoring"
          subtitle="Predict and prevent downtime before it hits. Boost reliability, save money, and keep your customers happy."
        />

        <ServiceCard
          icon={pingImage}
          title="Ping monitoring"
          subtitle="Check your website's pulse with every ping. Fast, accurate, and user-friendly monitoring."
        />
      </div>
    </section>
  );
}

export default function Heading2() {
  return (
    <section className="bg-white">
      <LogoGroup />
      <Services />
    </section>
  );
}
