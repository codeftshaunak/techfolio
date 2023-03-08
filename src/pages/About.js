import React from 'react'
import styled from 'styled-components';
import developer from '../images/developer.gif';
import instructor from '../images/instructor.gif';
import host from '../images/host.gif';
import seeker from '../images/seeker.gif';

const About = () => {
    return (
        <Wrapper className='container'>
            <div className="developer flex">
                <h1 className="title">Programmer Who Have Life</h1>
                <div className="content">
                    <div className="left">
                        <img src={developer} alt="" />
                    </div>
                    <div className="right">
                        <h3>Hi! This is Sagar D. I am a self thought</h3> <h3 style={{ color: "var(--cuteColor)" }}>Programmer.💻👨🏻‍💻👨🏻</h3> <br />
                        <p>People think that programmer have no life. But believe me I have my life. I enjoy programming that's why I am here.</p>
                        <br />
                        <p>you can try this concept for reach the state of no life.</p>
                        <br />
                        <b>eat()</b> <b>code()</b> <b>sleep()</b> <b>repeat()</b>
                    </div>
                </div>
            </div>
            <div className="instructor flex">
                <h1 className="title">Javascript Instructor</h1>
                <div className="content">
                    <div className="right">
                        <h3>I am a Instructor of our newlly launch course</h3> <h3 style={{ color: "var(--cuteColor)" }}>BTS Of JavaScript💻👨🏻‍💻👨🏻</h3> <br />
                        <p>We are researching in javascript that's why people really start hate javascript and we found that people have such issue with the fundamental concept of javascript.</p>
                        <br />
                        <p>In this serise I used to cover all of thous fundamental concept of javascript. Also the question of JavaScript💻👨🏻‍💻👨🏻that can help our student's to creak interviews.</p>
                        <br />
                        <b>learn()</b> <b>code()</b> <b>practice()</b> <b>repeat()</b>
                    </div>
                    <div className="left">
                        <img src={instructor} alt="" />
                    </div>
                </div>
            </div>
            <div className="spiritual flex">
                <h1 className="title">Spiritual Seeker & Speaker</h1>
                <div className="content">
                    <div className="left">
                        <img src={seeker} alt="" />
                    </div>
                    <div className="right">
                        <div className="right">
                            <h3>I am a guy who believe in</h3> <h3 style={{ color: "var(--cuteColor)" }}>Spiritual practice & spread wisdom</h3> <br />
                            <p>Doesn't metter whatever you are once you have to die and this the ultimate truth for everyone. This is why spiritual practice and spread wisdom is more important the anything else.</p>
                            <br />
                            <p> I try to lead my life in the basis of practice spirituality.</p>
                            <br />
                            <b>learn()</b> <b>practice()</b> <b>spread()</b> <b>repeat()</b>
                        </div>
                    </div>
                </div>
            </div>
            <div className="developer flex">
                <h1 className="title">A Host and Story Teller</h1>
                <div className="content">
                    <div className="right">
                        <h3>Host and organize evernt's are kind of hobby for me. I learn</h3><h3 style={{ color: "var(--cuteColor)" }}>Story telling.</h3><h3>by the time</h3> <br />
                        <p>It's a great thing once you creak how to tell story. I love to give speech telleing story. Hosting evernt's. Perform drama in stage.</p>
                        <br />
                        <p>I've directed so maney stage dramas. It's a kind of theraphy for me and the way to grow up.</p>
                        <br />
                        <b>grow()</b> <b>learn()</b> <b>share()</b> <b>repeat()</b>
                    </div>
                    <div className="left">
                        <img src={host} alt="" />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin: 1rem auto;
    img{
        width: 300px;
        opacity: 0.5;
    } 

    .title{
        padding: 1rem 0;
    }

    .content{
        display: flex;
        width: 100%;
        margin: auto;
        justify-content: space-around;
        align-items: center;
        border: 1px solid gray;
        padding: 1rem 0;
        margin: auto;
        margin-bottom: 4rem;
        flex-wrap: wrap;
        height: 70vh;
    }

    .right{
        max-width: 500px;
        padding: 1rem;
    }

    @media only screen and (max-width: 700px) {
       .content{
        height: 100vh;
       } 
    }

`

export default About;
