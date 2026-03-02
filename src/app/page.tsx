import Navbar from "../components/Navbar";
import { Hero,Product } from "../components/sections";

const page = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Product />
      </main>
    </>
  );
};

export default page;
