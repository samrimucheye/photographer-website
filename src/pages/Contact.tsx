import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import Button from "../components/ui/Button";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("contact.title")}
          </h1>
          <p className="text-xl text-gray-600">
            {/* Get in touch to discuss your photography needs */}
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">
              {t("contact.getInTouch")}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("contact.form.phone")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <Button type="submit"> {t("contact.form.submit")}</Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6">
                {" "}
                {t("contact.info.title")}
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-indigo-600 mr-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-indigo-600 mr-4" />
                  <span>info@photoart.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-indigo-600 mr-4" />
                  <span>123 Photography St, City, State 12345</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">
                {t("contact.info.follow")}
              </h2>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <Instagram className="h-8 w-8" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <Facebook className="h-8 w-8" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <Twitter className="h-8 w-8" />
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">
                {t("contact.info.location")}
              </h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007!5e0!3m2!1sen!2sus!4v1644262070010!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
