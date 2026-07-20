import play from "../assets/Play.png";
import Reactangle from "../assets/Rectangle 2.png";
import banner from "../assets/banner.png";

const Banner = () => {
  return (
    <section className="bg-gradient-to-br from-white via-purple-50 to-white">
      <div className="max-w-[1200px] mx-auto px-6 py-16 lg:py-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* Left Content */}
        <div className="flex-1">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6 text-sm font-medium">
            <img
              src={Reactangle}
              alt="New"
              className="w-4 h-4"
            />
            New: AI-Powered Tools Available
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Supercharge Your{" "}
            <span className="text-purple-600">
              Digital Workflow
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 mt-6 text-lg leading-8 max-w-xl">
            Access premium AI tools, design assets, templates,
            and productivity software — all in one place.
            Create faster, work smarter, and boost your
            creativity with powerful digital resources.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

            <button className="bg-purple-600 text-white px-7 py-3 rounded-full font-medium transition-all duration-300 hover:bg-purple-700 hover:scale-105 shadow-lg">
              Explore Products →
            </button>

            <button className="flex items-center gap-2 border-2 border-purple-600 text-purple-600 px-7 py-3 rounded-full font-medium transition-all duration-300 hover:bg-purple-50 hover:scale-105">
              <img
                src={play}
                alt="Play"
                className="w-5 h-5"
              />
              Watch Demo
            </button>

          </div>

          {/* Social Proof */}
          <div className="mt-10">
            <p className="text-gray-500 text-sm">
              ⭐⭐⭐⭐⭐ Trusted by <span className="font-semibold text-gray-700">10,000+</span> creators worldwide.
            </p>
          </div>

        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={banner}
            alt="Digital workflow illustration"
            className="w-full max-w-xl drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;