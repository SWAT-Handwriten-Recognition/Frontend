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
  background-color: white;
  box-shadow: inset 0 0 30px 0px rgba(255, 0, 0, .5);
  height: 80%;
  margin: auto;
  width: 80%;

  &:hover{
    box-shadow: inset 0 0 30px 0px rgba(0, 0, 255, .5);
    transition: 2s;
  }
`;

export const Feature1 = styled(BaseFeatures)`
`;

export const Feature2 = styled(BaseFeatures)`
`;

export const Feature3 = styled(BaseFeatures)`
`;

export const Feature4 = styled(BaseFeatures)`
`;
