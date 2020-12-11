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

export const ImageInput = styled.input`
  border: 1px ridge white;
  padding: 1rem;
`;

export const ImageName = styled.div`
  color: white;
`;
