import styled, { keyframes } from 'styled-components';

export const BackgroundContainer = styled.div`
  height: 80vh;
`;
const TrackingInExpand = keyframes`
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`;
export const Title = styled.h2`
  animation-name: ${TrackingInExpand};
  animation-duration: 1.5s;
  color: white;
  font-family: 'Homemade Apple', cursive;
  font-size: 4rem;
  font-weight: 300;
  letter-spacing: 1rem;

  @media (max-width: 1024px) {
    font-size: 3.5rem;
    font-weight: 300;
    letter-spacing: 0.5rem;
  }

  @media (max-width: 320px) {
    font-size: 2.5rem;
  }
`;
export const TitleContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 80%;
  width: 50%;

  @media (max-width: 768px) {
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    align-items: flex-start;
    width: 100%;
  }
`;
