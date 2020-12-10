import { useState, useEffect, useRef } from 'react';
import NET from 'vanta/src/vanta.net';
import { BackgroundContainer, Container, Input, Text } from './styled.js';
import { connect } from 'react-redux';
import { setLocalUser } from '../../utils/redux/actions.js';
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';

const SignUp = ({ updateUser }) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const alert = useAlert();

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (email && password) {
      } else {
        alert.error('all fields must be filled');
      }
    }
  };

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xff0d5b,
          backgroundColor: 0x0
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <BackgroundContainer ref={myRef}>
      <Container onKeyPress={handleOnKeyPress}>
        <Text>Email:</Text>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Text>Password:</Text>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Container>
    </BackgroundContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateUser: (user) => dispatch(setLocalUser(user)),
});
export default connect(null, mapDispatchToProps)(SignUp);
