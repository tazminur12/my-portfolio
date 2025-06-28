import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiDatabase, FiLayers } from 'react-icons/fi';

const About = () => {
  const skills = {
    frontend: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3/Tailwind', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 80 },
      { name: 'Next.js', level: 75 },
    ],
    backend: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 75 },
      { name: 'Firebase', level: 70 },
      { name: 'MongoDB', level: 65 },
      { name: 'REST APIs', level: 70 },
    ],
    tools: ['DaisyUI', 'Git/GitHub', 'VS Code', 'Figma', 'Postman']
  };

  return (
    <motion.section
      className="min-h-screen py-20 flex flex-col items-center justify-center px-4 md:px-10 bg-base-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4"
            whileHover={{ scale: 1.02 }}
          >
            About Me
          </motion.h2>
          <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
            Mern-stack developer specializing in modern web technologies with a passion for creating
            efficient, scalable, and user-friendly applications.
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="bg-base-200 rounded-2xl p-8 mb-12 shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center">
            <FiLayers className="mr-2" /> Who I Am
          </h3>
          <p className="text-lg text-base-content/80 leading-relaxed">
            I'm <span className="font-semibold text-primary">Tazminur Rahman Tanim</span>, a passionate full-stack developer with expertise in both frontend and backend technologies. I specialize in building responsive, performant web applications using modern frameworks and libraries. My approach combines clean code architecture with thoughtful UI/UX design principles.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Frontend Skills */}
          <motion.div
            className="bg-base-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                <FiCode size={24} />
              </div>
              <h3 className="text-xl font-semibold">Frontend Expertise</h3>
            </div>
            <ul className="space-y-3">
              {skills.frontend.map((skill, index) => (
                <li key={index}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-base-300 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            className="bg-base-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-secondary/10 text-secondary mr-4">
                <FiServer size={24} />
              </div>
              <h3 className="text-xl font-semibold">Backend Skills</h3>
            </div>
            <ul className="space-y-3">
              {skills.backend.map((skill, index) => (
                <li key={index}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-base-300 rounded-full h-2.5">
                    <div
                      className="bg-secondary h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tools */}
          <motion.div
            className="bg-base-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-accent/10 text-accent mr-4">
                <FiDatabase size={24} />
              </div>
              <h3 className="text-xl font-semibold">Tools & Technologies</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((tool, index) => (
                <motion.span
                  key={index}
                  className="bg-base-300 px-3 py-1 rounded-full text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Philosophy */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-xl font-semibold text-primary mb-4">Development Approach</h3>
            <p className="text-base-content/80">
              I believe in writing clean, maintainable code with proper documentation. My development process emphasizes performance optimization, accessibility, and responsive design principles.
            </p>
          </div>
          <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8 border border-secondary/20">
            <h3 className="text-xl font-semibold text-secondary mb-4">Problem Solving</h3>
            <p className="text-base-content/80">
              I enjoy tackling complex challenges and finding elegant solutions. My experience with both frontend and backend allows me to understand problems from multiple perspectives.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;