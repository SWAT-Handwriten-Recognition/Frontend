import Header from '../../components/Header/index.jsx'
import HomeAnimation from '../../components/HomeAnimation/index.jsx'
import Features from '../../components/Features/index.jsx'
import { useState } from 'react'

const Home = () => {
  const [scroll, setScroll] = useState(0)

  return (
    <>
      <Header scroll={scroll}/>
      <HomeAnimation setScroll={setScroll} />
      <Features scroll={scroll} />
    </>
  )
}

export default Home
