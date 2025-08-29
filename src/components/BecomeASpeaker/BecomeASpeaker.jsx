import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './BecomeASpeaker.css';

const BecomeASpeaker = ({ submitForm, layout }) => {
  const [formData, setFormData] = useState({
    speakerName: '',
    telephone:'',
    email: '',
    placeOfResidence:'',
    biography:'',
    video:'',
    speechTopicsDesc:'',
    fees:'',
    travelExpenses:'',
    additionalComments: '',
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
    if (!formData.speakerName) tempErrors.speakerName = 'Speaker Name is required';
    if (!formData.telephone) tempErrors.telephone = 'Telephone number is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    if (!formData.placeOfResidence) tempErrors.placeOfResidence = 'Speakers place Of Residence is required';
    if (!formData.biography) tempErrors.biography = 'Speakers biography is required';
    if (!formData.video) tempErrors.video = 'Speakers video clips link is required';
    if (!formData.speechTopicsDesc) tempErrors.speechTopicsDesc = 'Speakers Speech Topic Titles & Descriptions is required';
    if (!formData.fees) tempErrors.fees = 'Speakers speaking fee is required';
    if (!formData.travelExpenses) tempErrors.travelExpenses = 'Speakers travel expense is required';
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
            speakerName: '',
            telephone:'',
            email: '',
            placeOfResidence:'',
            biography:'',
            video:'',
            speechTopicsDesc:'',
            fees:'',
            travelExpenses:'',
            additionalComments: '',
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
                    <label>Speaker Name</label>
                    <input type="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
                    {errors.firstName && <span>{errors.firstName}</span>}
                </div>
            </div>

            <div>
                <label>Telephone</label>
                <input type="telephone" name="telephone" value={formData.telephone} onChange={handleChange} />
                {errors.telephone && <span>{errors.telephone}</span>}
            </div>

            <div>
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <span>{errors.email}</span>}
            </div>

            <div>
                <label>PlaceOfResidence</label>
                <input type="placeOfResidence" name="placeOfResidence" value={formData.placeOfResidence} onChange={handleChange} />
                {errors.placeOfResidence && <span>{errors.placeOfResidence}</span>}
            </div>

            <div>
                <label>Biography</label>
                <textarea name="biography" value={formData.biography} onChange={handleChange}></textarea>
                {errors.biography && <span>{errors.biography}</span>}
            </div>

            <div>
                <label>Video Clips Link</label>
                <textarea name="video" value={formData.video} onChange={handleChange}></textarea>
                {errors.video && <span>{errors.video}</span>}
            </div>
            
            <div>
                <label>Speech Topic Titles & Descriptions</label>
                <textarea name="speechTopicsDesc" value={formData.speechTopicsDesc} onChange={handleChange}></textarea>
                {errors.speechTopicsDesc && <span>{errors.speechTopicsDesc}</span>}
            </div>

            <div>
                <label>Speaking Fees</label>
                <textarea name="fees" value={formData.fees} onChange={handleChange}></textarea>
                {errors.fees && <span>{errors.fees}</span>}
            </div>

            <div>
                <label>Travel Expenses</label>
                <textarea name="travelExpenses" value={formData.travelExpenses} onChange={handleChange}></textarea>
                {errors.travelExpenses && <span>{errors.travelExpenses}</span>}
            </div>

            <div>
                <label>Additional Comments</label>
                <textarea name="additionalComments" value={formData.additionalComments} onChange={handleChange}></textarea>
                {errors.additionalComments && <span>{errors.additionalComments}</span>}
            </div>


          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className='bs-terms'>
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

export default BecomeASpeaker;
