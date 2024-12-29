"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const cards = [
  { title: "12 Days of Character", subtitle: "Click here to enter our holiday contest!", image: "/images/character.svg", author: "@cai-official", views: "61.6k" },
  { title: "Man From 2025", subtitle: "Curious about your 2025? I'll check for you.", image: "/images/2025.svg", author: "@cai-official", views: "828.6k" },
  { title: "AwkwardFamilyDinner", subtitle: "The chaos is real, and so is the tension.", image: "/images/dinner.svg", author: "@cai-official", views: "4.4m" },
  { title: "Detective Haywire", subtitle: "Investigate your imagination", image: "/images/detective.svg", author: "@cai-official", views: "2.4m" },
  { title: "Space Explorer", subtitle: "Embark on a cosmic adventure.", image: "/images/space.svg", author: "@cai-official", views: "1.2m" },
  { title: "Fantasy World", subtitle: "Explore the realms of magic and wonder.", image: "/images/fantasy.svg", author: "@cai-official", views: "730.2k" },
  { title: "Mystery Tales", subtitle: "Solve puzzles and uncover secrets.", image: "/images/mystery.svg", author: "@cai-official", views: "430.1k" },
  { title: "Cyberpunk City", subtitle: "Discover a futuristic metropolis.", image: "/images/cyberpunk.svg", author: "@cai-official", views: "950.4k" },
  { title: "Cooking Master", subtitle: "Cook up a storm in this virtual kitchen.", image: "/images/cooking.svg", author: "@cai-official", views: "620.5k" },
  { title: "Robot Adventure", subtitle: "Follow the journey of an AI companion.", image: "/images/robot.svg", author: "@cai-official", views: "310.8k" },
];

const Featured = () => {
  return (
    <div className="bg-[#18181b] text-white py-6 overflow-y-hidden">
      <h2 className="text-md font-onset-sans px-2 mb-4">Featured</h2>
      <div className="group relative cursor-pointer">
        <Swiper
          modules={[FreeMode, Mousewheel]}
          slidesPerView="auto"
          spaceBetween={8}
          freeMode={{
            enabled: true,
            sticky: false,
          }}
          mousewheel={{
            forceToAxis: true,
          }}
          className="w-full"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index} style={{ width: "312px" }}>
              <div className="w-full h-[146px] bg-[#202024] rounded-3xl shadow-md flex flex-col justify-between p-4 hover:bg-[#26272b] transition">
                <div className="flex items-start">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-14 h-14 rounded-md object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-medium">{card.title}</h3>
                    <p className="text-sm text-gray-400">{card.subtitle}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-gray-500 text-sm">
                  <span>By {card.author}</span>
                  <span>{card.views}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Featured;
