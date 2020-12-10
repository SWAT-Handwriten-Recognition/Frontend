/**
 * This is header component show user login or sign up option
 */
import { HeaderContainer, LogoContainer, ButtonsContainer, Button } from './styled'
import { useHistory } from 'react-router-dom'
import Logo from '../../assets/Logo/index.jsx'

const Header = ({ scroll, normal }) => {
  const history = useHistory()

  const handleSignUp = () => history.push('/signup')

  const handleSignIn = () => history.push('/signin')

  return (
    <HeaderContainer normal={normal} scroll={scroll}>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <ButtonsContainer>
        <Button onClick={handleSignIn}>Sign In</Button>
        <Button onClick={handleSignUp}>Sign Up</Button>
      </ButtonsContainer>
    </HeaderContainer>
  )
}

export default Header
