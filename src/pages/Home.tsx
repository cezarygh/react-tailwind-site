import hireMe from "@/assets/img/hire_me.jpeg";

const Home = () => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <div
        className="relative h-screen w-full bg-cover bg-center text-white flex flex-col justify-between"
        style={{ backgroundImage: `url(${hireMe})` }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative flex flex-col justify-between h-full px-6 md:px-16 py-10">
          {/* Top */}
          <div className="flex justify-between text-base md:text-xl tracking-wide">
            <div className="flex flex-col gap-0.5 md:gap-1">
            
            </div>
            <div className="flex flex-col gap-0.5 md:gap-1 text-right">
              <p className="font-semibold">Portfolio 2025</p>
              <p className="font-light">Latest Work</p>
            </div>
          </div>

          {/* Center */}
          <div className="flex flex-col items-center gap-16 md:gap-24 max-w-[1000px] mx-auto text-center">
            <div>
              <p className="text-2xl md:text-3xl lg:text-4xl tracking-wider uppercase">
                I Create
              </p>
            </div>
            <div className="font-serif text-5xl sm:text-6xl md:text-[9vw] lg:text-[100px] font-bold leading-tight drop-shadow-lg">
              Digital Experiences
            </div>
            <div className="self-end text-right text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide drop-shadow-md">
              That Matter
            </div>
          </div>

          {/* Bottom */}
          <div className="flex justify-between text-base md:text-xl tracking-wide">
            <div className="flex flex-col gap-0.5 md:gap-1">
              <p className="font-semibold">Web Design</p>
              <p className="font-light">Brand Identity</p>
            </div>
            <div className="flex flex-col gap-0.5 md:gap-1 text-right">
              <p className="font-semibold">UI/UX Design</p>
              <p className="font-light">Development</p>
            </div>
          </div>
        </div>
      </div>

      {/* Next Section */}
      <div className="h-screen bg-black flex items-center justify-center text-white text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
        Let's Create Together
      </div>
    </div>
  );
};

export default Home;