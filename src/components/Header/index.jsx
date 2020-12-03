/**
 * This is header component show user login or sign up option
 */
import { HeaderContainer, LogoContainer, ButtonsContainer } from './styled'
import Logo from '../../assets/Logo/index.jsx'

const Header = () => {

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <ButtonsContainer>yes</ButtonsContainer>
    </HeaderContainer>
  )
}

export default Header
