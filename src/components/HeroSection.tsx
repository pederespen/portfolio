const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-between items-center px-4 pt-20 pb-6 relative"
    >
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hello, I&apos;m Peder
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6">
            I&apos;m a Full Stack Developer
          </h2>
          <p className="text-lg">
            I enjoy developing and using code to solve business problems.
          </p>
        </div>
      </div>

      <div className="mb-2">
        <a href="#about" className="animate-bounce inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
