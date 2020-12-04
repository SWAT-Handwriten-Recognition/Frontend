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
  font-size: 4rem;
  font-weight: 300;
  letter-spacing: 1rem;
`;
export const TitleContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 80%;
  width: 50%;
`;
