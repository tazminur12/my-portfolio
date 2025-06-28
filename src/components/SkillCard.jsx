import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode,
  FaServer,
  FaDatabase,
  FaCloudUploadAlt,
  FaTools,
  FaCogs
} from 'react-icons/fa';

const SkillCard = ({ skillCategory, index }) => {
  // Color palette for different categories
  const colorMap = {
    FaCode: 'from-purple-500 to-pink-500',
    FaServer: 'from-blue-500 to-cyan-400',
    FaDatabase: 'from-green-500 to-emerald-400',
    FaCloudUploadAlt: 'from-sky-500 to-blue-400',
    FaTools: 'from-orange-500 to-amber-400',
    FaCogs: 'from-red-500 to-orange-400'
  };

  const iconMap = {
    FaCode: <FaCode className="text-2xl" />,
    FaServer: <FaServer className="text-2xl" />,
    FaDatabase: <FaDatabase className="text-2xl" />,
    FaCloudUploadAlt: <FaCloudUploadAlt className="text-2xl" />,
    FaTools: <FaTools className="text-2xl" />,
    FaCogs: <FaCogs className="text-2xl" />
  };

  // Animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      rotateX: -15,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.175, 0.885, 0.32, 1.275],
      }
    },
    hover: {
      y: -10,
      scale: 1.03,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const skillItemVariants = {
    hover: {
      scale: 1.05,
      x: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <>
    <motion.div
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={cardVariants}
      viewport={{ once: true }}
      className={`relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-all border border-gray-100 dark:border-gray-700 overflow-hidden group`}
    >
      {/* Animated gradient background on hover */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${colorMap[skillCategory.icon]} opacity-0 group-hover:opacity-10 -z-0`}
        initial={{ scale: 0.8 }}
        whileHover={{ 
          scale: 1.2,
          opacity: 0.2,
          transition: { duration: 0.8 }
        }}
      />
      
      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 ${colorMap[skillCategory.icon].replace('from-', 'from-').replace('to-', 'to-')} bg-gradient-to-br blur-xl`} />
      
      <div className="relative z-10">
        <div className="flex items-center mb-4 gap-3">
          <motion.div 
            className={`p-3 rounded-lg ${colorMap[skillCategory.icon].replace('from-', 'bg-gradient-to-br from-').replace('to-', 'to-')} text-white shadow-md`}
            whileHover={{ 
              rotate: [0, 10, -10, 0],
              transition: { duration: 0.6 }
            }}
          >
            {iconMap[skillCategory.icon]}
          </motion.div>
          <motion.h3 
            className="text-xl font-bold text-gray-900 dark:text-white"
            whileHover={{ 
              textShadow: "0 0 8px rgba(255,255,255,0.5)",
              transition: { duration: 0.3 }
            }}
          >
            {skillCategory.category}
          </motion.h3>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {skillCategory.skills.map((skill, i) => (
            <motion.div 
              key={i} 
              className="flex items-center bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm p-2 rounded-lg"
              variants={skillItemVariants}
              whileHover="hover"
              transition={{ delay: i * 0.05 }}
            >
              <motion.span 
                className={`w-2 h-2 rounded-full mr-2 ${colorMap[skillCategory.icon].split(' ')[0].replace('from-', 'bg-')}`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.1
                }}
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default SkillCard;