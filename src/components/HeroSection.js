import React, { useState } from 'react';
import styled from 'styled-components';
import code from '../images/code__1.png';
import TextChanger from './TextChanger';

const HeroSection = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const renderBubbles = () => {
        const colors = ['#1abc9c', '#3498db', '#9b59b6', '#e67e22', '#e74c3c'];
        const bubbles = [];

        for (let i = 0; i < 20; i++) {
            const size = Math.floor(Math.random() * 50) + 10;
            const color = colors[Math.floor(Math.random() * colors.length)];

            bubbles.push(
                <span
                    key={i}
                    className="bubble"
                    style={{
                        width: size,
                        height: size,
                        backgroundColor: color,
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + '%',
                    }}
                />
            );
        }

        return bubbles;
    };


    return (<Wrapper className="container">
        <div className="hero" onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className="left__content">
                <h1>Hey, I'm <span style={{ color: "var(--cuteColor)" }}>Sagar!</span></h1>
                <br />
                <h2>Welcome to my zone😉</h2>
                <br />
                <h3>
                    I am a <span style={{ color: "var(--cuteColor)", fontWeight: "800", }}>Frontend Engineer👨🏻‍💻</span>
                    <br />
                    You can say  <span style={{ color: "var(--cuteColor)", fontWeight: "800" }}>React developer💻👨🏻‍💻</span><br />
                    Also a teacher who love to teach. <br /> I am the <span style={{ textTransform: "capitalize", fontWeight: "800" }}>instractor</span> in <span style={{ color: "var(--cuteColor)", fontWeight: "800" }}>BTS of Javascript🤙🏻</span><br />
                    I like to write code teach coding. Mostly whenever I feel free I try to make content in <span style={{ textTransform: "uppercase", fontWeight: "800", color: "var(--cuteColor)" }}>youtube💪🏻💻</span>
                </h3>
            </div>
            <div className="right__content">
                <img src={code} alt="" className='bubble-container' />
                <div className="text__changer">
                    <TextChanger />
                </div>
            </div>
        </div>
        {isHovering && renderBubbles()}
    </Wrapper>
    )
}


const Wrapper = styled.section`
.hero{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: 80vh;
    margin-bottom: 3rem;
}

.left__content{
    width: 50%;
    order: 2;
    text-align: right;
}

.left__content h1{
    font-size: 3rem;
    font-weight: bolder;
}

.left__content h2{
    font-weight: 200;
    font-size: 2rem;
}

.left__content h3{
    font-weight: 200;
    font-size: 1rem;
}

.right__content{
    width: 50%;
    position: relative;
    .text__changer {
        position: absolute;
        top: 50%;
        left: 35%;
        transform: translate(-50%, -50%);
        z-index: 100;
        height: 100%;
        width: 75%;
        background-color: rgba(0, 0, 0, 0.7); 
        color: #fff;
        display: flex;
        align-items: center;  
    }
}

.right__content img{
    width: 70%;
    display: block;
    margin-right: auto;
    border: 0.3px solid var(--primaryColorFont);
}

@media only screen and (max-width: 800px) {
    .hero{
        height : 100vh;
    }
    .left__content{
        width: 100%;
        text-align: left;

    }
    .right__content{
        width: 100%;
        .text__changer {
            width: 100%;
            left: 50%;
        }
        
    }

    .right__content img{
        width: 70%;
        margin: auto;
        border: none;

    }
}
`

export default HeroSection;
