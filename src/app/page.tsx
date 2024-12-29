import ForYou from "./_components/foryou";
import VideoCarousel from "./_components/VideoCarousel";
import TryThese from "./_components/trythese";
import Featured from "./_components/featured";

export default function HomePage() {
  return (
    <div className="bg-[#18181b] max-h-screen h-screen text-white overflow-auto">
      <div className="max-w-7xl mx-auto">
        <VideoCarousel />
        <ForYou />
        <TryThese />
        <Featured />
      </div>
    </div>
  );
}
