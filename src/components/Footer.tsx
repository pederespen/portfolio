const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6">
      <div className="container mx-auto">
        <div className="text-sm text-gray-500 text-center">
          © {currentYear} | Peder Espen
        </div>
      </div>
    </footer>
  );
};

export default Footer;
