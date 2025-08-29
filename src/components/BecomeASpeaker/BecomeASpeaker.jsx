import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './BecomeASpeaker.css';

const BecomeASpeaker = ({ submitForm, layout }) => {
  const [formData, setFormData] = useState({
    speakerName: '',
    telephone: '',
    email: '',
    countryOfResidence: '',
    biography: '',
    linkedIn: '',
    officialWebsite: '',
    twitter: '',
    speechTopicsDesc: '',
    verificationDateTime: null,
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

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      verificationDateTime: date,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.speakerName) tempErrors.speakerName = 'Speaker Name is required';
    if (!formData.telephone) tempErrors.telephone = 'Telephone number is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    if (!formData.countryOfResidence) tempErrors.countryOfResidence = 'Country of Residence is required';
    if (!formData.biography) tempErrors.biography = 'Biography is required';
    if (!formData.linkedIn) tempErrors.linkedIn = 'LinkedIn is required';
    if (!formData.officialWebsite) tempErrors.officialWebsite = 'Official Website is required';
    if (!formData.speechTopicsDesc) tempErrors.speechTopicsDesc = 'Speech Topic Titles & Descriptions is required';
    if (!formData.verificationDateTime) tempErrors.verificationDateTime = 'Virtual Verification Date and Time is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await emailjs.send('service_qpeny7r', 'template_xm4yuml', {
          ...formData,
          verificationDateTime: formData.verificationDateTime ? formData.verificationDateTime.toISOString() : '',
        }, 'c1S_nasteVdWQakKn');
        if (response.status === 200) {
          alert('Custom Proposal sent successfully');
          setShowPopup(true);
          setFormData({
            speakerName: '',
            telephone: '',
            email: '',
            countryOfResidence: '',
            biography: '',
            linkedIn: '',
            officialWebsite: '',
            twitter: '',
            speechTopicsDesc: '',
            verificationDateTime: null,
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
    <div className='become-a-speaker-form-container'>
      <div className='bs-form-container'>
        <form onSubmit={handleSubmit} className={layout === 'horizontal' ? 'horizontal-form' : 'vertical-form'}>
          <div className='heading'>
            <h5>Fields marked with an * are required</h5>
          </div>

          <div className='two-col'>
            <div>
              <label>Speaker Name *</label>
              <input type="text" name="speakerName" value={formData.speakerName} onChange={handleChange} />
              {errors.speakerName && <span>{errors.speakerName}</span>}
            </div>
          </div>

          <div>
            <label>Telephone *</label>
            <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} />
            {errors.telephone && <span>{errors.telephone}</span>}
          </div>

          <div>
            <label>Email *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span>{errors.email}</span>}
          </div>

          <div>
            <label>Country of Residence *</label>
            <input type="text" name="countryOfResidence" value={formData.countryOfResidence} onChange={handleChange} />
            {errors.countryOfResidence && <span>{errors.countryOfResidence}</span>}
          </div>

          <div>
            <label>LinkedIn *</label>
            <textarea name="linkedIn" value={formData.linkedIn} onChange={handleChange}></textarea>
            {errors.linkedIn && <span>{errors.linkedIn}</span>}
          </div>

          <div>
            <label>Official Website *</label>
            <textarea name="officialWebsite" value={formData.officialWebsite} onChange={handleChange}></textarea>
            {errors.officialWebsite && <span>{errors.officialWebsite}</span>}
          </div>

          <div>
            <label>Twitter</label>
            <textarea name="twitter" value={formData.twitter} onChange={handleChange}></textarea>
            {errors.twitter && <span>{errors.twitter}</span>}
          </div>

          <div>
            <label>Biography *</label>
            <textarea name="biography" value={formData.biography} onChange={handleChange}></textarea>
            {errors.biography && <span>{errors.biography}</span>}
          </div>

          <div>
            <label>Speech Topic Titles & Descriptions *</label>
            <textarea name="speechTopicsDesc" value={formData.speechTopicsDesc} onChange={handleChange}></textarea>
            {errors.speechTopicsDesc && <span>{errors.speechTopicsDesc}</span>}
          </div>

          <div>
            <label>Virtual Verification Date and Time *</label>
            <DatePicker
              selected={formData.verificationDateTime}
              onChange={handleDateChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
              placeholderText="Select date and time"
              className="date-picker"
              minDate={new Date()}
              showPopperArrow={true}
              popperPlacement="bottom-start"
              popperModifiers={{
                preventOverflow: { enabled: true },
                flip: { enabled: false },
              }}
              openToDate={new Date()}
              isClearable={true}
              showMonthDropdown={true}
              timeSelectPosition="right" // Move time to the right side
            />
            {errors.verificationDateTime && <span>{errors.verificationDateTime}</span>}
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className='bs-terms'>
          <p>* By submitting this form, you agree to the Terms & Conditions and Privacy Policy of CSB. *</p>
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

export default BecomeASpeaker;