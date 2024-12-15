import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Gallery as PhotoSwipeGallery, Item } from 'react-photoswipe-gallery';

const Gallery = () => {
  const { t } = useTranslation();

  const categories = [
    {
      name: 'Wedding',
      images: [
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc',
        'https://images.unsplash.com/photo-1519741497674-611481863552',
        'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
      ],
    },
    {
      name: 'Bar Mitzvah',
      images: [
        'https://images.unsplash.com/photo-1472653431158-6364773b2a56',
        'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc',
      ],
    },
    {
      name: 'Portrait',
      images: [
        'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc',
        'https://images.unsplash.com/photo-1472653431158-6364773b2a56',
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl text-gray-600">
            Explore our collection of memorable moments
          </p>
        </motion.div>

        <PhotoSwipeGallery>
          {categories.map((category, categoryIndex) => (
            <div key={category.name} className="mb-16">
              <h2 className="text-2xl font-bold mb-8">{category.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.images.map((image, imageIndex) => (
                  <motion.div
                    key={imageIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: imageIndex * 0.2 }}
                    className="relative overflow-hidden rounded-lg shadow-lg group"
                  >
                    <Item
                      original={image}
                      width={1200}
                      height={800}
                      caption={`${category.name} - Image ${imageIndex + 1}`}
                    >
                      {({ ref, open }) => (
                        <div
                          onClick={open}
                          ref={ref as React.RefObject<HTMLDivElement>}
                          className="cursor-pointer"
                        >
                          <img
                            src={image}
                            alt={`${category.name} - Image ${imageIndex + 1}`}
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
            </div>
          ))}
        </PhotoSwipeGallery>
      </div>
    </div>
  );
};

export default Gallery;