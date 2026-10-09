import React from 'react'
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Testimonials from "../components/Testimonials/Testimonials";
import CallToAction from "../components/CallToAction/CallToAction";
import Footer from "../components/Footer/Footer";



const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default LandingPage
