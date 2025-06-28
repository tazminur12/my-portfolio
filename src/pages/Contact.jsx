import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaLinkedin, FaGithub, FaTwitter, FaStackOverflow } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log('Form submitted:', form); // Replace with actual form submission logic
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
      setLoading(false);

      setTimeout(() => setSuccess(false), 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-primary" size={20} />,
      title: "My Address",
      value: "Mohammadpur, Dhaka, Bangladesh",
      link: "https://maps.google.com/?q=Mohammadpur,Dhaka"
    },
    {
      icon: <FaEnvelope className="text-primary" size={20} />,
      title: "Email Address",
      value: "tanimkhalifa55@gmail.com",
      link: "mailto:contact@tanim.dev"
    },
    {
      icon: <FaPhoneAlt className="text-primary" size={20} />,
      title: "Phone Number",
      value: "+8801540288718",
      link: "tel:+8801540288718"
    },
    {
      icon: <FaWhatsapp className="text-primary" size={20} />,
      title: "WhatsApp",
      value: "+8801540288718",
      link: "https://wa.me/+8801540288718"
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin size={22} />, url: "https://www.linkedin.com/in/tazminur-rahman-tanim-305315336/", name: "LinkedIn" },
    { icon: <FaGithub size={22} />, url: "https://github.com/tazminur12", name: "GitHub" },
    { icon: <FaTwitter size={22} />, url: "https://twitter.com/tazminur12", name: "Twitter" },
    { icon: <FaStackOverflow size={22} />, url: "https://stackoverflow.com/users/30831837", name: "Stack Overflow" }
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 bg-base-100 dark:bg-gray-900 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
          >
            Get In Touch
          </motion.h2>
          <p className="text-xl text-base-content/80 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-6 p-4 bg-base-200 dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-3 bg-primary/10 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-base-content/80 hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <div>
              <h5 className="text-lg font-semibold mb-4">Connect With Me</h5>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-base-200 dark:bg-gray-800 rounded-full hover:bg-primary/10 transition-colors"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-base-200 dark:bg-gray-800 p-8 rounded-xl shadow-lg space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-success/10 text-success px-4 py-3 rounded-lg text-sm border border-success/20"
              >
                ✅ Thank you for your message! I'll get back to you soon.
              </motion.div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-base-300 dark:border-gray-700 bg-base-100 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-base-300 dark:border-gray-700 bg-base-100 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-base-300 dark:border-gray-700 bg-base-100 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              className={`w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold shadow-md ${
                loading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'
              } transition-all`}
              whileHover={!loading ? { scale: 1.02 } : {}}
              whileTap={!loading ? { scale: 0.98 } : {}}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
