import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Server, Database, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  category: 'mobile' | 'backend' | 'fullstack';
  status: 'completed' | 'in-progress';
  image: string;
  features: string[];
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'mobile' | 'backend' | 'fullstack'>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Aplikasi Antrian RS Prima Qonita',
      description: 'Sistem antrian digital dengan 2 aplikasi Flutter dan WebSocket real-time',
      fullDescription: 'Sistem antrian digital yang terdiri dari 2 aplikasi Flutter terpisah: aplikasi desktop untuk operator dan aplikasi TV untuk display antrian. Menggunakan WebSocket untuk komunikasi real-time antara kedua aplikasi. Sistem ini memungkinkan pemanggilan nomor antrian untuk pengambilan obat racikan dan non-racikan di farmasi dengan tampilan yang jelas di layar TV.',
      technologies: ['Flutter', 'WebSocket', 'Dart', 'Real-time Communication', 'Desktop App', 'TV Display'],
      category: 'mobile',
      status: 'completed',
      image: 'https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Aplikasi desktop untuk operator farmasi',
        'Aplikasi TV untuk display nomor antrian',
        'WebSocket untuk komunikasi real-time',
        'Pemanggilan obat racikan dan non-racikan',
        'Tampilan antrian yang jelas di TV',
        'Sinkronisasi data secara langsung',
        'Interface yang user-friendly untuk operator',
        'Display responsif untuk berbagai ukuran TV'
      ],
    },
    {
      id: 2,
      title: 'Aplikasi Pendaftaran Pasien',
      description: 'Sistem pendaftaran online untuk memudahkan registrasi pasien baru dan lama',
      fullDescription: 'Platform pendaftaran komprehensif yang memungkinkan pasien mendaftar secara online, memilih dokter dan jadwal, serta mengisi formulir medis. Sistem ini terintegrasi dengan database rumah sakit untuk sinkronisasi data yang seamless.',
      technologies: ['Flutter', 'Laravel Filament', 'MySQL', 'Sanctum', 'File Upload'],
      category: 'fullstack',
      status: 'completed',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Registrasi pasien baru dan lama',
        'Pemilihan dokter dan jadwal',
        'Upload dokumen medis',
        'Riwayat pendaftaran',
        'Verifikasi identitas',
        'Integrasi sistem pembayaran'
      ],
    },
    {
      id: 3,
      title: 'Healthcare Dashboard',
      description: 'Dashboard analytics untuk monitoring data kesehatan dan operasional RS',
      fullDescription: 'Dashboard komprehensif yang menyediakan insights mendalam tentang operasional rumah sakit, statistik pasien, dan performa layanan. Membantu manajemen dalam pengambilan keputusan berbasis data.',
      technologies: ['Laravel Filament', 'Chart.js', 'MySQL', 'PHP', 'Bootstrap'],
      category: 'backend',
      status: 'in-progress',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Real-time dashboard',
        'Statistik pasien',
        'Laporan keuangan',
        'Monitoring bed capacity',
        'Analytics performa dokter',
        'Export data ke Excel/PDF'
      ],
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'mobile': return <Smartphone className="w-5 h-5" />;
      case 'backend': return <Server className="w-5 h-5" />;
      case 'fullstack': return <Database className="w-5 h-5" />;
      default: return <Database className="w-5 h-5" />;
    }
  };

  return (
    <section id="proyek" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proyek <span className="text-gradient">Unggulan</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Beberapa proyek yang telah saya kembangkan selama magang di RS Prima Qonita
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto mt-6"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { key: 'all', label: 'Semua Proyek' },
            { key: 'fullstack', label: 'Fullstack' },
            { key: 'mobile', label: 'Mobile' },
            { key: 'backend', label: 'Backend' },
          ].map((item) => (
            <motion.button
              key={item.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(item.key as any)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                filter === item.key
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {item.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <div className="bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full flex items-center space-x-1">
                      {getCategoryIcon(project.category)}
                      <span className="text-sm font-medium capitalize">{project.category}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'completed' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-yellow-500 text-white'
                    }`}>
                      {project.status === 'completed' ? 'Selesai' : 'Progress'}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400 rounded-full text-sm">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-primary-600 dark:text-primary-400 font-semibold">
                      Lihat Detail →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-t-2xl"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                      {selectedProject.title}
                    </h3>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      selectedProject.status === 'completed' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-yellow-500 text-white'
                    }`}>
                      {selectedProject.status === 'completed' ? 'Selesai' : 'Progress'}
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    {selectedProject.fullDescription}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        Teknologi yang Digunakan
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        Fitur Utama
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                            <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;