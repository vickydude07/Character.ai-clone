'use client';

import React, { useState, useEffect, useRef } from 'react';

const videoSources = [
  '/video/xmasStreet.mp4',
  '/video/xmasTable.mp4',
  '/video/xmasHouseFront.mp4',
  '/video/newYearHat.mp4',
];

const captions = [
  { subheading: 'What do you want to do?', heading: 'Keep the neighbours talking' },
  { subheading: 'What do you want to do?', heading: 'Turn the holiday vibes into 11' },
  { subheading: 'What do you want to do?', heading: 'Outshine the christmas tree' },
  { subheading: 'What do you want to do?', heading: 'Peek into the future' },
];

const cards = [
  {
    title: 'Man From 2025',
    description: "Hey there! I'm from 2025, here to answer your questions about... well, you. Just tell me a bit abo...",
    reply: 'Reply...',
    image: '/man-2025.jpg',
  },
  {
    title: 'Resolutions Coach',
    description: "Let's set some goals and make this year legendary. No excuses—just progress. Are you ready?...",
    reply: 'Reply...',
    image: '/coach.jpg',
  },
];

export default function VideoComponent() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videoSources.length);
  };

  useEffect(() => {
    const heading = captions[currentVideo].heading;
    let index = 0;
    setDisplayText('');

    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }

    typingIntervalRef.current = setInterval(() => {
      if (index <= heading.length) {
        setDisplayText(heading.slice(0, index));
        index++;
      } else {
        clearInterval(typingIntervalRef.current!);
      }
    }, 50);

    return () => {
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    };
  }, [currentVideo]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true; // Ensure muted for autoplay
      videoRef.current.load();
      videoRef.current.play().catch((error) => {
        console.error('Video autoplay failed:', error);
      });
    }
  }, [currentVideo]);

  const handleNextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videoSources.length);
  };

  return (
    <div className="hidden lg:block relative w-full p-4 my-6 relative pb-6">
      <div className="relative w-full h-[300px] rounded-3xl overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop={false}
          playsInline
          preload="auto"
          onEnded={handleVideoEnd}
          className="absolute top-0 left-0 w-[800px] h-full object-cover rounded-3xl"
        >
          <source src={videoSources[currentVideo]} type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `linear-gradient(to right, var(--hero-transparent, rgba(0, 0, 0, 0.6)), var(--background, rgba(0, 0, 0, 0.2)))`,
          }}
        ></div>

        {/* Captions */}
        <div className="absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between">
          <div className="text-white">
            <p className="text-zinc-50">{captions[currentVideo].subheading}</p>
            <h1 className="text-[32px] mt-2 font-semibold">{displayText}</h1>
          </div>
        </div>

        {/* Cards */}
        <div className="absolute top-2 right-0 flex flex-row gap-4">
          {cards.slice(0, 2).map((card, index) => (
            <div
              key={index}
              className="relative rounded-xl p-4 flex flex-col gap-4 shadow-lg hover:shadow-2xl transition-shadow group"
              style={{
                height: '280px',
                width: '280px',
                background: 'linear-gradient(110deg,#3e3e45,#37373d,#28282d,#18181c)', 
                color: 'white', 
              }}
            >
              {/* Hover Gradient */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: 'linear-gradient(110deg,#3e3e45,#37373d,#28282d,#18181c)', 
                  backgroundSize: '200% 200%',
                  backgroundPosition: 'center',
                  animation: 'hoverGradient 3s infinite'
                }}
              ></div>

              <a
                className="relative flex flex-col gap-4 h-full w-full"
                data-focus-visible="false"
                href="/"
              >
                <div className="flex gap-2">
                  <span
                    className="relative flex h-auto w-full overflow-hidden rounded-full shrink-0 grow-0"
                    title={card.title}
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '48px',
                    }}
                  >
                    <img
                      alt={card.title}
                      loading="lazy"
                      width="48"
                      height="48"
                      decoding="async"
                      className="object-cover object-center bg-card shrink-0 grow-0 h-full"
                      src={card.image}
                      style={{
                        color: 'transparent',
                      }}
                    />
                  </span>
                  <div className="text-white font-medium">{card.title}</div>
                </div>
                <div className="flex flex-col justify-between h-full flex-1">
                  <div className="max-h-36 overflow-hidden line-clamp-3 text-lg text-white">
                    {card.description}
                  </div>
                  <div className="text-gray-400 font-sans font-light group-hover:text-white">
                    {card.reply}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Next Video  */}
        <button
          type="button"
          onClick={handleNextVideo}
          className="absolute bottom-8 left-8 w-10 h-10 flex items-center justify-center rounded-full bg-zinc-800/80 hover:bg-zinc-700/80 transition z-20 text-white"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="18"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96H320v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32V64H160C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192V352c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2-9.2 22.9-11.9 34.9-6.9s19.8-16.6 19.8-29.6V448H352c88.4 0 160-71.6 160-160z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
