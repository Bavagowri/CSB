import React from 'react';
import ContactUsForm from '../../components/ContactUsForm/ContactUsForm';
import './ContactUsPage.css';

const ContactUsPage = () => {
  return (
    <div className="contact-us">
      <div className="contact-us-pg-container">
        <h1 className="contact-title">Contact Us</h1>
        <div className="contact-text">
          <p className="contact-us-pg-text">
            Events aren’t easy, but working with CSB is. Our goal is to help you create an enriching experience at your event. Whether you know exactly which speaker you’re looking for or you’re still exploring ideas, we’re here to help.
          </p>
          <p className="contact-us-pg-text">
            We’d love to speak with you. Please call us at <a href="tel:CONTACTNO">(CONTACT NO)</a> to connect with a member of our team. If you prefer, feel free to fill out the form below, and we’ll be in touch within one business day to help secure the perfect speaker for your event.
          </p>
          <p className="contact-us-pg-text bold-text">
            Not looking to book a speaker, but hoping to be one on our roster? Check us out <a href="/become-a-speaker">HERE</a> for more info!
          </p>
        </div>
      </div>
      <div className="contact-form-section">
        <div className="contact-form-placeholder">
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;