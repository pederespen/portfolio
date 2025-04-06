"use client";

import { useTranslation } from "react-i18next";
import { useState, FormEvent, ChangeEvent } from "react";

export const Contact = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = (): boolean => {
    let valid = true;
    const newErrors = { ...errors };

    // Check for empty fields
    if (!formData.name.trim()) {
      newErrors.name = t("contact.nameRequired");
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = t("contact.emailRequired");
      valid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t("contact.emailInvalid");
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = t("contact.messageRequired");
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const form = e.target as HTMLFormElement;
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          form.reset();
          setFormData({ name: "", email: "", message: "" });
        } else {
          alert(t("contact.error"));
        }
        setLoading(false);
      })
      .catch(() => {
        alert(t("contact.error"));
        setLoading(false);
      });
  };

  const renderSuccessMessage = () => {
    return (
      <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-md">
        <h3 className="text-xl font-medium text-green-800 dark:text-green-300 mb-2">
          {t("contact.success")}
        </h3>
        <p className="text-green-700 dark:text-green-400 mb-6">
          {t("contact.successMessage")}
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="relative text-xl font-bold text-gray-800 dark:text-gray-200 w-fit group mx-auto cursor-pointer"
        >
          <span className="relative z-10 p-3 uppercase group-hover:text-white transition-colors duration-200">
            {t("contact.sendAnother")}
          </span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 group-hover:h-full group-hover:bg-blue-500 dark:group-hover:bg-blue-500 group-hover:bg-opacity-100 dark:group-hover:bg-opacity-100 transition-all duration-200 -z-0"></span>
        </button>
      </div>
    );
  };

  const renderContactForm = () => {
    return (
      <form
        className="space-y-6"
        action="https://formspree.io/f/mvgkwdng"
        method="POST"
        onSubmit={handleSubmit}
        noValidate
      >
        <div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border ${errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-700"} rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 bg-gray-50 dark:bg-neutral-800 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100`}
            placeholder={t("contact.name")}
            required
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border ${errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-700"} rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 bg-gray-50 dark:bg-neutral-800 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100`}
            placeholder={t("contact.email")}
            required
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className={`w-full px-3 py-2 border ${errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-700"} rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 bg-gray-50 dark:bg-neutral-800 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100`}
            placeholder={t("contact.message")}
            required
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message}</p>
          )}
        </div>

        <div className="text-right">
          <button
            type="submit"
            disabled={loading}
            className="relative text-xl font-bold text-gray-800 dark:text-gray-200 w-fit group cursor-pointer"
          >
            <span className="relative z-10 p-3 uppercase group-hover:text-white transition-colors duration-200">
              {loading ? t("contact.sending") : t("contact.send")}
            </span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 group-hover:h-full group-hover:bg-blue-500 dark:group-hover:bg-blue-500 group-hover:bg-opacity-100 dark:group-hover:bg-opacity-100 transition-all duration-200 -z-0"></span>
          </button>
        </div>
      </form>
    );
  };

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
          {submitted ? renderSuccessMessage() : renderContactForm()}
        </div>
      </div>
    </section>
  );
};
