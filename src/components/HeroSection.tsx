const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen w-full flex flex-col justify-center items-center relative"
    >
      {/* Content */}
      <div className="z-10 text-center px-4 max-w-4xl mx-auto w-[85%]">
        <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-indigo-600">
          Hello, I&apos;m Peder
        </h1>
        <p className="text-3xl text-gray-700 mb-8">
          I&apos;m a Full Stack Developer
        </p>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          I enjoy developing and using code to solve business problems.
        </p>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:text-blue-500 transition-colors duration-300"
        aria-label="Scroll to About section"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </a>
    </section>
  );
};

export default HeroSection;
