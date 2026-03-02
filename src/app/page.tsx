import Navbar from "../components/Navbar";
import { Hero, Product, Origin, News } from "../components/sections";

const page = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Product />
        <Origin />
        <News />
      </main>
    </>
  );
};

export default page;
