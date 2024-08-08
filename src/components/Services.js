import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/styles.css'; 

const Services = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchServices = async () => {
    try {
      const response = await axios.get('/wp-json/custom/v1/services');
      const sortedServices = response.data.sort((a, b) => {
        const numA = parseInt(a.title.split(':')[0].replace('Service ', ''));
        const numB = parseInt(b.title.split(':')[0].replace('Service ', ''));
        return numA - numB;
      });
      setServices(sortedServices);
    } catch (error) {
      setError('Error fetching services data: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <img src={service.image} alt={service.title} className="service-image" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-content">{service.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
