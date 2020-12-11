/**
 * Application
 */
import Header from '../../components/Header/index.jsx';
import { getSigns } from '../../utils/redux/thunks.js'
import { connect } from 'react-redux'
import { useEffect } from 'react';

const Application = ({ user, getSignatures }) => {

  console.log(user?.status?.username)

  const checkSignatures = () => {

    getSignatures(user)

  }

  return (
    <>
      <Header normal={true} />
      <h1>Im the app</h1>
      <button onClick={checkSignatures}>test</button>
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
