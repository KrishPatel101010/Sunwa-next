import Image from "next/image";
import title1 from "../../../public/partners-images/Title1.png";
import partner1 from "../../../public/partners-images/partner1.png";
import partner2 from "../../../public/partners-images/partner2.png";
import partner3 from "../../../public/partners-images/partner3.png";
import partner4 from "../../../public/partners-images/partner4.png";
import partner5 from "../../../public/partners-images/partner5.jpg";
import partner6 from "../../../public/partners-images/partner6.png";
import partner7 from "../../../public/partners-images/partner7.png";
import partner8 from "../../../public/partners-images/partner8.png";
import partner9 from "../../../public/partners-images/partner9.png";
const Partner = () => {
  return (
    <section>
      <div className="flex mt-15 mx-10 justify-between pb-2 border-b-3 border-b-gray-200">
        <Image src={title1} alt="design"></Image>
        <h2 className="text-2xl font-semibold text-gray-700">OUR PARTNER</h2>
        <Image src={title1} alt="design"></Image>
      </div>
      <div className="flex items-center border border-gray-200 gap-5 mx-10 px-5 relative py-20">
        <div className="flex-1">
          <Image
            className="grayscale object-contain"
            src={partner1}
            alt="partner1"
          ></Image>
        </div>
        <div className="flex-1">
          <Image
            className="grayscale object-contain"
            src={partner2}
            alt="partner2"
          ></Image>
        </div>
        <div className="flex-1">
          <Image
            className="grayscale object-contain"
            src={partner3}
            alt="partner3"
          ></Image>
        </div>
        <div className="flex-1">
          <Image
            className="grayscale object-contain"
            src={partner4}
            alt="partner4"
          ></Image>
        </div>
        <div className="flex-2 relative">
          <Image
            className="object-cover w-full"
            src={partner5}
            alt="partner5"
          ></Image>
        </div>
        <div className="flex-1">
          <Image
            className="grayscale object-contain"
            src={partner6}
            alt="partner6"
          ></Image>
        </div>
        <div className="flex-1">
          <Image
            className="grayscale object-contain"
            src={partner7}
            alt="partner7"
          ></Image>
        </div>
        <div className="flex-1">
          <Image
            className="grayscale object-contain"
            src={partner8}
            alt="partner8"
          ></Image>
        </div>
        <div className="flex-1">
          <Image
            className="grayscale object-contain"
            src={partner9}
            alt="partner9"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Partner;
