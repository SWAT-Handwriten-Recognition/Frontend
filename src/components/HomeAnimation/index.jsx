/**
 * Home dots animation
 */
import { useState, useEffect, useRef } from 'react'
import DOTS from 'vanta/src/vanta.dots'
import {
  BackgroundContainer,
  Title,
  TitleContainer,
  ScrollDown
} from './styled'

const HomeAnimation = ({ setScroll }) => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(DOTS({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: TextTrackCueList,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xffffff,
        color2: 0xffffff,
        backgroundColor: 0x0,
        size: 3.10
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  const handleMouseEvent = () => setScroll(value => !value)

  return (
    <BackgroundContainer ref={myRef}>
      <TitleContainer>
        <Title>DeepSign</Title>
      </TitleContainer>
      <ScrollDown onMouseOver={handleMouseEvent}>Scroll Down</ScrollDown>
    </BackgroundContainer>
  )
}

export default HomeAnimation;
