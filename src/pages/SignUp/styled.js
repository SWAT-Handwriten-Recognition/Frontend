import styled, { keyframes } from 'styled-components';

export const BackgroundContainer = styled.div`
  align-items: center;
  display: flex;
  min-height: 100vh;
  justify-content: center;
`;
const Animation = keyframes`
0% {
    -webkit-transform: translateY(-500px);
            transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
            transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
            transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
`;

export const Container = styled.div`
  animation-name: ${Animation};
  animation-duration: 2s;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 50%;
  width: 70%;

  @media (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
    width: 80%;
  }
`;

export const Input = styled.input`
  border-width: 0px;
  border-style: hidden;
  border-radius: 16px;
  box-shadow: 0px 0px 5px rgba(66, 66, 66, 0.75);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  padding: 10px;
  margin: .5rem 0;
  font-size: 2rem;
  text-shadow: 0px 0px 5px rgba(66, 66, 66, 0.75);
  width: 80%;

  &:focus {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 0px 2px red;
    color: black;
  }

  @media (max-width: 320px) {
    width: 100%;
  }
`;

export const Text = styled.h4`
  color: white;
  font-size: 2rem;
  text-shadow: 0 0 18px rgba(0, 0, 0, 0.35);
  padding: 1rem;
`;
