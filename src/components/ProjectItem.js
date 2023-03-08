import React from 'react'
import styled from 'styled-components';
import Carousel from './Carusel';

const ProjectItem = ({ project }) => {
    return <>
        {
            project.map((data, index) => {
                return <Wrapper key={index}>
                    <Carousel project={data} />
                </Wrapper>
            })
        }
    </>
}

const Wrapper = styled.section`
    margin: 0rem 1rem;
    padding: 1rem 0;
`

export default ProjectItem;
