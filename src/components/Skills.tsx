import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Mobile Development',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Flutter', level: 90, icon: '📱' },
        { name: 'Dart', level: 85, icon: '🎯' },
        { name: 'Firebase Auth', level: 80, icon: '🔐' },
        { name: 'Firestore', level: 75, icon: '🗄️' },
      ],
    },
    {
      title: 'Backend Development',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Laravel', level: 85, icon: '🏗️' },
        { name: 'PHP', level: 80, icon: '🐘' },
        { name: 'Laravel Filament', level: 88, icon: '⚡' },
        { name: 'REST API', level: 82, icon: '🔌' },
      ],
    },
    {
      title: 'Tools & Others',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Git', level: 75, icon: '🌿' },
        { name: 'Sanctum', level: 70, icon: '🛡️' },
        { name: 'Database Design', level: 80, icon: '🗃️' },
        { name: 'API Integration', level: 85, icon: '🔗' },
      ],
    },
  ];

  return (
    <section id="keahlian" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Keahlian <span className="text-gradient">Saya</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technology stack dan tools yang saya kuasai untuk mengembangkan aplikasi modern
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className={`bg-gradient-to-r ${category.color} p-4 rounded-xl mb-6`}>
                <h3 className="text-xl font-bold text-white text-center">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;