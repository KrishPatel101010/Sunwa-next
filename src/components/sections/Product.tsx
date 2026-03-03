import Image from "next/image";
import title from "../../../public/products-images/Title.png";
import YASKAWA from "../../../public/products-images/YASKAWA.jpg";
import OMRON from "../../../public/products-images/OMRON.jpg";
import KOGANEI from "../../../public/products-images/KOGANEI.jpg";
import MINEBIA from "../../../public/products-images/MINEBIA.jpg";
import KEL from "../../../public/products-images/KEL.jpg";
const products = [
  { name: "YASKAWA", image: YASKAWA },
  { name: "OMRON", image: OMRON },
  { name: "KOGANEI", image: KOGANEI },
  { name: "MINEBIA", image: MINEBIA },
  { name: "KEL", image: KEL },
];
const Product = () => {
  return (
    <section className="my-10">
      <div className="flex mx-10 pb-2 border-b-3 border-b-gray-200">
        <Image src={title} alt="design" />
        <h2 className="text-2xl font-semibold text-gray-700">
          PRODUCTS & SERVICES
        </h2>
      </div>

      <div className="bg-gray-100 mx-10 mt-2 py-8 flex flex-col lg:flex-row items-center justify-evenly gap-5 border-b-2 border-b-gray-200 lg:px-10 lg:mx-0">
        {products.map((item) => (
          <div
            key={item.name}
            className="flex flex-col bg-white items-center text-center p-4"
          >
            <div className="relative w-48 h-48">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            <span className="font-medium mt-3">{item.name}</span>
          </div>
        ))}
      </div>
      <div className="-mt-7 flex justify-center">
        <button
          className="text-4xl pb-1.5 text-center bg-gray-200 text-gray-400 px-3"
          type="button"
        >
          &lsaquo;
        </button>
        <button
          className="text-4xl pb-1.5 text-center bg-gray-200 text-gray-400 px-3"
          type="button"
        >
          &rsaquo;
        </button>
      </div>
    </section>
  );
};

export default Product;
