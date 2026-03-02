import Image from "next/image";
import origin from "../../../public/origin-images/origin.jpg";

const Origin = () => {
  return (
    <section>
      <div className="flex gap-40 lg:mx-10">
        <div className="flex-1 py-5">
          <h2 className="text-3xl text-primary font-semibold pb-5">
            THE ORIGIN OF THE NAME SUN-WA
          </h2>
          <p>
            “As a technology trading company we keep a firm grasp on market
            trends, and utilize our global network to provide our customers with
            the most up-to-date information, the best products, and the most
            reliable services. In cooperation with our manufacturing partners,
            it is our mission to promote industry and foster a prosperous
            society.”
            <br />
            <br />
            The “sun” in SUN-WA can be read as the sun in the sky, representing
            future prosperity for our company. SUN-WA is also the
            transliteration of the Japanese “三和” meaning “three in harmony.”<br />
            Since SUN-WA was founded, the three elements that our company has
            strived to keep in harmony and develop are our customers, our
            shareholders and our employees; as well as electrics, electronics
            and machinery. <br />
            <br />
            “As a technology trading company we keep a firm grasp on market
            trends, and utilize our global network to provide our customers with
            the most up-to-date information, the best products, and the most
            reliable services. In cooperation with our manufacturing partners,
            it is our mission to promote industry and foster a prosperous
            society.”
          </p>
          <div className="flex justify-center">

          <button className="border border-primary text-primary px-10 py-1" type="button">READ MORE</button>
          </div>
        </div>
        <div className="flex-1 relative">
          <Image src={origin} alt="Sunva" fill className="object-cover object-[60%_50%]"></Image>
        </div>
      </div>
    </section>
  );
};

export default Origin;
