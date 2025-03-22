"use client";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import wedo2 from "../../public/images/landing-page/we-do-1.jpg";
import wedo1 from "../../public/images/landing-page/we-do-2.jpg";
import wedo3 from "../../public/images/landing-page/we-do-3.jpg";
import wedo4 from "../../public/images/landing-page/we-do-4.jpg";
import CustomImage from "../Custom-image";

const doctors = [
  {
    id: 1,
    image: wedo1,
    name: "Dr. Ruby Perrin",
    rating: 3.0,
    qualification: "BDS, MDS - Oral & Maxillofacial",
    location: "Dallas, USA",
    consultations: 400,
  },
  {
    id: 2,
    image: wedo2,
    name: "Dr. John Doe",
    rating: 4.5,
    qualification: "MBBS, MD - Cardiology",
    location: "New York, USA",
    consultations: 550,
  },
  {
    id: 3,
    image: wedo3,
    name: "Dr. Emily Carter",
    rating: 4.2,
    qualification: "MS - Orthopedics",
    location: "Los Angeles, USA",
    consultations: 620,
  },
  {
    id: 4,
    image: wedo4,
    name: "Dr. Michael Smith",
    rating: 4.8,
    qualification: "MD - Neurology",
    location: "Houston, USA",
    consultations: 710,
  },
  {
    id: 5,
    image: wedo2,
    name: "Dr. Sarah Johnson",
    rating: 3.9,
    qualification: "MD - Dermatology",
    location: "Chicago, USA",
    consultations: 480,
  },
  {
    id: 6,
    image: wedo1,
    name: "Dr. William Brown",
    rating: 4.6,
    qualification: "MD - Urology",
    location: "San Francisco, USA",
    consultations: 530,
  },
  {
    id: 7,
    image: wedo3,
    name: "Dr. Olivia Wilson",
    rating: 4.7,
    qualification: "MS - Gynecology",
    location: "Boston, USA",
    consultations: 590,
  },
];

const Testimonial = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const handleResize = () => {
      swiperInstance?.update();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [swiperInstance]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container py-16"
    >
      <div className="  bg-background  ">
        <div className="space-y-3 ">
          <h1 className=" text-xl lg:text-2xl font-medium text-primary">
            Testimonials
          </h1>
        </div>

        <div className="flex justify-self-end mb-2">
          <button onClick={() => swiperInstance?.slidePrev()}>
            <ChevronLeft size={30} className="text-primary" />
          </button>
          <button onClick={() => swiperInstance?.slideNext()}>
            <ChevronRight size={30} className="text-primary" />
          </button>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          centeredSlides={false}
          speed={400}
          loop={true}
          modules={[Navigation]}
          grabCursor={true}
          onSwiper={(swiper) => {
            if (!swiperInstance) {
              setSwiperInstance(swiper);
            }
          }}
        >
          <div className="">
            {doctors.map((doctor, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                    <div className="w-full space-y-3">
                      <h2 className="lg:text-lg font-medium text-default-700">
                        Our fitness coaches can enable you to meet your well-
                        ness objectives. They can turn into your instructor,
                        your helper, your mentor and your companion.
                      </h2>
                      <p className="text-sm lg:text-base text-default-500">
                        Osed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt. Neque porro quisquam est, qui
                        dolorem ipsum quia dolor sit amet, consectetur, adipisci
                        sed quia non numquam qui ratione voluptatem sequi
                        nesciunt. Neque porro quisquam est.
                      </p>
                    </div>
                    <div className="flex w-full gap-2">
                      <div className="w-64">
                        <CustomImage
                          src={doctor.image}
                          aspectRatio="1/1"
                          alt=""
                        />
                        <p className="text-xl text-default-500">Before</p>
                      </div>
                      <div className="w-64">
                        <CustomImage
                          src={doctor.image}
                          aspectRatio="1/1"
                          alt=""
                        />
                        <p className="text-xl text-default-500">After</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </motion.div>
  );
};
export default Testimonial;
