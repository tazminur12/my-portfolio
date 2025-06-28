import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
  FaMapMarkerAlt
} from 'react-icons/fa';

const EducationCard = ({ education, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-center mb-4 gap-3">
        <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
          <FaGraduationCap className="text-2xl" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {education.degree}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {education.institute}
          </p>
        </div>
      </div>
      
      <div className="space-y-3">
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
      </div>
    </motion.div>
  );
};

export default EducationCard;