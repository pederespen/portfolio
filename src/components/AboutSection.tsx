const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">My Background</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
              auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Ut in nulla enim. Phasellus molestie magna non est bibendum non
              venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.
              Mauris iaculis porttitor.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3">My Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "Tailwind CSS",
                  "Node.js",
                  "Git",
                  "Responsive Design",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Education</h3>
              <div className="mb-3">
                <div className="font-semibold">
                  Bachelor of Computer Science
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  University Name, 2018-2022
                </div>
              </div>
              <div>
                <div className="font-semibold">Web Development Bootcamp</div>
                <div className="text-gray-600 dark:text-gray-400">
                  Coding Academy, 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
