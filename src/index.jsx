import { render } from 'react-dom'
import styled from 'styled-components'
import App from './components/App/index.jsx'

const root = document.getElementById('root')

const Greet = styled.div`
  color: red;
`

render(<Greet><App /></Greet>, root)
