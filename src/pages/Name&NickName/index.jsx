/**
 * Home dots animation
 */
import { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/src/vanta.birds'
import { BackgroundContainer, Container, Input, Text } from './styled.js'

const NameAdnNickName = ({ setScroll }) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <BackgroundContainer ref={myRef}>
      <Container>
        <Text>
          Name:
        </Text>
        <Input />
        <Text>
          Nickname:
        </Text>
        <Input />
      </Container>
    </BackgroundContainer>
  )
}

export default NameAdnNickName;
