import Navbar from "../components/Navbar";
import { Hero, Product, Origin, News, Partner } from "../components/sections";

const page = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Product />
        <Origin />
        <News />
        <Partner />
      </main>
    </>
  );
};

export default page;
