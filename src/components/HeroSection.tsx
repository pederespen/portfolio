const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I&apos;m <span className="text-blue-500">Your Name</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
            Web Developer & Designer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I build beautiful, responsive websites with modern technologies that
            help businesses grow and stand out.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>
        <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-500">
          {/* Replace with your own image */}
          <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
            Your Photo
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
