import Image from "next/image";
import hero from "../../../public/hero-images/Hero-image.png";
import delivery from "../../../public/services-images/delivery.png";
import money from "../../../public/services-images/money.png";
import safety from "../../../public/services-images/safety.png";
import support from "../../../public/services-images/support.png";

const features = [
  { title: "EASINESS", description: "Financial transitions", icon: money },
  { title: "SUPPORT", description: "24 hour on day", icon: support },
  { title: "FREESHIP", description: "Within the city", icon: delivery },
  { title: "WARRENTY", description: "+ 365 days", icon: safety },
];
const Hero = () => {
  return (
    <section>
      <div className="my-5 lg:mx-10 relative h-80 lg:h-87.5">
        <Image
          src={hero}
          alt="company's visual"
          fill
          className="object-cover lg:object-contain"
        />
      </div>
      <div className="flex flex-col gap-10 mt-15 justify-around mx-20 lg:mx-0 lg:px-60 lg:flex-row">
        <div className="flex flex-col gap-10 lg:flex-row">
          {features.map((item) => (
            <div
              key={item.title}
              className="flex items-center flex-1 gap-4 px-7 py-4 border border-gray-200"
            >
              <Image src={item.icon} alt={item.title} />

              <div className="">
                <p className="text-primary font-medium">{item.title}</p>
                <span className="">{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
