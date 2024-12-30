import React from 'react'
import Options from './Options';
import styled from 'styled-components'

export default function From({ maxStarts, useTotalScore, setUseScore }) {

    const hanfleUpdated = (e) => {
        setUseScore(e.target.value)
    }
    return (
        <StyledDiv>
            <h3>Total: {useTotalScore}</h3>
            <StyledSelect value={useTotalScore} onChange={hanfleUpdated} >
                {Array.from(Array(maxStarts).keys()).map(s => <Options val={s + 1} key={s} />)}
            </StyledSelect>
        </StyledDiv>
    )
}


const StyledDiv = styled.div`
background-color: #edeae2;
padding: 10px 5px;
`;

const StyledSelect = styled.select`
width: 100%;
padding: 5px 1px;
`;
