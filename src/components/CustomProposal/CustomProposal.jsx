import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './CustomProposal.css';

const CustomProposal = ({ submitForm, layout }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName:'',
    organization: '',
    jobTitle:'',
    orgLink:'',
    telephone:'',
    email: '',
    interest:'',
    dateOfEvent:'',
    eventLocation:'',
    budget:'',
    moreDetails: '',
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
    if (!formData.organization) tempErrors.organization = 'Organization is required';
    if (!formData.organization) tempErrors.organization = 'Organization website link is required';
    if (!formData.telephone) tempErrors.telephone = 'Telephone number is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    if (!formData.interest) tempErrors.interest = 'Speakers or Topics of Interest is required';
    if (!formData.budget) tempErrors.budget = 'Budget is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await emailjs.send('service_qpeny7r', 'template_xm4yuml', formData, 'c1S_nasteVdWQakKn');
        if (response.status === 200) {
          alert('Custom Proposal sent successfully');
          setShowPopup(true);
          setFormData({
            firstName: '',
            lastName:'',
            organization: '',
            jobTitle:'',
            orgLink:'',
            telephone:'',
            email: '',
            interest:'',
            dateOfEvent:'',
            eventLocation:'',
            budget:'',
            moreDetails: '',
        });
        } else {
          alert('Failed to send Custom Proposal');
        }
      } catch (error) {
        console.error('An error occurred:', error);
        alert('An error occurred');
      }
    }
  };

  return (
    <div className='custom-proposal-form-container'>
      <div className='cp-form-container'>
        <form onSubmit={handleSubmit} className={layout === 'horizontal' ? 'horizontal-form' : 'vertical-form'}>
            <div className='heading'>
                <h1>Custom Proposal</h1>
            </div>

            <div className='two-col'>
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
            </div>
            <div className='two-col'>
                <div>
                    <label>Organization</label>
                    <input type="text" name="organization" value={formData.organization} onChange={handleChange} />
                    {errors.organization && <span>{errors.organization}</span>}
                </div>
                <div>
                    <label>Job Title</label>
                    <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
                </div>
            </div>

            <div>
                <label>Organization Website Link</label>
                <input type="text" name="orgLink" value={formData.orgLink} onChange={handleChange} />
                {errors.orgLink && <span>{errors.orgLink}</span>}
            </div>

            <div>
                <label>Telephone</label>
                <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} />
                {errors.telephone && <span>{errors.telephone}</span>}
            </div>

            <div>
                <label>Email</label>
                <input type="text" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <span>{errors.email}</span>}
            </div>
            
            <div>
                <label>Topics of Interest</label>
                <textarea name="interest" value={formData.interest} onChange={handleChange}></textarea>
                {errors.interest && <span>{errors.interest}</span>}
            </div>

            <div>
                <label>Date of Event</label>
                <textarea name="dateOfEvent" value={formData.dateOfEvent} onChange={handleChange}></textarea>
                {errors.dateOfEvent && <span>{errors.dateOfEvent}</span>}
            </div>

            <div>
                <label>Event Location</label>
                <textarea name="eventLocation" value={formData.eventLocation} onChange={handleChange}></textarea>
                {errors.eventLocation && <span>{errors.eventLocation}</span>}
            </div>

            <div>
                <label>Budget for Speaker Honorarium</label>
                <textarea name="budget" value={formData.budget} onChange={handleChange}></textarea>
                {errors.budget && <span>{errors.budget}</span>}
            </div>

            <div>
                <label>Tell us more about the event</label>
                <textarea name="moreDetails" value={formData.moreDetails} onChange={handleChange}></textarea>
                {errors.moreDetails && <span>{errors.moreDetails}</span>}
            </div>


          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className='cp-terms'>
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

export default CustomProposal;