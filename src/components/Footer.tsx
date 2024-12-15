import { useTranslation } from "react-i18next";
import { Camera, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Camera className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold">PhotoArt</span>
            </div>
            <p className="text-gray-400">
              Capturing life's precious moments with artistic excellence.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["home", "about", "gallery", "services", "contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`/${item === "home" ? "" : item}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {t(`nav.${item}`)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="text-gray-400 space-y-2">
              <li>123 Photography St.</li>
              <li>City, State 12345</li>
              <li>+1 (555) 123-4567</li>
              <li>info@photoart.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {t("footer.copyRight")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
