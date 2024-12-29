"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/mousewheel";

const cards = [
  { title: "Practice a new language", subtitle: "with HyperGlot", image: "/images/language.svg", link: "/language" },
  { title: "Practice interviewing", subtitle: "with Interviewer", image: "/images/interview.svg", link: "/interview" },
  { title: "Brainstorm ideas", subtitle: "with Brainstormer", image: "/images/brain.svg", link: "/brainstorm" },
  { title: "Get book recommendations", subtitle: "with Librarian Linda", image: "/images/librarian.svg", link: "/books" },
  { title: "Plan a trip", subtitle: "with Trip Planner", image: "/images/globe.svg", link: "/trip" },
  { title: "Write a story", subtitle: "with Creative Helper", image: "/images/book.svg", link: "/story" },
  { title: "Play a game", subtitle: "with Space Adventure Game", image: "/images/gam.svg", link: "/game" },
  { title: "Help me make a decision", subtitle: "with DecisionHelper", image: "/images/decision.svg", link: "/decision" },
];

const TryThese = () => {
  // Split cards into two rows
  const row1 = cards.filter((_, index) => index % 2 === 0);
  const row2 = cards.filter((_, index) => index % 2 !== 0);

  return (
    <div className="bg-[#18181b] text-white font-onest relative">
      <h2 className="text-md px-2 py-4">Try these</h2>

      {/* Row 1 */}
      <Swiper
        modules={[FreeMode, Mousewheel]}
        slidesPerView="auto"
        spaceBetween={10}
        freeMode={{
          enabled: true,
          sticky: false,
        }}
        mousewheel={{
          forceToAxis: true, // Ensures scrolling is horizontal.
        }}
        className="mb-4"
      >
        {row1.map((card, index) => (
          <SwiperSlide key={index} style={{ width: "312px" }}>
            <Link href={card.link} prefetch={true}>
              <div className="w-full h-[78px] flex items-center bg-[#202024] rounded-xl shadow-lg hover:bg-[#333] cursor-pointer transition duration-300 p-[12px]">
                <div className="relative mr-4">
                  <Image
                    src={card.image}
                    alt={`${card.title} illustration`}
                    width={40}
                    height={40}
                    className="rounded-full"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="text-md">{card.title}</h3>
                  <p className="text-gray-400 text-sm">{card.subtitle}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Row 2 */}
      <Swiper
        modules={[FreeMode, Mousewheel]}
        slidesPerView="auto"
        spaceBetween={10}
        freeMode={{
          enabled: true,
          sticky: false,
        }}
        mousewheel={{
          forceToAxis: true, // Ensures scrolling is horizontal.
        }}
      >
        {row2.map((card, index) => (
          <SwiperSlide key={index} style={{ width: "312px" }}>
            <Link href={card.link} prefetch={true}>
              <div className="w-full h-[78px] flex items-center bg-[#202024] rounded-xl shadow-lg hover:bg-[#333] cursor-pointer transition duration-300 p-[12px]">
                <div className="relative mr-4">
                  <Image
                    src={card.image}
                    alt={`${card.title} illustration`}
                    width={40}
                    height={40}
                    className="rounded-full"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="text-md">{card.title}</h3>
                  <p className="text-gray-400 text-sm">{card.subtitle}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TryThese;
