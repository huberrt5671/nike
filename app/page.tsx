import Navbar from "@/components/Navbar";
import Image from "next/image";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import SuperQuality from "./sections/SuperQuality";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import CustomerReview from "./sections/CustomerReview";
import Subscribe from "./sections/Subscribe";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <section >
      
      <Navbar />   
      <Hero />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffer />
      <CustomerReview />
      <Subscribe />
      <Footer />
      
    </section>
  );
}
