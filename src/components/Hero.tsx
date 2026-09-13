import banner from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-8 lg:gap-16">

          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="font-['Inter'] text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Build Your Ideal
              <span className="block bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-lg md:mx-0">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits
              your next project.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
              <a
                href="#technologies"
                className="w-full rounded-lg bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 px-6 py-3 text-center text-sm font-semibold text-white sm:w-auto"
              >
                Explore Technologies
              </a>

              <a
                href="#about"
                className="w-full rounded-lg border border-slate-200 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-600 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={banner}
              alt="Development stack illustration"
              className="w-full max-w-xs object-contain sm:max-w-sm md:max-w-md lg:max-w-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;