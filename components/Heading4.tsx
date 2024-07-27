import check from "../assets/check.svg";
import Image from "next/image";
import { Button } from "./ui/button";

// Starter and Pro card
function Card({
  title,
  subtitle,
  price,
  perks,
}: {
  title: string;
  subtitle: string;
  price: number;
  perks: string[];
}) {
  return (
    <div className="flex flex-col w-80 shadow-lg p-7">
      <h2 className="text-3xl text-center">{title}</h2>
      <p className="text-gray-600 text-center mt-3">{subtitle}</p>

      <div className="text-center mt-7">
        <span className="text-5xl text-custom-green">${price}</span>
        <span className="text-gray-500">/month</span>
      </div>

      <Button className="mt-7">Get Started</Button>

      <div className="flex flex-col items-start mt-6">
        {perks.map((perk, index) => (
          <div key={index} className="flex my-1">
            <Image
              src={check}
              alt="Check"
              width={20}
              height={20}
              className="mr-3"
            />
            <p>{perk}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Special card thats goes in the middle
function SpecialCard({
  title,
  subtitle,
  price,
  perks,
}: {
  title: string;
  subtitle: string;
  price: number;
  perks: string[];
}) {
  return (
    <div className="flex flex-col w-80 shadow-lg border-2 border-custom-green p-7">
      <h2 className="text-3xl text-center">{title}</h2>
      <p className="text-gray-600 text-center mt-3">{subtitle}</p>

      <div className="text-center mt-7">
        <span className="text-5xl text-custom-green">${price}</span>
        <span className="text-gray-500">/month</span>
      </div>

      <Button className="mt-7">Get Started</Button>

      <div className="flex flex-col items-start mt-6">
        {perks.map((perk, index) => (
          <div key={index} className="flex my-1">
            <Image
              src={check}
              alt="Check"
              width={20}
              height={20}
              className="mr-3"
            />
            <p>{perk}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Holds 3 cards together
function CardGroup() {
  return (
    <div className="flex justify-center mt-10">
      <Card
        title="Starter"
        subtitle="Good for hobby projects. No credit card required."
        price={0}
        perks={[
          "1 min. monitoring interval",
          "HTTP & ping monitoring",
          "Basic status dashboard",
        ]}
      />

      <SpecialCard
        title="Basic"
        subtitle="Great for small teams looking to collaborate."
        price={4}
        perks={[
          "30 sec. monitoring interval",
          "HTTP & ping monitoring",
          "Advanced status dashboard",
          "Detailed logging and stats",
        ]}
      />

      <Card
        title="Pro"
        subtitle="Ideal for large-scale monitoring for businesses."
        price={10}
        perks={[
          "15 sec. monitoring interval",
          "HTTP & ping monitoring",
          "Advanced status dashboard",
          "Detailed logging and stats",
          "AI powered analysis",
        ]}
      />
    </div>
  );
}

export default function Header4() {
  return (
    <section className="bg-white py-16">
      <h1 className="text-6xl text-center">
        Pricing<span className="text-custom-green">.</span>
      </h1>

      <p className="text-gray-600 text-center mt-3">
        Flexible plans to get you going.
      </p>

      <CardGroup />
    </section>
  );
}
