import styled, { keyframes } from 'styled-components';

export const BackgroundContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;
const Animation = keyframes`
  0% {
    -webkit-transform: rotateY(30deg) translateY(-300px) skewY(-30deg);
            transform: rotateY(30deg) translateY(-300px) skewY(-30deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0deg) translateY(0) skewY(0deg);
            transform: rotateY(0deg) translateY(0) skewY(0deg);
    opacity: 1;
  }
`;

export const Container = styled.div`
  animation-name: ${Animation};
  animation-duration: 2s;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50%;
  width: 50%;

  @media (max-width: 425px) {
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
