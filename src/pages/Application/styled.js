import styled from 'styled-components';

export const ImageInputContainer = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 1);
  display: flex;
  height: 80vh;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  width: 100vw;
  z-index: 100;
`;

export const Title = styled.h2`
  color: white;
`;

export const ImageInput = styled.input`
  border: 1px ridge white;
  padding: 1rem;
`;

export const ImageName = styled.div`
  color: white;
`;

export const Gif = styled.video`
  background-image: url(${(props) => props.src});
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const GifContainer = styled.div`
  align-items: center;
  display: flex;
  height: 80%;
  justify-content: center;

  @media (max-width: 320px) {
    height: 65%;
    width: 50%
  }

  @media (max-width: 425px) {
    height: 70%;
  }

  @media (max-width: 768px) {
    height: 60%;
  }
`;
