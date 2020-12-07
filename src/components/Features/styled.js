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
  color: white;
`;

export const TextContainer = styled.div`
  align-items: center;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  justify-content: center;
  padding: 1rem;
`;

export const Gif = styled.video`
  background-image: url(${(props) => props.src});
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const GifContainer = styled.div`
  height: 100%;
`;
