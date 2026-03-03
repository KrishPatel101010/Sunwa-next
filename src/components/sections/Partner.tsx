import Image from "next/image";
import title1 from "../../../public/partners-images/Title1.png";
import nato from "../../../public/partners-images/nato.png";
import omron from "../../../public/partners-images/omron.png";
import nichicon from "../../../public/partners-images/nichicon.png";
import stanley from "../../../public/partners-images/stanley.png";
import koganei from "../../../public/partners-images/koganei.jpg";
import kel from "../../../public/partners-images/kel.png";
import mitsumi from "../../../public/partners-images/mitsumi.png";

const partners = [
  { src: nato, alt: "nato", grayscale: true },
  { src: omron, alt: "omron", grayscale: true },
  { src: nichicon, alt: "nichicon", grayscale: true },
  { src: stanley, alt: "stanley", grayscale: true },
  { src: koganei, alt: "koganei", grayscale: false, large: true },
  { src: stanley, alt: "stanley", grayscale: true },
  { src: kel, alt: "kel", grayscale: true },
  { src: nichicon, alt: "nichicon", grayscale: true },
  { src: mitsumi, alt: "mitsumi", grayscale: true },
];

const Partner = () => {
  return (
    <section>
      <div className="flex  mt-15 mx-10 justify-between pb-2 border-b-3 border-b-gray-200">
        <Image src={title1} alt="design" className="hidden lg:inline"/>
        <h2 className="text-2xl font-semibold text-gray-700">OUR PARTNER</h2>
        <Image src={title1} alt="design" className="hidden lg:inline"/>
      </div>
      <div className="flex flex-col justify-center lg:w-auto lg:flex-row items-center border border-gray-200 gap-5 mx-10 px-5 relative py-10 lg:py-20">
        {partners.map((partner, index) => (
          <div
            key={index}
            className={partner.large ? "flex-2 relative" : "flex-1"}
          >
            <Image
              src={partner.src}
              alt={partner.alt}
              className={`
          object-contain
          ${partner.grayscale ? "grayscale w-50" : ""}
          ${partner.large ? "w-md lg:w-full" : ""}
        `}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partner;
