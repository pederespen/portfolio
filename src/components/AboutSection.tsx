const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-20 flex items-center scroll-mt-16"
    >
      <div className="container mx-auto w-[85%]">
        <h2 className="text-4xl font-bold mb-12 text-center mt-10">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-4">My Background</h3>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
              auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
            </p>
            <p className="text-gray-700 mb-4">
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
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
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
                <div className="text-gray-600">University Name, 2018-2022</div>
              </div>
              <div>
                <div className="font-semibold">Web Development Bootcamp</div>
                <div className="text-gray-600">Coding Academy, 2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
