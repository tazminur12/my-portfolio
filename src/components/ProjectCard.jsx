import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FiFolder } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, index }) => {
  // Anime-style animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.175, 0.885, 0.32, 1.275],
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageHoverVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const techVariants = {
    hover: {
      y: -3,
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={cardVariants}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 group relative"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Shine effect on hover */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
        initial={{ x: -100 }}
        whileHover={{
          x: "100%",
          opacity: 0.3,
          transition: { duration: 0.8 }
        }}
      />
      
      <motion.div 
        className="relative h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden"
        variants={imageHoverVariants}
      >
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex space-x-4">
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
                aria-label="GitHub Repository"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FaGithub className="text-xl" />
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
                aria-label="Live Demo"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FaExternalLinkAlt className="text-xl" />
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
      
      <div className="p-6">
        <div className="flex items-center mb-3">
          <motion.div
            whileHover={{ rotate: 15 }}
            transition={{ type: 'spring' }}
          >
            <FiFolder className="text-2xl text-blue-500 mr-3" />
          </motion.div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
        </div>
        
        <motion.p 
          className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3"
          whileHover={{ x: 5 }}
        >
          {project.description}
        </motion.p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech, i) => (
            <motion.span 
              key={i}
              className="text-xs font-mono px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
              variants={techVariants}
              whileHover="hover"
              custom={i}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaGithub className="mr-1" /> Code
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.div
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                to={`/projects/${project.id}`}
                className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Details
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;