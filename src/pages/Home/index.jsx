import Header from '../../components/Header/index.jsx'
import HomeAnimation from '../../components/HomeAnimation/index.jsx'
import Features from '../../components/Features/index.jsx'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { registerUser } from '../../utils/redux/thunks.js'
import { setLocalUser } from '../../utils/redux/actions.js'
import { useAlert } from 'react-alert';

const Home = ({ localUser, register, user }) => {
  const [scroll, setScroll] = useState(0)
  const alert = useAlert();

  console.log(user)

  useEffect(() => {
    localUser && register(localUser)
  }, [])

  useEffect(() => {
    if (user?.username[0] !== 'This field must be unique.') {
      if (user?.email[0] !== 'This field must be unique.') {
        if (user?.password[0] !== 'Ensure this field has at least 8 characters.') {
          console.log('heart')
        } else {
          alert.error('Ensure this field has at least 8 characters, try again')
        }
      } else {
        alert.error('email not available, try again')
      }
    } else {
      alert.error('username not available, try again')
    }
  }, [user])

  return (
    <>
      <Header scroll={scroll} />
      <HomeAnimation setScroll={setScroll} />
      <Features scroll={scroll} />
    </>
  )
}

const mapStateToProps = (state) => ({
  localUser: state.localUser,
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  register: (data) => dispatch(registerUser(data)),
  reset: (data) => dispatch(setLocalUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
