import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactUsForm.css';

const ContactUsForm = ({ submitForm, layout }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName:'',
    email: '',
    organization: '',
    requestType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = 'First Name is required';
    if (!formData.lastName) tempErrors.lastName = 'Last Name is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    if (!formData.organization) tempErrors.organization = 'Organization is required';
    if (!formData.requestType) tempErrors.requestType = 'Select a valid request type';
    if (!formData.message) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await emailjs.send('service_qpeny7r', 'template_xm4yuml', formData, 'c1S_nasteVdWQakKn');
        if (response.status === 200) {
          alert('Contact Form sent successfully');
          setShowPopup(true);
          setFormData({
            firstName: '',
            lastName:'',
            email: '',
            organization: '',
            requestType: '',
            message: '',
          });
        } else {
          alert('Failed to send Contact Form');
        }
      } catch (error) {
        console.error('An error occurred:', error);
        alert('An error occurred');
      }
    }
  };

  return (
    <div className='contact-form-container'>
      <div className='form-container'>
        <form onSubmit={handleSubmit} className={layout === 'horizontal' ? 'horizontal-form' : 'vertical-form'}>
            <div className='contact-form-heading'>
                <h1>Reach Out to Us</h1>
            </div>
          <div>
            <label>First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            {errors.firstName && <span>{errors.firstName}</span>}
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            {errors.lastName && <span>{errors.lastName}</span>}
          </div>
          <div>
            <label>Email</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div>
            <label>Organization</label>
            <input type="text" name="organization" value={formData.organization} onChange={handleChange} />
            {errors.organization && <span>{errors.organization}</span>}
          </div>
          <div>
            <label>Request Type</label>
            <select name="requestType" value={formData.requestType} onChange={handleChange}>
              <option value="">Select a Request Type</option>
              <option value="Package 1">Book a Speaker</option>
              <option value="Package 2">Media Inquiry</option>
              <option value="Package 3">Non-Speaking Inquiry</option>
              <option value="Other">Other</option>
            </select>
            {errors.requestType && <span>{errors.requestType}</span>}
          </div>
        
          <div>
            <label>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
            {errors.message && <span>{errors.message}</span>}
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className='contact-us-terms'>
          <p>* By submitting this for form, you agreeing to the Term & Conditions and Privacy Policy of CSB. *</p>
        </div>
        {showPopup && (
          <div className="popup">
            <p>Form submitted successfully!</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUsForm;