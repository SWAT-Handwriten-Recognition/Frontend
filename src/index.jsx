import { render } from 'react-dom'
import styled from 'styled-components'

const root = document.getElementById('root')

const Greet = styled.h2`
  color: red;
`

render(<Greet>Works</Greet>, root)
