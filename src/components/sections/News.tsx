import Image from "next/image";
import robot1 from "../../../public/hot-news-images/robot1.png";
import robot2 from "../../../public/hot-news-images/robot2.png";
import robot3 from "../../../public/hot-news-images/robot3.png";
import robot4 from "../../../public/hot-news-images/robot4.png";
import robot5 from "../../../public/hot-news-images/robot5.png";
import title from "../../../public/products-images/Title.png";
const News = () => {
  return (
    <section>
      <div className="flex mx-10 pb-2 border-b-3 border-b-gray-200">
        <Image src={title} alt="design" />
        <h2 className="text-2xl font-semibold text-gray-700">HOT NEWS</h2>
      </div>
      <div className="flex flex-col gap-5 my-5 justify-evenly items-center lg:gap-0 lg:px-10 lg:flex-row">
        <div className="flex flex-col ring-2 ring-gray-100 bg-white w-65">
          <div className="h-60 w-full relative">
            <Image
              src={robot1}
              alt="robot1"
              fill
              className="object-cover"
            ></Image>
          </div>
          <span className="text-xs text-gray-600">09/01/2022</span>
          <span className="text-sm font-medium text-gray-600">
            [Seminor] ROBOT APPLICATION IN INDUSTRIAL AGE 4.0
          </span>
        </div>
        <div className="flex flex-col ring-2 ring-gray-100 bg-white w-65">
          <div className="h-60 w-full relative">
            <Image
              src={robot2}
              alt="robot2"
              fill
              className="object-cover"
            ></Image>
          </div>
          <span className="text-xs text-gray-600">09/01/2022</span>
          <span className="text-sm font-medium text-gray-600">
            [Seminor] ROBOT APPLICATION IN INDUSTRIAL AGE 4.0
          </span>
        </div>
        <div className="flex flex-col ring-2 ring-gray-100 bg-white w-65">
          <div className="h-60 w-full relative">
            <Image
              src={robot3}
              alt="robot3"
              fill
              className="object-cover"
            ></Image>
          </div>
          <span className="text-xs text-gray-600">09/01/2022</span>
          <span className="text-sm font-medium text-gray-600">
            [Seminor] ROBOT APPLICATION IN INDUSTRIAL AGE 4.0
          </span>
        </div>
        <div className="flex flex-col ring-2 ring-gray-100 bg-white w-65">
          <div className="h-60 w-full relative">
            <Image
              src={robot4}
              alt="robot4"
              fill
              className="object-cover"
            ></Image>
          </div>
          <span className="text-xs text-gray-600">09/01/2022</span>
          <span className="text-sm font-medium text-gray-600">
            [Seminor] ROBOT APPLICATION IN INDUSTRIAL AGE 4.0
          </span>
        </div>
        <div className="flex flex-col ring-2 ring-gray-100 bg-white w-65">
          <div className="h-60 w-full relative">
            <Image
              src={robot5}
              alt="robot5"
              fill
              className="object-cover"
            ></Image>
          </div>
          <span className="text-xs text-gray-600">09/01/2022</span>
          <span className="text-sm font-medium text-gray-600">
            [Seminor] ROBOT APPLICATION IN INDUSTRIAL AGE 4.0
          </span>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="border border-primary text-primary px-20 py-1 my-2"
          type="button"
        >
          READ MORE
        </button>
      </div>
    </section>
  );
};

export default News;
