import { useState, useEffect, useRef } from 'react'
import FOG from 'vanta/src/vanta.fog'
import { BackgroundContainer, Container, Input, Text } from './styled.js'
import { connect } from 'react-redux';
import { setLocalUser } from '../../utils/redux/actions.js'
import { useHistory } from 'react-router-dom'
import { useAlert } from 'react-alert';

const SignUp = ({ updateUser }) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const history = useHistory()
  const alert = useAlert();
  const RFC5322 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (email && password && confirmPassword && firstName && lastName && nickname) {
        if (RFC5322.test(email)) {
          if (password === confirmPassword) {
            updateUser({
              first_name: firstName,
              last_name: lastName,
              username: nickname,
              email,
              password,
              password_confirmation: confirmPassword
            })

            history.push('/')
          } else {
            alert.error('Password mismatch')
          }
        } else {
          alert.error('Email invalid type')
        }
      } else {
        alert.error('All inputs need to be answered')
      }
    }
  }

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(FOG({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0xffffff,
        midtoneColor: 0xffffff,
        lowlightColor: 0xffffff,
        baseColor: 0x0,
        blurFactor: 0.1
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <BackgroundContainer ref={myRef}>
      <Container onKeyPress={handleOnKeyPress}>
        <Text>
          FirstName:
        </Text>
        <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <Text>
          LastName:
        </Text>
        <Input value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <Text>
          Nickname:
        </Text>
        <Input value={nickname} onChange={(e) => setNickname(e.target.value)} />
        <Text>
          Email:
        </Text>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Text>
          Password:
        </Text>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Text>
          Confirm Your Password:
        </Text>
        <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </Container>
    </BackgroundContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => dispatch(setLocalUser(user)),
});
export default connect(null, mapDispatchToProps)(SignUp);
