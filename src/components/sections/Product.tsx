import Image from "next/image";
import title from "../../../public/products-images/Title.png";
import product1 from "../../../public/products-images/product1.jpg";
import product2 from "../../../public/products-images/product2.jpg";
import product3 from "../../../public/products-images/product3.jpg";
import product4 from "../../../public/products-images/product4.jpg";
import product5 from "../../../public/products-images/product5.jpg";

const Product = () => {
  return (
    <section className="my-10">
      <div className="flex mx-10 pb-2 border-b-3 border-b-gray-200">
        <Image src={title} alt="design" />
        <h2 className="text-2xl font-semibold text-gray-700">
          PRODUCTS & SERVICES
        </h2>
      </div>

      <div className="bg-gray-100 mx-10 mt-2 py-8 flex items-center flex-col justify-evenly border-b-2 border-b-gray-200 lg:px-10 lg:flex-row gap-5 lg:mx-0">
        <div className="flex flex-col bg-white items-center">
          <div
            className="
          h-50 w-50 relative"
          >
            <Image
              src={product1}
              alt="product1"
              fill
              className="object-contain"
            ></Image>
          </div>
          <span className="font-medium text-center">YASKAWA</span>
        </div>
        <div className="flex flex-col bg-white text-center">
          <div className="h-50 w-50 relative">
            <Image
              src={product2}
              alt="product2"
              fill
              className="object-cover"
            ></Image>
          </div>
          <span className="font-medium">OMRON</span>
        </div>
        <div className="flex flex-col bg-white text-center">
          <div className="h-50 w-50 relative">
            <Image
              src={product3}
              alt="product3"
              fill
              className="object-cover"
            ></Image>
          </div>
          <span className="font-medium">KOGANEI</span>
        </div>
        <div className="flex flex-col bg-white text-center">
          <div className="h-50 w-50 relative">
            <Image
              src={product4}
              alt="product4"
              fill
              className="object-cover"
            ></Image>
          </div>
          <span className="font-medium">MINEBIA</span>
        </div>
        <div className="flex flex-col bg-white text-center">
          <div className="h-50 w-50 relative">
            <Image
              src={product5}
              alt="product5"
              fill
              className="object-cover"
            ></Image>
          </div>
          <span className="font-medium">KEL</span>
        </div>
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
