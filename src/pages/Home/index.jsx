import Header from '../../components/Header/index.jsx'
import HomeAnimation from '../../components/HomeAnimation/index.jsx'
import Features from '../../components/Features/index.jsx'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { registerUser } from '../../utils/redux/thunks.js'
import { setLocalUser } from '../../utils/redux/actions.js'

const Home = ({ localUser, register, reset }) => {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    localUser && register(localUser)
  }, [localUser])

  return (
    <>
      <Header scroll={scroll} />
      <HomeAnimation setScroll={setScroll} />
      <Features scroll={scroll} />
    </>
  )
}

const mapStateToProps = (state) => ({
  localUser: state.localUser
});

const mapDispatchToProps = (dispatch) => ({
  register: (data) => dispatch(registerUser(data)),
  reset: (data) => dispatch(setLocalUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
