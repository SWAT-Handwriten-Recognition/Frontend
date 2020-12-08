import { useState, useEffect, useRef } from 'react'
import FOG from 'vanta/src/vanta.fog'
import { BackgroundContainer, Container, Input, Text } from './styled.js'
import { connect } from 'react-redux';
import { setLocalUser } from '../../utils/redux/actions.js'
import { useHistory } from 'react-router-dom'
import { useAlert } from 'react-alert';

const NameAndNickName = ({ updateUser }) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [nickname, setNickname] = useState('')
  const history = useHistory()
  const alert = useAlert();

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (firstName && lastName && nickname) {
        updateUser({
          first_name: firstName,
          last_name: lastName,
          username: nickname
        })

        history.push('/signup/2')
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
      </Container>
    </BackgroundContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => dispatch(setLocalUser(user)),
});
export default connect(null, mapDispatchToProps)(NameAndNickName);
