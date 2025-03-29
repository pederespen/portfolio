const ContactSection = () => {
  return (
    <section id="contact" className="py-20 flex items-center px-4 scroll-mt-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center mt-10">
          Contact
        </h2>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 placeholder-gray-500"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 placeholder-gray-500"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 placeholder-gray-500"
                placeholder="Message"
                required
              />
            </div>

            <div className="text-left">
              <button
                type="submit"
                className="inline-block px-6 py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition-colors mt-4 w-auto"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
