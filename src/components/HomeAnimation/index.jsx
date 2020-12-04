/**
 * Home dots animation
 */
import { useState, useEffect, useRef } from 'react'
import DOTS from 'vanta/src/vanta.dots'
import { BackgroundContainer } from './styled'

const HomeAnimation = () => {
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

  return (
    <BackgroundContainer ref={myRef}/>
  )
}

export default HomeAnimation;
