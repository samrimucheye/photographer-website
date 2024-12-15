import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Button from "../ui/Button";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 container">
        <img
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4"
          alt={t("home.hero.backgroundAlt")}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-2xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {t("home.hero.title")}
          </h1>
          <p className="text-xl md:text-2xl mb-8">{t("home.hero.subtitle")}</p>
          <div className="flex gap-4">
            <Button>{t("home.hero.cta")}</Button>
            <Button variant="secondary">{t("home.hero.portfolio")}</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
