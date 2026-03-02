import Navbar from "../components/Navbar";
import { Hero, Product, Origin } from "../components/sections";

const page = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Product />
        <Origin />
      </main>
    </>
  );
};

export default page;
