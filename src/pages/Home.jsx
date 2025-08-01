import React from 'react';
import { motion } from 'framer-motion';
import stratcomvideo from '../assets/startcomvideo.mp4'
import './Hover.css'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      {/* Hero Section with Video Background */}
      <section style={styles.heroContainer}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={styles.videoBg}
          src={stratcomvideo}
        />
        <div style={styles.overlay} />

        <motion.div
          style={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 style={styles.heroTitle}>Welcome to Stratcom Uganda</h1>
          <p style={styles.heroSubtitle}>
            Innovating Technology. Empowering Businesses.
          </p>
          <button className='hovers'><Link to='/our-services' style={{textDecoration:"none",color:"white"}}>See Our Services</Link></button>
        </motion.div>
      </section>

      {/* Contact CTA Section */}
      <section style={styles.contactSection}>
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to scale your business?
        </motion.h2>
        <p>Let Stratcom be your tech partner. Contact us today!</p>
        <button className='hovers'> <Link to='/contact' style={{textDecoration:"none",color:"white"}}>Contact Us</Link></button>
      </section>

      {/* Google Map Location */}
      <section style={styles.mapSection}>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Find Us
        </motion.h2>
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
/>


        </div>
      </section>
    </>
  );
};

const styles = {
  heroContainer: {
    position: 'relative',
    height: '100vh',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    overflow: 'hidden',
  },
  videoBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -2,
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to right, rgba(11,11,37,0.5), rgba(39,33,121,0.5))',
    zIndex: -1,
  },
  heroContent: {
    zIndex: 1,
    padding: '0 20px',
  },
  heroTitle: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    marginBottom: '2rem',
  },
 
  contactSection: {
    background: 'linear-gradient(to right, rgb(11, 11, 37), rgb(39, 33, 121))',
    color: 'white',
    textAlign: 'center',
    padding: '60px 20px',
  },
  mapSection: {
    padding: '60px 20px',
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
  },
  mapContainer: {
    maxWidth: '900px',
    margin: '20px auto',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
  },
};

export default Home;
