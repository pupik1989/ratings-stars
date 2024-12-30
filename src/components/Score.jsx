import React from 'react'
import Options from './Options';
import styled from 'styled-components'


export default function Score({ setUseYourScore, maxStarts, useYourScore, useTotalScore }) {



    const updateData = (e) => {
        setUseYourScore(Number(e.target.value));
    }
    return (
        <StyledDiv>
            <h3>Your Rate: {useYourScore}</h3>
            <StyledSelect value={useYourScore} onChange={updateData}>
                {Array.from({ length: useTotalScore }).map((_, index) => (
                    <Options val={index + 1} key={index + 1} />
                ))}
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


