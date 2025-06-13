import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Github, MessageCircle,  MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Instagram className="w-6 h-6" />,
      label: 'Instagram',
      value: '@bangjepp_ea',
      href: 'https://instagram.com/bangjepp_ea',
      color: 'from-pink-500 to-purple-500',
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'BangJepp56',
      href: 'https://github.com/BangJepp56',
      color: 'from-gray-700 to-gray-900',
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: 'WhatsApp',
      value: 'Chat Langsung',
      href: 'https://wa.me/6287895191425',
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section id="kontak" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mari <span className="text-gradient">Berkolaborasi</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Punya proyek menarik atau ingin berdiskusi tentang teknologi? 
            Jangan ragu untuk menghubungi saya!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                  Informasi Kontak
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">Lokasi</p>
                      <p className="text-gray-600 dark:text-gray-400">Indonesia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">Status</p>
                      <p className="text-gray-600 dark:text-gray-400">Tersedia untuk proyek baru</p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-primary-500 to-accent-500 p-8 rounded-2xl text-white"
              >
                <h4 className="text-xl font-bold mb-4">Siap Membantu Proyek Anda!</h4>
                <p className="mb-6">
                  Dengan pengalaman mengembangkan aplikasi kesehatan, saya siap membantu 
                  mewujudkan ide digital Anda menjadi kenyataan.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-medium">Online dan siap berkolaborasi</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="block bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all group"
                >
                  <div className="flex items-center space-x-6">
                    <div className={`bg-gradient-to-r ${contact.color} p-4 rounded-2xl text-white group-hover:scale-110 transition-transform`}>
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        {contact.label}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {contact.value}
                      </p>
                    </div>
                    <div className="text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      →
                    </div>
                  </div>
                </motion.a>
              ))}

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/6287895191425"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-2xl text-center shadow-xl hover:shadow-2xl transition-all"
              >
                <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Chat Saya di WhatsApp</h3>
                <p className="text-green-100">
                  Respon cepat untuk diskusi proyek dan kolaborasi
                </p>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
