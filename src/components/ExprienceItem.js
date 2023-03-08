import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineLink } from 'react-icons/ai'

const ExprienceItem = ({ workdata }) => {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleSeeMoreClick = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(-1); // if already expanded, collapse it
        } else {
            setExpandedIndex(index);
        }
    };
    return (
        <Wrapper className='container'>
            <div className="job">
                {
                    workdata.map((data, index) => {
                        const { CompanyLogo, JobTitles, CompanyName, JobDescription, EndDate, JobType, JoinDate, Location, Responsibilities, Skills, Website } = data;
                        const join = new Date(JoinDate);
                        const end = new Date(EndDate);
                        const monthsDiff = (end.getFullYear() - join.getFullYear()) * 12 + (end.getMonth() - join.getMonth());
                        const shouldExpand = expandedIndex === index;

                        return <React.Fragment key={index}>
                            <div className='job__item'>
                                <div className="company__logo">
                                    <img src={CompanyLogo} alt="Logo" />
                                </div>

                                <div className="job__details">
                                    <h1 className="job__title">{JobTitles}</h1>
                                    <h2 className="company__name">{CompanyName}. <span className='job__type' style={{ color: "var(--cuteColor)" }}>{JobType}</span></h2>
                                    <h3 className="job__joinend">{JoinDate} - {EndDate} <span>{monthsDiff ? `(${monthsDiff} Months)` : ""}</span ></h3>
                                    <h3 className="job__location">{Location}</h3>
                                    <br />
                                    <div className="border__workexp">
                                        <div className="job__description">
                                            {shouldExpand
                                                ? <>{JobDescription.Description}
                                                    <ul>
                                                        <br />
                                                        <b>Responsibilities:</b>
                                                        {JobDescription.Responsibilities.map((responsibility, index) => (
                                                            <p key={index}>🤜🏻 {responsibility}</p>
                                                        ))}
                                                    </ul></>
                                                : JobDescription.Description.substring(0, 200)}
                                            {JobDescription.Description.length > 200 && (
                                                <span
                                                    className="see-more"
                                                    onClick={() => handleSeeMoreClick(index)}
                                                >
                                                    {shouldExpand ? <span>...Seeless</span> : <span>...See more</span>}
                                                </span>
                                            )}
                                        </div>
                                        <br />
                                        <div className="skills">
                                            <h4 className="skills">Skills:</h4>
                                            {
                                                Skills.map((data, i) => {
                                                    return <React.Fragment key={i}>
                                                        <p className="skill">-{data}</p>
                                                    </React.Fragment>
                                                })
                                            }
                                        </div>
                                        <br />
                                        <a href="#" className='company__website'>
                                            <AiOutlineLink />
                                            <span>{CompanyName}</span> <img src={CompanyLogo} alt="" />
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </React.Fragment>
                    })
                }

            </div>

        </Wrapper>
    )
}

const Wrapper = styled.section` 
    
    .job{
        display:flex;
        flex-direction: column;

        .job__item{
            padding: 2rem 0;
            display: flex;
        }

        .company__logo{
            padding-top: 0.4rem;
            width: 300px;
            border-radius: 50%;
            img{
                width: 100px;
                height: 100px;
                border-radius: 5px;
            }
        }

        .border__workexp{
            border-left: 1px solid var(--cuteColor);
            padding-left: 0.5rem;
        }


        .job__details{
            margin-left: 0.5rem;

            .job__title{
                font-size: 1.3rem;
                font-weight: 600;
            }
            .company__name{
                font-size: 1rem;
                font-weight: 400;
            }

            .job__joinend, .job__location{
                font-size: 0.9rem;
                font-weight: 100;
            }

            .job__description{
                font-size: 0.9rem;
                max-width: 1300px;
                .see-more{
                    font-size: 0.8rem;
                    padding-left: 0.3rem;
                    color: var(--thirdColorFont);
                    cursor: pointer;
                }
            }

            .skills{
                display: flex;
                flex-wrap: wrap;
                .skill{
                    padding-left: 0.4rem;
                    font-size: 0.9rem;
                }
            }

            .company__website{
                display: flex;
                align-items: center;
                text-decoration: none;
                color: var(--primaryColorFont)
                font-weight: 100;
                font-size: 1rem;  
                
                img{
                    width: 30px;
                    height: 30px;
                    object-fit: cover;
                    margin-left: 10px;
                }
            }


        }

    }

`

export default ExprienceItem;
