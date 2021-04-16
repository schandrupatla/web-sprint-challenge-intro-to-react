// Write your Character component here
import React from 'react';
import styled, { keyframes } from 'styled-components';

//Styled components

const kf = keyframes`
  100% {
    opacity: 1;
  }
`

const StyledComponent = styled.div`
  width: 90%;
  border: 15px solid black;
  padding: 10px;
  margin: 10px;
  background-color:black

`  

const StyledDiv = styled.div`
 display:flex;
 justify-content:space-between;
  width: 90%;
  border: 2px solid green;
  padding: 10px;
  margin: 5px;
  &:hover{
   background-color: ${pr => pr.theme.hoverColor};;
   transition: all 1s ease-in-out;
  
  }
    animation: ${kf} 1s ease-in-out forwards;

`   
const StyledP = styled.p`
color:${pr => pr.theme.primaryColor};
    font-size:1.5rem;
    font:italic bold  Georgia, serif;
    text-align: left;
   
  
`

const Character = props =>{
    const {dataArray} = props;
    
    return(
       <StyledComponent>                
            <StyledDiv>
                <StyledP>Name:{dataArray.name}</StyledP>
                <StyledP>Dob:{dataArray.birth_year}</StyledP>
                <StyledP>Gender:{dataArray.gender}</StyledP>      
            </StyledDiv>
         </StyledComponent>
     
    );
    

}

export default Character

   