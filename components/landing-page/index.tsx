"use client";
import LayoutLoader from "@/components/layout-loader";
import { useMounted } from "@/hooks/use-mounted";
import Footer from "./footer";

import AboutUs from "./about-us";
import Blogs from "./blogs/blogs";
import { CarouselDemo } from "./carosul";

import Header from "../header";
import CounterPage from "./counter";
import Faq from "./faq";
import Join from "./join-us";
import OfferdCourse from "./offerd-course";
import PricingPlan from "./pricing-plan";
import Testimonial from "./testimonial";
import WhatWeDo from "./we-do";

const LandingPageView = () => {
  const mounted = useMounted();
  if (!mounted) {
    return <LayoutLoader />;
  }
  return (
    <div className="bg-background">
      <Header />
      <CarouselDemo />
      <Join />
      <WhatWeDo />
      <AboutUs />
      <CounterPage />
      <OfferdCourse />
      <Testimonial />
      <Blogs />
      <Faq />
      {/* <CustomProject /> */}
      {/* <Contact /> */}
      <PricingPlan />
      <Footer />
    </div>
  );
};

export default LandingPageView;
