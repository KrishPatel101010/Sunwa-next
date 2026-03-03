import Image from "next/image";
import chip from "../../../public/hot-news-images//chip.png";
import car_robot from "../../../public/hot-news-images/car-robot.png";
import factory_robot from "../../../public/hot-news-images/factory-robot.png";
import robot_arm from "../../../public/hot-news-images/robot-arm.png";
import yaskawa_robot from "../../../public/hot-news-images/yaskawa-robot.png";
import title from "../../../public/products-images/Title.png";
const seminars = [
  { id: 1, image: factory_robot },
  { id: 2, image: chip },
  { id: 3, image: robot_arm },
  { id: 4, image: car_robot },
  { id: 5, image: yaskawa_robot },
];
const News = () => {
  return (
    <section>
      <div className="flex mx-10 pb-2 border-b-3 border-b-gray-200">
        <Image src={title} alt="design" />
        <h2 className="text-2xl font-semibold text-gray-700">HOT NEWS</h2>
      </div>
      <div className="flex flex-col gap-5 my-5 justify-evenly items-center lg:gap-0 lg:px-10 lg:flex-row">
        {seminars.map((item) => (
          <div
            key={item.id}
            className="flex flex-col ring-2 ring-gray-100 bg-white w-65"
          >
            <div className="h-60 w-full relative">
              <Image
                src={item.image}
                alt={`robot-${item.id}`}
                fill
                className="object-cover"
              />
            </div>

            <span className="text-xs text-gray-600">09/01/2022</span>
            <span className="text-sm font-medium text-gray-600">
              [Seminor] ROBOT APPLICATION IN INDUSTRIAL AGE 4.0
            </span>
          </div>
        ))}
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
