"use client";

import Star from "@/components/icons/StarIcon";
import VerifiedIcon from "@/components/icons/VerifiedIcon";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import TestimonialsCard from "@/components/others/TestimonialsCard";

const Testimonials = () => {
  return (
    <section id="customer-reviews" className="max-w-[1320px] mx-auto px-4 md:px-12 py-10 md:py-25">
      {/* info */}
      <div className="mb-14">
        <h2 className="title-text max-w-[664px]">
          Unsere zufriedenen <br className="hidden md:block" /> Kunden sagen
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between  w-full">
          <p className="info-text max-w-[664px]">
            Wir sind stolz darauf, Familien und Unternehmen jedes Jahr bei der
            Einsparung ihrer Stromrechnungen zu helfen. Hier ist, was unsere
            Nutzer sagen.
          </p>

          <div className="flex gap-5 items-center mt-10">
            <h4 className="text-[40px] font-medium leading-[130%]">4.5</h4>
            {/* trust pilot */}
            <div className="flex flex-col gap-2.5">
              <div className="flex gap-[5px] items-center ">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.8776 0L17.1536 10.3647H27.755L19.1783 16.7705L22.4543 27.1353L13.8776 20.7295L5.30097 27.1353L8.57697 16.7705L0.000291824 10.3647H10.6016L13.8776 0Z"
                    fill="#00B57A"
                  />
                </svg>
                <span className="text-2xl font-medium">TrustPilot</span>
              </div>

              <div className="flex gap-0.5">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* cards */}
      <div className="w-full h-full">
        {/* Slider */}
        <Swiper
         style={{ height: "100%" }}
          modules={[Navigation]}
          loop={true}
          spaceBetween={24}
          slidesPerView={3}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2, // tablets
            },
            1024: {
              slidesPerView: 3, // laptops/desktops
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide className="h-full" key={item.id}>
              <TestimonialsCard
                image={item.image}
                name={item.name}
                date={item.date}
                title={item.title}
                feedback={item.feedback}
                rating={item.rating}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
        <div className="flex items-center justify-center gap-5 mt-10">
          <button className="prev-btn border border-[#C9D7E2] p-3 rounded-full  transition-transform hover:bg-gray-200 duration-300">
            <FaArrowLeftLong />
          </button>
          <button className="next-btn border border-[#C9D7E2] p-3 rounded-full transition-transform hover:bg-gray-200 duration-300">
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

const testimonials = [
  {
    id: 1,
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Robert Fox",
    date: "12. Oktober",
    title: "Ich liebe den jährlichen automatischen Wechsel",
    feedback:
      "Der Anbieterwechsel war früher verwirrend. Mit diesem Service dauerte es nur 5 Minuten und ich habe über 180 € im Jahr gespart.",
    rating: 5,
  },
  {
    id: 2,
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    name: "John Meyer",
    date: "05. September",
    title: "Schnell und unkompliziert!",
    feedback: "In nur wenigen Minuten abgeschlossen. Wirklich beeindruckend.",
    rating: 5,
  },
  {
    id: 3,
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Anna Müller",
    date: "22. Juli",
    title: "Sehr empfehlenswert",
    feedback:
      "Ich habe direkt nach dem Wechsel echte Einsparungen gesehen. Danke!",
    rating: 5,
  },
  {
    id: 4,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "David Schwarz",
    date: "10. Januar",
    title: "Einfach genial",
    feedback: "Der komplette Prozess war reibungslos und transparent.",
    rating: 4,
  },
  {
    id: 5,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    name: "Monika Reiter",
    date: "18. März",
    title: "Top-Service!",
    feedback: "Ich hätte nie gedacht, dass ein Wechsel so einfach sein kann!",
    rating: 5,
  },
];
