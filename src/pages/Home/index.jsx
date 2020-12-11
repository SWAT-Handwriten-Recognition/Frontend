import Header from '../../components/Header/index.jsx';
import HomeAnimation from '../../components/HomeAnimation/index.jsx';
import Features from '../../components/Features/index.jsx';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../utils/redux/thunks.js';
import { resetUser } from '../../utils/redux/actions.js';
import { useAlert } from 'react-alert';

const Home = ({ localUser, register, user, reset }) => {
  const [scroll, setScroll] = useState(0);
  const alert = useAlert();

  useEffect(() => {
    localUser && register(localUser);
  }, []);

  useEffect(() => {
    if (user) {
      if (Object.keys(user).length === 4) {
        alert.success('successfully registered user, you can sign in');
        reset();
      } else {
        reset();
      }
    }
  }, [user]);

  return (
    <>
      <Header scroll={scroll} />
      <HomeAnimation setScroll={setScroll} />
      <Features scroll={scroll} />
    </>
  );
};

const mapStateToProps = (state) => ({
  localUser: state.localUser,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  register: (data) => dispatch(registerUser(data)),
  reset: () => dispatch(resetUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
