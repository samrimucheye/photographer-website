import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/dist/photoswipe.css';

const featuredImages = [
  {
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc',
    width: 1200,
    height: 800,
    category: 'Wedding',
  },
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552',
    width: 1200,
    height: 800,
    category: 'Bar Mitzvah',
  },
  {
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
    width: 1200,
    height: 800,
    category: 'Portrait',
  },
];

const FeaturedGallery = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          {t('home.featured.title')}
        </h2>
        <Gallery>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative overflow-hidden rounded-lg shadow-lg group"
              >
                <Item
                  original={image.src}
                  width={image.width}
                  height={image.height}
                  caption={t(`gallery.categories.${image.category.toLowerCase()}`)}
                >
                  {({ ref, open }) => (
                    <div onClick={open} ref={ref as React.RefObject<HTMLDivElement>}>
                      <img
                        src={image.src}
                        alt={t(`gallery.categories.${image.category.toLowerCase()}`)}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {t('gallery.viewLarge')}
                        </span>
                      </div>
                    </div>
                  )}
                </Item>
              </motion.div>
            ))}
          </div>
        </Gallery>
      </div>
    </section>
  );
};

export default FeaturedGallery;