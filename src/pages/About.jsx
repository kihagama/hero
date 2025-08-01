import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const About = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_BASE_URL);
      setData(response.data);
    } catch (error) {
      console.error("Failed to fetch team data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    
  }, []);

  return (
    <div style={styles.container}>
      {/* Title & Intro */}
      <motion.h1 style={styles.title} initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
        About Us
      </motion.h1>

      <motion.p style={styles.intro} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
        Stratcom Communication and IT Solutions is a forward-thinking technology company based in Kampala, Uganda. We specialize in innovative digital services that help businesses thrive in the modern world.
      </motion.p>

      {/* Core Values */}
      <motion.div style={styles.card} initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2 style={styles.cardTitle}>Who We Are</h2>
        <p>We are a team of passionate IT professionals delivering reliable communication, software development, and networking solutions to businesses, institutions, and government bodies across Uganda.</p>
      </motion.div>

      <motion.div style={styles.card} initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2 style={styles.cardTitle}>Our Vision</h2>
        <p>To become Uganda’s leading digital transformation partner by empowering businesses through innovative and sustainable technology.</p>
      </motion.div>

      <motion.div style={styles.card} initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2 style={styles.cardTitle}>Our Mission</h2>
        <p>To provide cutting-edge IT and communication solutions that are customer-centered, scalable, and secure — enabling our clients to compete globally.</p>
      </motion.div>

      {/* Team Section */}
      <section style={styles.teamSection}>
        <motion.h2 style={styles.sectionTitle} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          Our Team
        </motion.h2>

        {loading ? (
          <p style={{ textAlign: 'center' }}>Loading team members...</p>
        ) : (
          <div style={styles.teamGrid}>
            {data.length === 0 ? (
              <p style={{ gridColumn: '1 / -1', textAlign: 'center' }}>No team members found.</p>
            ) : (
              data.map((member, index) => (
                <motion.div
                  key={member.id || index}
                  style={styles.teamCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img
                    src={`${import.meta.env.VITE_BASE}${member.image}`} 
                    alt={member.name}
                    style={styles.teamImage}
                  />
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </motion.div>
              ))
            )}
          </div>
        )}
      </section>

      {/* Achievements Section */}
      <section style={styles.achievementsSection}>
        <motion.h2 style={styles.sectionTitle} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          Our Achievements
        </motion.h2>
        <div style={styles.achievementGrid}>
          <motion.div style={styles.achievementCard} initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h3>100+</h3>
            <p>Successful Projects</p>
          </motion.div>
          <motion.div style={styles.achievementCard} initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h3>50+</h3>
            <p>Happy Clients</p>
          </motion.div>
          <motion.div style={styles.achievementCard} initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <h3>10+</h3>
            <p>Years in Business</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};


const styles = {
  container: {
    padding: '60px 20px',
    background: 'linear-gradient(to right, rgb(11, 11, 37,0.9), rgb(39, 33, 121))',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
  },
  title: {
    fontSize: '3rem',
    textAlign: 'center',
    marginBottom: '20px',
  },
  intro: {
    fontSize: '1.2rem',
    maxWidth: '800px',
    margin: '0 auto 40px',
    textAlign: 'center',
    lineHeight: '1.6',
  },
  card: {
    maxWidth: '800px',
    margin: '30px auto',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
    backdropFilter: 'blur(5px)',
  },
  cardTitle: {
    fontSize: '1.6rem',
    marginBottom: '10px',
    color: '#00BFA6',
  },
  sectionTitle: {
    fontSize: '2rem',
    textAlign: 'center',
    margin: '50px 0 30px',
    color: '#00BFA6',
  },
  teamSection: {
    padding: '20px 0',
  },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  teamCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    padding: '20px',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
  },
  avatar: {
    backgroundColor: '#00BFA6',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    margin: '0 auto 10px',
    fontSize: '24px',
    lineHeight: '60px',
    color: 'white',
  },
  achievementsSection: {
    padding: '60px 0',
  },
  achievementGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '30px',
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center',
  },
  achievementCard: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 3px 10px rgba(0,0,0,0.3)',
    
  },
  teamImage: {
  width: '200px',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '50%',
  marginBottom: '10px',
}

};

export default About;
