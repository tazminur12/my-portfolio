import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiArrowLeft, 
  FiGithub, 
  FiExternalLink, 
  FiX, 
  FiChevronLeft, 
  FiChevronRight 
} from 'react-icons/fi';
import projects from '../data/projects.json'; // Import your projects data

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Find project by ID
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <p className="text-xl text-gray-700 dark:text-gray-300">Project not found.</p>
    </div>
  );

  const openImage = (img, index) => {
    setSelectedImage(img);
    setCurrentImageIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const navigateImages = (direction) => {
    if (direction === 'prev') {
      const prevIndex = (currentImageIndex - 1 + project.additionalImages.length) % project.additionalImages.length;
      setCurrentImageIndex(prevIndex);
      setSelectedImage(project.additionalImages[prevIndex]);
    } else {
      const nextIndex = (currentImageIndex + 1) % project.additionalImages.length;
      setCurrentImageIndex(nextIndex);
      setSelectedImage(project.additionalImages[nextIndex]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors duration-200"
        >
          <FiArrowLeft className="mr-2" />
          Back to Projects
        </button>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          {/* Enhanced Cover Image Section */}
          <div className="relative aspect-video w-full h-auto min-h-[300px] max-h-[500px] overflow-hidden">
            {/* Blurred placeholder */}
            <div 
              className="absolute inset-0 bg-gray-200 dark:bg-gray-700 blur-lg scale-110"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            
            {/* Main image */}
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight"
              >
                {project.title}
              </motion.h1>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-2"
              >
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm hover:bg-white/30 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Project Body */}
          <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Description */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Project Overview</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Gallery */}
              {project.additionalImages?.length > 0 && (
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Project Screenshots</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.additionalImages.map((img, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        className="relative group rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer"
                        onClick={() => openImage(img, i)}
                      >
                        <img
                          src={img}
                          alt={`${project.title} screenshot ${i + 1}`}
                          className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:brightness-90"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white font-medium">Click to enlarge</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Features */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="flex-shrink-0 w-5 h-5 text-blue-500 mr-2 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges and Solutions */}
              {project.challenges?.length > 0 && (
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Challenges & Solutions</h2>
                  <div className="space-y-6">
                    {project.challenges.map((item, i) => (
                      <div key={i} className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg">
                        <div className="mb-3">
                          <h3 className="font-medium text-red-600 dark:text-red-400 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            Challenge
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300 ml-7">{item.problem}</p>
                        </div>
                        <div>
                          <h3 className="font-medium text-green-600 dark:text-green-400 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Solution
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300 ml-7">{item.solution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Project Links */}
              <div className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Project Links</h3>
                <div className="space-y-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      <span className="flex items-center">
                        <FiGithub className="mr-3 text-gray-700 dark:text-gray-300" />
                        <span className="text-gray-700 dark:text-gray-300">View on GitHub</span>
                      </span>
                      <FiExternalLink className="text-gray-500" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors duration-200"
                    >
                      <span className="flex items-center">
                        <FiExternalLink className="mr-3 text-blue-600 dark:text-blue-400" />
                        <span className="text-blue-600 dark:text-blue-400">Live Demo</span>
                      </span>
                      <FiExternalLink className="text-blue-500" />
                    </a>
                  )}
                </div>
              </div>

              {/* Technologies Card */}
              <div className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Technologies Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Metadata */}
              <div className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Project Details</h3>
                <div className="space-y-3">
                  {project.date && (
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Date</span>
                      <span className="text-gray-900 dark:text-gray-200 font-medium">{project.date}</span>
                    </div>
                  )}
                  {project.category && (
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Category</span>
                      <span className="text-gray-900 dark:text-gray-200 font-medium">{project.category}</span>
                    </div>
                  )}
                  {project.role && (
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Role</span>
                      <span className="text-gray-900 dark:text-gray-200 font-medium">{project.role}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeImage}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={closeImage}
            >
              <FiX className="w-8 h-8" />
            </button>

            <div className="relative max-w-6xl w-full max-h-[90vh]">
              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                src={selectedImage}
                alt={`${project.title} screenshot`}
                className="w-full h-full object-contain max-h-[80vh] mx-auto"
              />

              {project.additionalImages?.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImages('prev');
                    }}
                  >
                    <FiChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImages('next');
                    }}
                  >
                    <FiChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              <div className="text-white text-center mt-4">
                {currentImageIndex + 1} / {project.additionalImages?.length || 1}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetails;