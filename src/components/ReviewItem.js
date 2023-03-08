import styled from "styled-components";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';


const ReviewItem = ({ reviews }) => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <Wrapper className="swiper-container">
            <div className="hire__upwork">
                <div className="hire__content">
                    <a href="https://www.upwork.com/freelancers/~010d6209cd08fc74cb" target="_blank">
                        <h1>Hire Me On Upwork</h1>
                        <img src="https://i.ibb.co/Y49Jw5Z/unnamed.png" alt="" />
                    </a>

                </div>
            </div>
            <div className="swiper-wrapper">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide>
                            <div className="swiper-slide" key={index}>
                                <div className="review">
                                    <div className="review-image">
                                        <img src={review.projectImage} alt="Project" />
                                    </div>
                                    <div className="review-title">
                                        <img src={review.clientImage} alt="" />
                                        <div className="review-text">
                                            <h5>{review.name}</h5>
                                            <p>
                                                {review.testomonial}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>
        </Wrapper>
    );
}


const Wrapper = styled.section`
    position: relative;
    height: 100%;
    background: #fff;
    font-size: 14px;
    color: var(--primaryColorBg);
    margin: 0;

  .hire__upwork{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;

    .hire__content{
        padding: 0.1rem 1rem;
        background-color: var(--primaryColorBg);
        border: 2px solid var(--cuteColor);
        
        a{
            text-decuration: none;
            color: var(--primaryColorFont);
            display: flex;
            justify-content: center;
            align-items: center;

            img{
                width: 50px;
                padding: 0.5rem;
                filter: brightness(90%);
            }
        }

        transition: 0.3s ease-in-out;

        &:hover{
            background-color: var(--primaryColorFont);
            border-color: var(--cuteColor);

        a {
        color: var(--secondaryColorFont);

        img {
            filter: brightness(100%);
        }
        }
        }
    }

}

  .swiper {
    width: 100%;
    height: 100%;
  }
  
  .swiper-slide {
    font-size: 18px;
    background: #fff;
  
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .autoplay-progress {
    position: absolute;
    right: 16px;
    bottom: 16px;
    z-index: 10;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: var(--swiper-theme-color);
  }
  
  .autoplay-progress svg {
    --progress: 0;
    position: absolute;
    left: 0;
    top: 0px;
    z-index: 10;
    width: 100%;
    height: 100%;
    stroke-width: 4px;
    stroke: var(--swiper-theme-color);
    fill: none;
    stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
    stroke-dasharray: 125.6;
    transform: rotate(-90deg);
}  

.swiper-container {
    width: 100%;
    height: 400px;
    background-color: #000;
    color: #fff;
  }
  
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .review {
    width: 80%;
    margin: 0 auto;

  }
  
  .review-title {
    margin: 20px 0;
    display: flex;
    align-items: center;
    border: 0.01rem solid var(--cuteColor);
    padding: 1rem;

    img{
        width: 50px;
        height: 50px;
        border-radius: 50px;
        border: 1px solid var(--cuteColor);
        margin-right: 0.5rem;

    }
  }
  
  .review-text {
    p{
        text-align: justify;
        font-size: 0.7rem;
        text-transform: capitalize;
    }
  }
  
  .review-rating {
    margin-bottom: 20px;
  }
  
  .review-rating i {
    font-size: 30px;
    margin-right: 5px;
    color: green;
  }
  
  .review-image {
    margin-bottom: 20px;
  }
  
  .review-image img {
    width: 500px;
    height: auto;
    display: block;
    margin: auto;
    object-fit: cover;
  }  
`

export default ReviewItem;
