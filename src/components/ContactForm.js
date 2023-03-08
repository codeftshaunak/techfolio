import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";


function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ct9pogd', 'template_3c339r8', e.target, '0CuseboMUiYcNIbZB')
      .then((result) => {
        // console.log(result.text);
        toast.success('Email sent successfully!');
      }, (error) => {
        // console.log(error.text);
        toast.error('An error occurred while sending email.');
      });

    setName('');
    setEmail('');
    setMessage('');

    e.target.reset();
  }

  return (
    <Wrapper className='container'>
      <ToastContainer />
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={sendEmail}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder='Enter Your Name Please' value={name} onChange={(e) => setName(e.target.value)} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={message} placeholder='Write Your Message' onChange={(e) => setMessage(e.target.value)} />

        <button type="submit">Send</button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
.contact-form {
  display: flex;
  flex-direction: column;
  max-width: 90%;
  margin: 1rem auto;
  padding: 20px;
  background-color: var(--primaryColor);
  border: 1px solid var(--cuteColor);
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.contact-form h2 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
}

.contact-form input,
.contact-form textarea {
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  background-color: #f5f5f5;
  color: #333;
  font-size: 16px;
  font-family: firacode;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  background-color: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
}

.contact-form textarea {
  height: 120px;
}

.contact-form button[type="submit"] {
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #333;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.contact-form button[type="submit"]:hover {
  background-color: #444;
}

`

export default ContactForm;
