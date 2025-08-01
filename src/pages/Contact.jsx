import React, { useState } from 'react';
import {  motion } from 'framer-motion';
import './Hover.css'
const Contact = () => {
  const[name,setname]=useState("")
  const[message,setmessage]=useState("")
  const[email,setemail]=useState("")
  return (
    <div style={styles.page}>
      <motion.h1
        style={styles.title}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Contact Us
      </motion.h1>

      <motion.p
        style={styles.subtitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        We'd love to hear from you. Let's connect!
      </motion.p>

      {/* Contact Form */}
      <motion.form
        style={styles.form}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message submitted!");
          setemail("")
          setname("")
          setmessage("")


        }}
      >
        <input type="text" name="name" value={name} placeholder="Your Name" required style={styles.input} onChange={(e)=>setname(e.target.value)} />
        <input type="email" name="email" value={email} placeholder="Your Email" required style={styles.input} onChange={(e)=>setemail(e.target.value)}/>
        <textarea name="message" rows="5" value={message} placeholder="Your Message" required style={styles.textarea} onChange={(e)=>setmessage(e.target.value)}></textarea>
        <button type="submit" className='hovers'>Send Message</button>
      </motion.form>

      {/* Contact Info */}
      <div style={styles.info}>
        <p><strong>Address:</strong> Bombo Road, Kampala, Uganda</p>
        <p><strong>Email:</strong> info@stratcom.ug</p>
        <p><strong>Phone:</strong> +256 701 234 567</p>
      </div>

      {/* Google Map */}
      <div style={styles.mapContainer}>
        <iframe
          title="Stratcom Location"
          src="https://www.google.com/maps?q=Stratcom+Communication+and+IT+Solutions,+Kampala&output=embed"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: '12px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: '60px 20px',
    fontFamily: 'Arial, sans-serif',
    color: '#fff',
     background: 'linear-gradient(to right, rgb(11, 11, 37,0.9), rgb(39, 33, 121))',
    minHeight: '100vh',
  },
  title: {
    fontSize: '2.8rem',
    textAlign: 'center',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.2rem',
    textAlign: 'center',
    marginBottom: '40px',
  },
  form: {
    maxWidth: '600px',
    margin: '0 auto 40px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '12px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    outline: 'none',
  },
  textarea: {
    padding: '12px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    outline: 'none',
    resize: 'vertical',
  },
 
  info: {
    textAlign: 'center',
    marginBottom: '40px',
    fontSize: '1rem',
    lineHeight: '1.6',
  },
  mapContainer: {
    maxWidth: '900px',
    margin: '0 auto',
    borderRadius: '12px',
    overflow: 'hidden',
  },
};

export default Contact;
