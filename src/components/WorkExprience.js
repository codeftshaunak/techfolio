import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import ExprienceItem from './ExprienceItem';

const WorkExprience = () => {
    const [workdata, setWorkdata] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const resp = await fetch('/data/WorkData.json');
            const json = await resp.json();
            setWorkdata(json)
        }
        fetchData();
    }, [])

    return (
        <Wrapper className='container'>
            <div className="title">
                <h1>Work Exprience</h1>
            </div>
            <ExprienceItem workdata={workdata} />
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

`

export default WorkExprience;
