import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaCode } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const socialLinks = [
        { icon: <FaGithub />, url: '#', name: 'GitHub' },
        { icon: <FaLinkedin />, url: '#', name: 'LinkedIn' },
        { icon: <FaTwitter />, url: '#', name: 'Twitter' }
    ];

    const links = [
        { name: 'Home', url: '#' },
        { name: 'Projects', url: '#' },
        { name: 'Contact', url: '#' }
    ];

    return (
        <motion.footer 
            className="bg-gray-900 text-white w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <FaCode className="text-2xl text-blue-400 mr-2" />
                            <span className="text-2xl font-bold text-blue-400">
                                Tanim.dev
                            </span>
                        </div>
                        <p className="text-gray-400">
                            Creating digital experiences.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    className="text-gray-400 hover:text-white transition-colors text-xl"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Links</h3>
                        <ul className="space-y-2">
                            {links.map((link, index) => (
                                <li key={index}>
                                    <a href={link.url} className="text-gray-400 hover:text-blue-400">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Contact</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-center">
                                <MdLocationOn className="mr-3 text-blue-400" />
                                <span>Mohammadpur,Dhaka, Bangladesh</span>
                            </li>
                            <li className="flex items-center">
                                <MdEmail className="mr-3 text-blue-400" />
                                <span>tanimkhalifa55@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;