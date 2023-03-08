import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import ProjectItem from './ProjectItem';

const Project = () => {
    const [projectData, setProjectData] = useState([]);
    useEffect(() => {
        async function projectFetch() {
            const resp = await fetch('/data/projectdata.json');
            const data = await resp.json();
            setProjectData(data)
        }
        projectFetch()
    }, [])
    return (
        <Wrapper className='container' id='project'>
            <h1>Projects</h1>
            <div className="project">
                <ProjectItem project={projectData} />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`

    .project{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    

`

export default Project;
