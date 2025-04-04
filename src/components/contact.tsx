"use client";

import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="min-h-[calc(100vh-140px)] flex flex-col scroll-mt-16"
    >
      <h2 className="text-3xl font-bold mt-16 mb-16 text-center text-black dark:text-gray-300">
        {t("contact.title")}
      </h2>

      <div className="container mx-auto w-[85%]">
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 bg-gray-50 dark:bg-neutral-800 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100"
                placeholder={t("contact.name")}
                required
              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 bg-gray-50 dark:bg-neutral-800 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100"
                placeholder={t("contact.email")}
                required
              />
            </div>

            <div>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 bg-gray-50 dark:bg-neutral-800 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100"
                placeholder={t("contact.message")}
                required
              />
            </div>

            <div className="text-left">
              <button
                type="submit"
                className="inline-block px-6 py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors w-auto cursor-pointer"
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
