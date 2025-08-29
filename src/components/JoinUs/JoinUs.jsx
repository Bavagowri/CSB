import React, { useState } from 'react';
import './JoinUs.css';
import JoinUsImg from '../../assets/join-us.png';

const JoinUs = ({ submitForm, layout }) => {
  const [formData, setFormData] = useState({
    email: '',
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
    if (!formData.email) tempErrors.email = 'Email is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await emailjs.send('service_qpeny7r', 'template_xm4yuml', formData, 'c1S_nasteVdWQakKn');
        if (response.status === 200) {
          alert('Subscribe to News Letter Successfully!');
          setShowPopup(true);
          setFormData({
            email: '',
          });
        } else {
          alert('Failed to Subscribe to News Letter');
        }
      } catch (error) {
        console.error('An error occurred:', error);
        alert('An error occurred');
      }
    }
  };

  return (
    <div className='join-us-container'>
        <div className='join-us-col1'>
          <h1>
            Subscribe to Commonwealth Speakers Bureau emails
          </h1>
          <p>
            Join us in elevating ideas, 
            empowering change and creating a 
            stage for every voices in the 
            commonwealth to be heard.<br/>
            Subscribe to stay current on the latest Commonwealth Speakers Bureau
             updates, events, and speaker news.
          </p>
          <div className='join-us-form-container'>
            
            <form onSubmit={handleSubmit} className={layout === 'horizontal' ? 'horizontal-form' : 'vertical-form'}>
              <div>
                <label>Enter your Email</label>
                <input type="text" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <span>{errors.email}</span>}
              </div>

              <div>
                <button type="submit">Subscribe</button>
              </div>
            </form>
        </div>
        </div>
        <div className='join-us-col2'>
          <img src={JoinUsImg} alt='join-us-img' />
        </div>
    </div>
  );
};

export default JoinUs;
