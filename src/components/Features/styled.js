import styled from 'styled-components';

export const FeaturesContainer = styled.div`
  background: black;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  height: 100vh;
`;

const BaseFeatures = styled.div`
  background-image: linear-gradient(135deg, #fdfbfb 0%, #c3cfe2 100%);
  height: 80%;
  margin: auto;
  width: 80%;

  &:hover {
    transition: 2s;
  }
`;

export const Feature1 = styled(BaseFeatures)``;

export const Feature2 = styled(BaseFeatures)``;

export const Feature3 = styled(BaseFeatures)``;

export const Feature4 = styled(BaseFeatures)``;

export const Text = styled.h2`
  text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc,
    0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc,
    0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
`;

export const TextContainer = styled.div`
  align-items: center;
  display:flex;
  justify-content: center;
  padding: 1rem;
`
