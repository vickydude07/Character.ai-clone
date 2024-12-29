import Link from 'next/link';
import Image from 'next/image';

export default function Topnavbar() {
  return (
    <div className="fixed top-0 left-0 w-full h-20 bg-[#18181b] flex items-center shadow-md z-50">
      <Link href="/" className="flex items-center">
        <div className="hidden sm:block p-2">
          <Image
            src="/images/character.ai.svg"
            alt="Character.ai"
            width={114}
            height={28}
          />
        </div>
        <div className="block sm:hidden">
          <span className="text-2xl font-semibold">c.ai</span>
        </div>
      </Link>

      <div className="flex items-center gap-2 ml-2 ">
        <Link
          href="/signup"
          className="bg-white px-3 py-2 rounded-full  text-black text-sm text-center text-decoration-1 whitespace-nowrap font-onset-sans "
        >
          Sign Up to Chat
        </Link>
        <Link
          href="/login"
          className="bg-[#18181b] font-normal px-4 py-2 rounded-full border border-white border-opacity-10 hover:bg-[#212124] text-white text-center whitespace-nowrap font-onset-sans"
        >
          Login
        </Link>
      </div>

      <div className="ml-auto mr-4 flex items-center w-full max-w-[400px] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[400px]">
        <div className="relative w-full">
          <svg
            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white"
            width="17.5"
            height="17.5"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>

          <input
            type="text"
            placeholder="  Search"
            className="w-full pl-8 pr-3 py-[10px] rounded-full bg-[#202024] text-white placeholder:text-white text-sm focus:outline-none focus:ring-0 font-onset-sans"
          />
        </div>
      </div>
    </div>
  );
}
