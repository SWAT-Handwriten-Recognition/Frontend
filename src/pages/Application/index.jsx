/**
 * Application
 */
import Header from '../../components/Header/index.jsx';
import { getSigns, uploadSignature } from '../../utils/redux/thunks.js';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  ImageInput,
  ImageInputContainer,
  ImageName,
  Title,
  Gif,
  GifContainer,
  UploadButton,
  ImageInputContainer2,
  ImageInput2,
} from './styled.js';
import { useAlert } from 'react-alert';
import upload1 from '../../assets/Gif/upload1.gif';
import upload2 from '../../assets/Gif/upload2.gif';
import confirm from '../../assets/Gif/confirmApplication.gif';

const Application = ({ user, getSignatures, upload }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [isConfirm, setIsConfirm] = useState(false);
  const types = ['image/png', 'image/jpeg'];
  const alert = useAlert();

  const checkSignatures = () => getSignatures(user);

  const changeHandler = (e) => {
    const selected = e?.target?.files[0];

    if (selected && types.includes(selected?.type)) {
      setFile(selected);
    } else {
      setFile(null);
      setError('Please select an image file (png or jpeg)');
    }
  };

  const handleOnclick = async () => {
    await upload({
      token: user?.token,
      file,
      username: user?.status?.username,
    });
  };

  useEffect(() => {
    checkSignatures();
    if (user?.status?.signatures?.length !== 0) {
      setIsCompleted((bool) => (bool = false));
    }
  }, []);

  useEffect(() => {
    if (error) {
      alert.error(error);
      setError(null);
    }
  }, [error]);

  return (
    <>
      <Header normal={true} />
      {isCompleted ? (
        <ImageInputContainer2>
          <Title>Check your sign</Title>
          <GifContainer>
            <Gif src={confirm} />
          </GifContainer>
          <ImageInput2 type="file" onChange={changeHandler} />
          <ImageName>{file?.name}</ImageName>
        </ImageInputContainer2>
      ) : isConfirm ? (
        <ImageInputContainer>
          <Title white={true}>Please confirm your sign</Title>
          <GifContainer>
            <Gif src={upload2} />
          </GifContainer>
          <ImageInput type="file" onChange={changeHandler} />
          <ImageName>{file?.name}</ImageName>
          <UploadButton
            disabled={file === null}
            onClick={() => {
              handleOnclick();
              setIsCompleted((bool) => (bool = true));
            }}
          >
            Confirm
          </UploadButton>
        </ImageInputContainer>
      ) : (
        <ImageInputContainer>
          <Title white={true}>Please upload your sign</Title>
          <GifContainer>
            <Gif src={upload1} />
          </GifContainer>
          <ImageInput type="file" onChange={changeHandler} />
          <ImageName>{file?.name}</ImageName>
          <UploadButton
            disabled={file === null}
            onClick={() => {
              handleOnclick();
              setIsConfirm((bool) => (bool = true));
            }}
          >
            Upload
          </UploadButton>
        </ImageInputContainer>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getSignatures: (data) => dispatch(getSigns(data)),
  upload: ({ token, file, username }) =>
    dispatch(uploadSignature({ token, file, username })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Application);
