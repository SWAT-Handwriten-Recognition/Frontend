import { useState, useEffect, useRef } from 'react';
import NET from 'vanta/src/vanta.net';
import { BackgroundContainer, Container, Input, Text } from './styled.js';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { signinUser } from '../../utils/redux/thunks.js';

const SignIn = ({ login }) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const alert = useAlert();
  const RFC5322 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (email && password) {
        if (RFC5322.test(email)) {
          login({ email, password });
          history.push('./app');
        } else {
          alert.error('email invalid');
        }
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
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xff0d5b,
          backgroundColor: 0x0,
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
  login: (user) => dispatch(signinUser(user)),
});
export default connect(null, mapDispatchToProps)(SignIn);
