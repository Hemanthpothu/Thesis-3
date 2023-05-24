import React from "react";
import Banner from "../components/banner/Banner";
import Contact from "../components/contact/Contact";
import Features from "../components/features/Features";
import Footer from "../components/footer/Footer";
import FooterBottom from "../components/footer/FooterBottom";
import Navbar from "../components/navbar/Navbar";
import Monographs from "../components/projects/Monographs";
import Resume from "../components/resume/Resume";
import Testimonial from "../components/tesimonial/Testimonial";
import ContactLeft from "../components/contact/ContactLeft";

function Home() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Resume />
        {/* <Monographs /> */}
        {/* <Testimonial /> */}
        <ContactLeft />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default Home;
