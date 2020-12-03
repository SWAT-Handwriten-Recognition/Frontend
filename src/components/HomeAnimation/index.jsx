import { useState, useEffect, useRef } from 'react'
import DOTS from 'vanta/src/vanta.dots'

const HomeAnimation = () => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(DOTS({
        el: myRef.current
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div ref={myRef}>
      Foreground content goes here
    </div>
  )
}

export default HomeAnimation;
