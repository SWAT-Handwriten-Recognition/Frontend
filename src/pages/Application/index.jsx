/**
 * Application
 */
import Header from '../../components/Header/index.jsx';
import { getSigns } from '../../utils/redux/thunks.js'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react';
import { ImageInput, ImageInputContainer, ImageName } from './styled.js'
import { useAlert } from 'react-alert'

const Application = ({ user, getSignatures }) => {

  const [isCompleted, setIsCompleted] = useState(false)
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)
  const types = ['image/png', 'image/jpeg']
  const alert = useAlert();

  const checkSignatures = () => getSignatures(user)

  const changeHandler = (e) => {
    const selected = e?.target?.files[0]

    if (selected && types.includes(selected?.type)) {
      setFile(selected)
    } else {
      setFile(null)
      setError('Please select an image file (png or jpeg)')
    }
  }

  useEffect(() => {
    checkSignatures()
    if (user?.status?.signatures?.length !== 0) {
      setIsCompleted(bool => bool = false)
    }
  }, [])

  useEffect(() => {
    if (error) {
      alert.error(error)
      setError(null)
    }
  }, [error])

  console.log(file)

  return (
    <>
      <Header normal={true} />
      {isCompleted ? <h1>is completed</h1> :
        <ImageInputContainer>
          <ImageInput type="file" onChange={changeHandler} />
          <ImageName>{file?.name}</ImageName>
        </ImageInputContainer>
      }
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getSignatures: (data) => dispatch(getSigns(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Application);
