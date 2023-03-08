import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { GrCaretPrevious, GrCaretNext } from 'react-icons/gr';
import styled from 'styled-components';

function Carousel({ project }) {
    console.log(project);
    const { ProjectImg, ProjectName, ProjectDescription, GitHub, Website, ProjectKeypoint } = project;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    console.log(ProjectImg);
    const handlePrevClick = () => {
        setCurrentImageIndex(currentImageIndex - 1);
    };

    const handleNextClick = () => {
        setCurrentImageIndex(currentImageIndex + 1);
    };

    const [expend, setExpend] = useState(false);

    return (
        <Wrapper className="carousel">
            <div className="carousel__image-container">
                <img
                    className="carousel__image"
                    src={ProjectImg[currentImageIndex]}
                    alt={`Image ${currentImageIndex + 1}`}
                />
                <div className="carousel__overlay">
                    <h2 className="carousel__title">{ProjectName}</h2>
                    {
                        expend ? <>
                            <p className="carousel__description">{ProjectDescription}</p>
                            <p className="ProjectKeypoint">{ProjectKeypoint.map((data, index) => {
                                return <div key={index}>
                                    <ul>
                                        <>🤜🏻 {data}.</>
                                    </ul>
                                </div>
                            })}
                            </p>
                            <button onClick={() => setExpend(!expend)}>See less</button>
                        </>
                            : <p>{ProjectDescription.slice(0, 150)}... <button onClick={() => setExpend(!expend)}>View Details</button></p>
                    }

                    <div className="carousel__links">
                        <a href={GitHub} target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href={Website} target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt />
                        </a>
                    </div>
                </div>
            </div>

            <div className="prev__next__button">
                <button
                    className="carousel__prev-button"
                    onClick={handlePrevClick}
                    disabled={currentImageIndex === 0}
                >
                    <GrCaretPrevious />
                </button>
                <button
                    className="carousel__next-button"
                    onClick={handleNextClick}
                    disabled={currentImageIndex === ProjectImg.length - 1}
                >
                    <GrCaretNext />
                </button>
            </div>

        </Wrapper>
    );
}

const Wrapper = styled.section`
        width: 350px;
        margin: auto;
        padding: 1rem;
        margin: 1rem auto;
        position: relative;
        overflow: hidden;
        border: 1px solid var(--cuteColor);
        border-radius: 15px;
        
        ::before {
			content: "";
			position: absolute;
			top: -2px;
			left: -2px;
			right: -2px;
			bottom: -2px;
			z-index: -1;
			border-top: 3px solid var(--primaryColorFont);
			border-right: 3px solid var(--primaryColorFont);
			border-bottom: 3px solid var(--primaryColorFont);
			border-left: 3px solid var(--primaryColorFont);
			opacity: 0;
			animation: border-animation 5s linear infinite;
		}

        .carousel__overlay{
            button{
                border: none;
                padding: 0.2rem 0.5rem;
                color: var(--thirdColorFont);
                background-color: var(--btnBackground);
                cursor: pointer;
                transition: 0.3s ease-in-out;
            }

            p{
                font-size: 0.9rem;
                font-weight: 100;
            }

        }

        .carousel__title{
            padding: 0.5rem 0;
            font-size: 1.2rem;
        }

        .carousel__links{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            
            a{
                font-size: 2rem;
                color: var(--primaryColorFont);
                padding: 1rem;
                transition: 0.3s ease-in-out;
            }

            a:hover{
                color: var(--thirdColorFont);
            }
        }

        .prev__next__button{
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            button{
                padding: 0.5rem 1.5rem;
                border: none;
                
                svg{
                    cursor: pointer;
                    font-size: 1rem;
                }
            }
            
        }

        img{
            width: 100%;
            display: block;
            object-fit: cover;
            height: 200px;
        }




        @keyframes border-animation {
			0% {
				transform: translateY(-100%);
				opacity: 1;
			}
            25%{
                border-color: red;
            }
			50% {
				border-color: var(--cuteColor);
			}
			100% {
				transform: translateY(100%);
				opacity: 0;
			}
		}

`

export default Carousel;
