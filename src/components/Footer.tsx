import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gradient">Jep</h3>
            <p className="text-gray-400">
              Fullstack Developer yang passionate dalam mengembangkan solusi teknologi 
              untuk dunia kesehatan dan beyond.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {[
                { href: '#beranda', label: 'Beranda' },
                { href: '#tentang', label: 'Tentang' },
                { href: '#keahlian', label: 'Keahlian' },
                { href: '#proyek', label: 'Proyek' },
                { href: '#kontak', label: 'Kontak' },
              ].map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  whileHover={{ x: 10 }}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Tech Stack</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {['Flutter', 'Laravel', 'PHP', 'Dart', 'Firebase', 'MySQL', 'REST API', 'Git'].map((tech) => (
                <span key={tech} className="text-gray-400 hover:text-white transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-gray-400"
            >
              <span>Dibuat dengan</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>menggunakan</span>
              <Code className="w-4 h-4 text-blue-400" />
              <span>dan</span>
              <Coffee className="w-4 h-4 text-yellow-600" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-sm"
            >
              © 2024 M Jefri Agiansyah. All rights reserved.
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;