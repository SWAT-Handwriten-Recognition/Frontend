import styled from 'styled-components'

export const HeaderContainer = styled.header`
  align-items: center;
  background-color: black;
  display: flex;
  height: 20vh;
  justify-content: space-between  
`
export const LogoContainer = styled.div`

`
export const ButtonsContainer = styled.div`

`
export const Button = styled.button`
	box-shadow: 3px 4px 0px 0px rgba(255, 255, 255, 5);
	background:linear-gradient(to bottom, rgba(255, 255, 255, 0) 5%, rgba(255, 255, 255, 1) 100%);
	background-color: whitesmoke;
	border-radius:18px;
	border:1px solid black;
	display:inline-block;
	cursor:pointer;
	color:black;
	font-family:Arial;
	font-size:17px;
	padding:7px 25px;
	text-decoration:none;

&:hover {
	background:linear-gradient(to bottom, rgba(255, 255, 255, 1) 5%, rgba(0, 0, 0, 1) 100%);
  box-shadow: 3px 4px 0px 0px rgba(255, 255, 255, .1);
	color: whitesmoke;
}
&:active {
	position:relative;
	top:1px;
}

`
