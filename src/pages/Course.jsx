import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import internimage from '../assets/pexels-cottonbro-6804068.jpg'
import './Hover.css';
import axios from 'axios';

const Course = () => {
  const [showInternModal, setShowInternModal] = useState(false);
  const [showHireModal, setShowHireModal] = useState(false);
  const [internForm, setInternForm] = useState({
    fullName: '', contact: '', email: '', duration: '', service: 'Internship Program'
  });
  const [hireForm, setHireForm] = useState({
    fullName: '', contact: '', email: '', service: ''
  });
  const [Data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const BASE_URL = import.meta.env.VITE_URL;
  const HIRE_URL = import.meta.env.VITE_HIRE_URL;
  const INTERNSHIP_URL = import.meta.env.VITE_INTERNSHIP_URL;

  const fetchData = async (filters = {}) => {
    try {
      setloading(true);
      const response = await axios.get(BASE_URL, { params: filters });
      setData(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    if (searchTerm === '') {
      fetchData();
    }
  }, [searchTerm]);

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      fetchData();
    } else {
      fetchData({ title: searchTerm });
    }
  };

  const handleSubmit = async (type) => {
    try {
      const payload =
        type === "Internship"
          ? {
              internship: internForm.service,
              studentname: internForm.fullName,
              email: internForm.email,
              phone: internForm.contact,
            }
          : {
              serivicehire: hireForm.service,
              customername: hireForm.fullName,
              email: hireForm.email,
              phone: hireForm.contact,
            };

      const url = type === "Internship" ? INTERNSHIP_URL : HIRE_URL;

      const res = await axios.post(url, payload);
      alert(`${type} Submitted Successfully!`);

      if (type === "Internship") setShowInternModal(false);
      else setShowHireModal(false);
    } catch (err) {
      console.error(err);
      alert("Submission failed. Please try again.");
    }
  };

  const backdropStyle = {
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
  };

  const modalStyle = {
    backgroundColor: '#fff', color: '#000', borderRadius: '12px', padding: '30px', maxWidth: '400px', width: '90%'
  };

  return (
    <div style={styles.container}>
      <motion.h1 style={styles.title}>Our Services</motion.h1>

      {/* Internship Section */}
      <div style={styles.sectionGroup}>
        <h2 style={styles.sectionTitle}>Internship Opportunities</h2>
        <div style={styles.card}>
          <img src={internimage} alt="Internship" style={styles.cardImage} />
          <h3>Internship Program</h3>
          <p>Hands-on training for students in software development, networking, and IT support.</p>
          <button className='hovers' onClick={() => setShowInternModal(true)}>Enroll Now</button>
        </div>
      </div>

      {/* Services Section */}
      <div style={styles.sectionGroup}>
        <h2 style={styles.sectionTitle}>Professional Services</h2>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <input className='search'
            style={{ ...styles.input, maxWidth: '300px' }}
            type="text"
            placeholder='Search service'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='hovers' onClick={handleSearch}>Search</button>
        </div>
        {loading ? <p style={{ textAlign: 'center' }}>Loading...</p> :
          Data.length === 0 ? <h3 style={{ textAlign: 'center' }}>No Services Available</h3> :
            Data.map((service) => (
              <div style={styles.card} key={service.id}>
                <img src={`${import.meta.env.VITE_BASE}${service.image}`} alt={service.title} style={styles.cardImage} />
                <h3>{service.title}</h3>
                <p>{service.content}</p>
                <button className='hovers' onClick={() => { setHireForm({ ...hireForm, service: service.title }); setShowHireModal(true); }}>Hire Now</button>
              </div>
            ))}
      </div>

      {/* Internship Modal */}
      {showInternModal && (
        <div style={backdropStyle} onClick={() => setShowInternModal(false)}>
          <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
            <h2>Enroll for Internship</h2>
            <form
              onSubmit={e => {
                e.preventDefault();
                handleSubmit('Internship');
              }}
            >
              <input
                placeholder="Full Name"
                style={styles.input}
                required
                onChange={(e) => setInternForm({ ...internForm, fullName: e.target.value })}
              />
              <input
                placeholder="Contact"
                style={styles.input}
                required
                onChange={(e) => setInternForm({ ...internForm, contact: e.target.value })}
              />
              <input
                placeholder="Email"
                type="email"
                style={styles.input}
                required
                onChange={(e) => setInternForm({ ...internForm, email: e.target.value })}
              />
              <input
                placeholder="Duration"
                style={styles.input}
                required
                onChange={(e) => setInternForm({ ...internForm, duration: e.target.value })}
              />
              <input
                value={internForm.service}
                readOnly
                style={styles.input}
              />
              <button className='hovers' type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      {/* Hire Modal */}
      {showHireModal && (
        <div style={backdropStyle} onClick={() => setShowHireModal(false)}>
          <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
            <h2>Hire Us</h2>
            <form
              onSubmit={e => {
                e.preventDefault();
                handleSubmit('Hire');
              }}
            >
              <input
                placeholder="Full Name"
                style={styles.input}
                required
                onChange={(e) => setHireForm({ ...hireForm, fullName: e.target.value })}
              />
              <input
                placeholder="Contact"
                style={styles.input}
                required
                onChange={(e) => setHireForm({ ...hireForm, contact: e.target.value })}
              />
              <input
                placeholder="Email"
                type="email"
                style={styles.input}
                required
                onChange={(e) => setHireForm({ ...hireForm, email: e.target.value })}
              />
              <input
                value={hireForm.service}
                readOnly
                style={styles.input}
              />
              <button className='hovers' type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    background: 'linear-gradient(to right, rgba(11, 11, 37, 0.9), rgb(39, 33, 121))',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    padding: '60px 20px',
    minHeight: '100vh',
  },
  title: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '30px',
  },
  sectionGroup: {
    marginBottom: '60px',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    textAlign: 'center',
    marginBottom: '20px',
    color: '#00BFA6',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.07)',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '20px',
    maxWidth: '500px',
    margin: '20px auto',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  },
  cardImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
    marginRight:"10px"
  },
};

export default Course;
