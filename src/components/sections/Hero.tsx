import Image from "next/image";
import hero from "../../../public/hero-images/Hero-image.png";
import delivery from "../../../public/services-images/delivery.png";
import money from "../../../public/services-images/money.png";
import safety from "../../../public/services-images/safety.png";
import support from "../../../public/services-images/support.png";

const Hero = () => {
  return (
    <section>
      <div className="my-5 lg:mx-10">
        <Image src={hero} alt="company's visual"></Image>
      </div>
      <div className="flex gap-10 mt-15 justify-around lg:px-60">
        <div className="flex justify-center flex-1 gap-4 px-7 py-4 border border-gray-200">
          <Image src={money} alt="money-icon"></Image>
          <div>
            <p className="text-primary font-medium">EASINESS</p>
            <span>Financial transitions</span>
          </div>
        </div>
        <div className="flex justify-center flex-1 gap-4 px-7 py-4 border border-gray-200">
          <Image src={support} alt="money-icon"></Image>
          <div>
            <p className="text-primary font-medium">SUPPORT</p>
            <span>24 hour on day</span>
          </div>
        </div>
        <div className="flex justify-center flex-1 gap-4 px-7 py-4 border border-gray-200">
          <Image src={delivery} alt="money-icon"></Image>
          <div>
            <p className="text-primary font-medium">FREESHIP</p>
            <span>Within the city</span>
          </div>
        </div>
        <div className="flex justify-center flex-1 gap-4 px-7 py-4 border border-gray-200">
          <Image src={safety} alt="money-icon"></Image>
          <div>
            <p className="text-primary font-medium">WARRENTY</p>
            <span>+ 365 days</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
