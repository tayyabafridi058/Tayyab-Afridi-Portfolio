import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSend = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill all required fields');
      return;
    }

    const phoneNumber = '+923359382096'; //  YOUR UAE WHATSAPP NUMBER (no +)

    const text = `
*New Contact Message*
--------------------
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📌 Subject: ${formData.subject}

📝 Message:
${formData.message}
    `;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section id="contact" className="relative w-full pt-28 md:pt-48 pb-24 overflow-hidden bg-background">

      {/* Background Text */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 0.35, y: -16 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 left-0 w-full z-0 pointer-events-none select-none leading-none text-center"
      >
        <h2 className="text-[22vw] md:text-[15vw] font-black text-white uppercase tracking-tighter">
          Contact
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[650px]"
        >

          {/* Left Image */}
          <div className="w-full md:w-[45%] relative overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 2 }}
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1600&auto=format&fit=crop"
              alt="Contact"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'grayscale(1) brightness(0.6) contrast(1.3)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

          {/* Right Form */}
          <div className="w-full md:w-[55%] p-8 md:p-16 flex flex-col justify-center">

            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12"
            >
              Let's Talk
            </motion.h3>

            <form className="space-y-12">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="group">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-black"
                  />
                </div>

                <div className="group">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              <div className="group">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                  Subject*
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-black"
                />
              </div>

              <div className="group">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                  Message*
                </label>
                <textarea
                  rows={2}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project"
                  className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-black resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={handleWhatsAppSend}
                className="bg-black text-white px-14 py-4 rounded-full text-[11px] font-black uppercase tracking-[0.25em] hover:bg-green-600 transition"
              >
                Send Message
              </motion.button>

            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
