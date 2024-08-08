import React, { useState } from 'react';
import '../styles/styles.css'; 

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!form.name) {
      newErrors.name = 'Name is required.';
      valid = false;
    }
    if (!form.email) {
      newErrors.email = 'Email is required.';
      valid = false;
    }
    if (!form.message) {
      newErrors.message = 'Message is required.';
      valid = false;
    }
    setErrors(newErrors);

    if (valid) {
     
      console.log('Form submitted:', form);
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" value={form.message} onChange={handleChange}></textarea>
          {errors.message && <span>{errors.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;

