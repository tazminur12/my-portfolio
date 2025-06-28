import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from 'framer-motion';
import { 
  FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowRight,
  FaCode, FaServer, FaDatabase, FaCloudUploadAlt, FaTools, FaCogs,
  FaGraduationCap, FaUniversity,FaCalendarAlt,FaMapMarkerAlt
} from 'react-icons/fa';
import { SiLeetcode, SiDevdotto } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';
import heroImage from '../assets/tanim.png';
import ProjectCard from '../components/ProjectCard';
import SkillCard from '../components/SkillCard';
import projects from '../data/projects.json';
import skills from '../data/skills.json';
import ThreeDBackground from '../components/ThreeDBackground';
import educationData from '../data/education';

const Home = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/tazminur12', name: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/tazminur-rahman-tanim-305315336/', name: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://x.com/tazminur12', name: 'Twitter' },
    { icon: <SiLeetcode />, url: 'https://leetcode.com/u/tazminur12/', name: 'LeetCode' },
    { icon: <SiDevdotto />, url: 'https://dev.to/tazminur12', name: 'Dev Community' },
  ];

  return (
    <div className="relative">
      {/* 3D Background */}
      <div className="fixed inset-0 -z-10">
        <ThreeDBackground />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          id="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-white/90 dark:bg-gray-900/90"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                  Hi, I'm <span className="text-blue-600 dark:text-blue-400">Tanim</span>
                </h1>

                <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 h-16 mb-6">
                  <TypeAnimation
                    sequence={[
                      'Full Stack Developer',
                      1500,
                      'UI/UX Designer',
                      1500,
                      'React & Firebase Expert',
                      1500,
                      'MERN Stack Developer',
                      1500,
                      'Open Source Contributor',
                      1500,
                      'Frontend Specialist',
                      1500,
                      'Passionate Coder',
                      1500,
                      'Tech Content Creator',
                      1500,
                      'Problem Solver',
                      1500,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                  />
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
                  I'm a passionate full stack developer with expertise in React, Firebase, and Tailwind CSS.
                  I craft clean, user-friendly, and scalable web applications that focus on performance and accessibility.
                  Always eager to learn and solve real-world problems through elegant code and design.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <motion.a
                  href="/contact"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me <FaArrowRight className="ml-2" />
                </motion.a>
                <motion.a
                  href="#projects"
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex space-x-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative w-full max-w-md">
                <motion.div 
                  className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl opacity-20 blur-lg"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                ></motion.div>
                <div className="relative overflow-hidden rounded-2xl border-4 border-white dark:border-gray-800 shadow-2xl">
                  <LazyLoadImage
                    src={heroImage}
                    alt="Tanim - Web Developer"
                    className="w-full h-auto object-cover"
                    effect="blur"
                    width="100%"
                    height="auto"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/90 dark:bg-gray-800/90"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                My comprehensive development toolkit
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {skills.map((skillCategory, index) => (
                <SkillCard 
                  key={index}
                  skillCategory={skillCategory}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-white/90 dark:bg-gray-900/90"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Some of my best work and contributions
              </p>
            </motion.div>

            <motion.div
              className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  index={index}
                />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <motion.a
                href="/projects"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects <FaArrowRight className="ml-2" />
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/90 dark:bg-gray-800/90"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {educationData.sectionTitle}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                My academic journey and qualifications
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 gap-6"
            >
              {educationData.qualifications.map((education, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center mb-4 gap-3">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                      >
                        <FaGraduationCap className="text-2xl" />
                      </motion.div>
                      <div>
                        <motion.h3 
                          whileHover={{ x: 5 }}
                          className="text-xl font-bold text-gray-900 dark:text-white"
                        >
                          {education.degree}
                        </motion.h3>
                        <motion.p 
                          whileHover={{ x: 5 }}
                          className="text-sm text-gray-500 dark:text-gray-400"
                        >
                          {education.institute}
                        </motion.p>
                      </div>
                    </div>
                    
                    <motion.div 
                      className="space-y-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <div className="flex items-center">
                        <FaUniversity className="text-gray-400 mr-2" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {education.institute}
                        </span>
                      </div>
                      
                      <div className="flex items-center">
                        <FaCalendarAlt className="text-gray-400 mr-2" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {education.year}
                        </span>
                      </div>
                      
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="text-gray-400 mr-2" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {education.location}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;