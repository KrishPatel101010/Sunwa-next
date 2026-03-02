import Navbar from "../components/Navbar";
import {
  Hero,
  Product,
  Origin,
  News,
  Partner,
  Promotion,
} from "../components/sections";
import Footer from "../components/Footer";

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
      <Footer />
    </>
  );
};

export default page;
