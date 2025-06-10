import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Lokasi Magang',
      description: 'RS Prima Qonita',
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Pengalaman',
      description: 'Mengembangkan 2+ Aplikasi',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Spesialisasi',
      description: 'Mobile & Backend Development',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Passion',
      description: 'Inovasi Teknologi Kesehatan',
    },
  ];

  return (
    <section id="tentang" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tentang <span className="text-gradient">Saya</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
              Halo! Saya M Jefri Agiansyah, tapi panggil saja Jep 👨‍💻
            </h3>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Saya adalah seorang mahasiswa yang sedang menjalani magang di <strong>RS Prima Qonita</strong>. 
              Fokus utama saya adalah mengembangkan aplikasi mobile dengan Flutter dan sistem backend 
              menggunakan Laravel Filament.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Selama magang, saya telah berhasil menyelesaikan dua proyek utama: 
              <strong> Aplikasi Antrian</strong> dan <strong>Aplikasi Pendaftaran</strong>. 
              Kedua aplikasi ini dirancang khusus untuk meningkatkan efisiensi pelayanan di rumah sakit.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Saya sangat passionate dalam mengembangkan solusi teknologi yang dapat memberikan 
              dampak positif, terutama dalam bidang kesehatan. Kombinasi antara pengalaman praktis 
              dan semangat belajar membuat saya selalu siap menghadapi tantangan baru dalam dunia pengembangan software.
            </p>

            <motion.div
              className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 p-6 rounded-2xl"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-primary-700 dark:text-primary-300 font-medium text-center">
                "Teknologi terbaik adalah yang membuat hidup lebih mudah dan bermakna"
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-primary-600 dark:text-primary-400 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;