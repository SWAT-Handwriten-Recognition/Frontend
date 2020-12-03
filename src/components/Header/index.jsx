/**
 * This is header component show user login or sign up option
 */
import { HeaderContainer, LogoContainer, ButtonsContainer, Button } from './styled'
import Logo from '../../assets/Logo/index.jsx'

const Header = () => {

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <ButtonsContainer>
        <Button>Sign in</Button>
        <Button>Sign up</Button>
      </ButtonsContainer>
    </HeaderContainer>
  )
}

export default Header
