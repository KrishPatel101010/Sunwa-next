"use client";
import Image from "next/image";
import about from "../../../public/follow-us-images/about-us.jpg";

const Promotion = () => {
  return (
    <section>
      <div className="my-10 relative h-64 overflow-hidden">
        <Image
          src={about}
          alt="about-us"
          className="lg:ml-80 object-cover object-[0%_40%]"
          fill
        ></Image>
        <div className="absolute z-1 inset-0 bg-[linear-gradient(to_right,#a9d8a1_0%,#a9d8a1_80%,#1fa85633_100%)] lg:bg-[linear-gradient(to_right,#a9d8a1_0%,#a9d8a1_50%,#1fa85633_100%)]"></div>
        <div className="z-5 absolute left-5 lg:left-72 top-10 flex gap-2 flex-col">
          <div className="flex flex-col">
            <span className="text-3xl lg:text-5xl font-extrabold text-white">
              FOLLOW US
            </span>
            <span className="text-lg lg:text-2xl text-white">For more Promotions !</span>
          </div>
          <div className="mt-5">
            <input
              className="lg:w-120 bg-white py-2 px-2"
              type="email"
              name="email"
              placeholder="please input your e-mail address"
            />
            <button
              className="bg-primary text-white font-semibold py-2 px-5"
              type="button"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
