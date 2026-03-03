import { Suspense } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  Hero,
  News,
  Origin,
  Partner,
  Product,
  Promotion,
} from "../components/sections";
import Loading from "./loading";

const page = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Product />
        <Suspense fallback={<Loading />}>
          <Origin />
          <News />
          <Partner />
          <Promotion />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default page;
