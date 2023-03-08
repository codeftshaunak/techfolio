import React from 'react';
import ContactForm from '../components/ContactForm';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Project from '../components/Project';
import Review from '../components/Review';
import Skills from '../components/Skills';
import WorkExprience from '../components/WorkExprience';

const Home = () => {
  return (
    <>
     <HeroSection/>
     <WorkExprience/>
     <Skills/>
     <Project/>
     <Review/>
     <ContactForm/>
    </>
  )
}

export default Home;
