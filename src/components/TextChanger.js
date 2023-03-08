import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaYoutube, FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  flex-direction: column;
  position: relative;
  width: 250px;
  margin: auto;

  .icon__txc{
    font-size: 3rem;
    position: absolute;
    cursor: pointer;
    top: -4rem;
    display: flex;
    align-items: center;
    width: 250px;
    justify-content: space-between;

    a{
        text-decoration: none;
        color: var(--cuteColor);
        transition: 0.3s ease-in-out;
        opacity: 0.5;
    }
    
    a:hover{
        opacity: 1;
    }
  }

  span{
    position: absolute;
    font-size: 1.3rem;
    font-weight: 500;
  }

  @media only screen and (max-width: 800px){
    margin: auto;
  }

`;

const Icon = styled.span`
  margin: 0 10px;
`;

const TypeAnimation = ({ text, onComplete }) => {
    const [currentText, setCurrentText] = useState('');

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setCurrentText(text.slice(0, i));
            i++;
            if (i > text.length) {
                clearInterval(interval);
                onComplete();
            }
        }, 200);
        return () => clearInterval(interval);
    }, [text, onComplete]);

    return <span>{currentText}</span>;
};

const TextChanger = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const texts = [
        {
            text: "😋Watch The Best Interview Preparation🏆 Videos in Free👀",
            icon: <FaYoutube />,
        },
        {
            text: "For learning👨🏻‍💻 more and grow follow Linkedin👨🏼‍🏫",
            icon: <FaLinkedin />,
        },
        {
            text: "You wanna build project🫅🏼go to🚀 my github and check the repo 🔓",
            icon: <FaGithub />,
        },
        {
            text: "🤝Follow me on Facebook. For watch more content in free😄🆓.",
            icon: <FaFacebook />,
        },
        {
            text: "If you have any question🧐 message me in Instagram🤙🏻.",
            icon: <FaInstagram />,
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex(currentTextIndex => (currentTextIndex + 1) % texts.length);
        }, 15000);
        return () => clearInterval(interval);
    }, [texts.length]);

    return (
        <Wrapper>
            {/* <Icon>{texts[currentTextIndex].icon}</Icon> */}
            <div className='icon__txc'>
                <a href="https://www.youtube.com/@shaunakkd" target="_blank"><FaYoutube /></a>
                <a href="https://www.linkedin.com/in/sagardey01/" target="_blank"><FaLinkedin /></a>
                <a href="https://github.com/codeftshaunak" target="_blank"><FaGithub /></a>
                <a href="https://www.facebook.com/codeftshaunak" target="_blank"><FaFacebook /></a>
            </div>
            <TypeAnimation
                className="text-animated"
                text={texts[currentTextIndex].text}
                onComplete={() => {
                    setCurrentTextIndex(currentTextIndex => (currentTextIndex + 1) % texts.length);
                }}
            />
        </Wrapper>
    );
};

export default TextChanger;
