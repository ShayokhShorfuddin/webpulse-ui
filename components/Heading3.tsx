import Image from "next/image";
import mailImage from "../assets/mail.svg";

function Notification() {
  return (
    <div className="flex justify-between items-center container my-20">
      <div>
        <h1 className="text-gray-100 text-6xl">
          Lightning{" "}
          <span className="text-custom-green leading-tight">fast</span>
          <br /> notifications
          <span className="text-custom-green leading-tight">.</span>
        </h1>

        <p className="text-custom-gray w-80 mt-2">
          Stay a step ahead of downtimes with our refined downtime detection
          system. Be the first to be notified!
        </p>
      </div>

      <Image src={mailImage} alt="mail" width="400" height="400" />
    </div>
  );
}

export default function Heading3() {
  return (
    <section>
      <Notification />
    </section>
  );
}
