import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Camera, Award, Users, Clock } from "lucide-react";

const About = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: Clock, value: "10+", label: "Years Experience" },
    { icon: Camera, value: "1000+", label: "Photo Sessions" },
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "25+", label: "Awards Won" },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
              {t("about.title")}
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
              With over a decade of experience, we specialize in capturing
              life's most precious moments through the lens of artistic
              excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="inline-block p-4 bg-indigo-100 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e"
                alt="Professional photographer at work"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                {t("about.story.title")}
              </h2>
              <p className="text-gray-600 mb-4">
                For over 10 years, we've been privileged to capture the most
                significant moments in people's lives. Our journey began with a
                passion for photography and has evolved into a commitment to
                excellence in visual storytelling.
              </p>
              <p className="text-gray-600 mb-4">
                We specialize in wedding photography and Bar/Bat Mitzvah
                celebrations, bringing technical expertise and artistic vision
                to every event we photograph.
              </p>
              <p className="text-gray-600">
                Our approach combines traditional photography techniques with
                modern technology, ensuring that every image we create is both
                timeless and contemporary.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
