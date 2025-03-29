const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold mb-2">Your Name</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Web Developer & Designer
            </p>
          </div>

          <div className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Your Name. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
