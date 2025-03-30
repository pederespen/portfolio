const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 flex items-center scroll-mt-16 px-4"
    >
      <div className="container mx-auto w-[85%]">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-10 text-center">My Projects</h2>

          <div className="max-w-xl mx-auto text-center mt-6">
            <p className="text-md text-gray-700">
              I&apos;m currently working on some exciting projects that will be
              showcased here. Feel free to check back later or contact me for
              more information about my work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
