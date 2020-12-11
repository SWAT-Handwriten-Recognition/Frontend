/**
 * Application
 */
import Header from '../../components/Header/index.jsx';
import { getSigns } from '../../utils/redux/thunks.js'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react';

const Application = ({ user, getSignatures }) => {

  const [isCompleted, setIsCompleted] = useState(false)

  const checkSignatures = () => getSignatures(user)

  useEffect(() => {
    checkSignatures()
    if (user?.status?.signatures?.length !== 0) {
      setIsCompleted(bool => bool = false)
    }
  }, [])

  console.log(isCompleted)

  return (
    <>
      <Header normal={true} />
      {isCompleted ? <h1>is completed</h1> : <h1>Is not completed</h1>}
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
