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
    width: 50%;
  }

  @media (max-width: 425px) {
    height: 70%;
  }

  @media (max-width: 768px) {
    height: 60%;
  }
`;

export const UploadButton = styled.button`
  box-shadow: 0px 10px 14px -7px #276873;
  background: ${(props) =>
    props.disabled ?
      'linear-gradient(to bottom, black 5%, white 100%)' :
      'linear-gradient(to bottom, #599bb3 5%, #408c99 100%)'};
  background-color: #599bb3;
  border-radius: 8px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 20px;
  font-weight: bold;
  padding: 13px 32px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #3d768a;
  margin-top: 1rem;

  &:hover {
    background: linear-gradient(to bottom, #408c99 5%, #599bb3 100%);
    background-color: #408c99;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
