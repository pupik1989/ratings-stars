import React, { useState } from 'react'
import Score from '../components/Score'
import From from '../components/From'
import star from '../media/star.png'
import emptyStar from '../media/empty-star.png'
import styled from 'styled-components'
export default function Home() {
    const maxStarts = 40;
    const [useTotalScore, setUseTotalScore] = useState(0);
    const [useYourScore, setUseYourScore] = useState(0);


    return (
        <StyledRationg >

            <StyledInputs>
                <From maxStarts={maxStarts} useTotalScore={useTotalScore} setUseScore={setUseTotalScore} />
                <Score useTotalScore={useTotalScore} useYourScore={useYourScore} setUseYourScore={setUseYourScore} maxStarts={maxStarts} />
            </StyledInputs>

            <StyledStarBox>
                {[...Array(Number(useTotalScore) || 0)].map((_, index) => (
                    <StyledStar
                        src={index < useYourScore ? star : emptyStar} // Use filled or empty star based on index
                        alt="star"
                        key={index}
                    />
                ))}
            </StyledStarBox>
        </StyledRationg >
    )
}
const StyledInputs = styled.div`
display: flex;
width: 50%;
justify-content: space-around;
`;

const StyledStarBox = styled.div`
  background-color: #ececec;
  width: 100%;  
  max-width: 500px;  
  height: auto;  
  margin: 30px;
  padding: 20px;  
  box-sizing: border-box; 

  @media (max-width: 768px) {
    width: 90%;  
    height: 150px;  
  }

  @media (max-width: 480px) {
    width: 95%;  
    height: 120px;  
  }
`;

const StyledStar = styled.img`
width: 50px;
margin: 10px;
height: 50px;
`


const StyledRationg = styled.div`
display: flex;
flex-direction:column;
align-items: center;
`;