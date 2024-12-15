import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Camera, Heart, GraduationCap } from "lucide-react";

const specialties = [
  {
    icon: Heart,
    titleKey: "home.specialties.wedding.title",
    descriptionKey: "home.specialties.wedding.description",
  },
  {
    icon: GraduationCap,
    titleKey: "home.specialties.barMitzvah.title",
    descriptionKey: "home.specialties.barMitzvah.description",
  },
  {
    icon: Camera,
    titleKey: "home.specialties.portrait.title",
    descriptionKey: "home.specialties.portrait.description",
  },
];

const SpecialtiesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          {t("home.specialties.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6"
              >
                <div className="inline-block p-4 bg-indigo-100 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t(specialty.titleKey)}
                </h3>
                <p className="text-gray-600">{t(specialty.descriptionKey)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
