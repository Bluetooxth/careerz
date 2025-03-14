import Banner from "@/components/landing/Banner";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import Testimonials from "@/components/landing/Testimonials";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import React from "react";

export default function Landing() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Banner />
      <Footer />
    </main>
  );
}
