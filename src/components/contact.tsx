"use client";

import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 flex items-center scroll-mt-16">
      <div className="container mx-auto w-[85%]">
        <h2 className="text-3xl font-bold mb-12 text-center mt-10">
          {t("contact.title")}
        </h2>

        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 placeholder-gray-500"
                placeholder={t("contact.name")}
                required
              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 placeholder-gray-500"
                placeholder={t("contact.email")}
                required
              />
            </div>

            <div>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 placeholder-gray-500"
                placeholder={t("contact.message")}
                required
              />
            </div>

            <div className="text-left">
              <button
                type="submit"
                className="inline-block px-6 py-3 bg-gray-700 text-white font-bold rounded-md hover:bg-gray-800 transition-colors mt-4 w-auto cursor-pointer"
              >
                {t("contact.send")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
