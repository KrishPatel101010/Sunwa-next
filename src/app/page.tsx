import Navbar from "../components/Navbar";
import {
  Hero,
  Product,
  Origin,
  News,
  Partner,
  Promotion,
} from "../components/sections";

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
        <Promotion />
      </main>
    </>
  );
};

export default page;
