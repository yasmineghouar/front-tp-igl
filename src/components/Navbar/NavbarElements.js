import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
width: 100%;
background: #1B1825; {/* bleu nuit*/}
/*height: 85px;*/
height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
display: flex;
flex-direction: column;

@media (min-width: 700px) {
    height: 85px;
  }

`;

export const NavLink = styled(Link)`
color: #FFFFFF;/*808080*/
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
@media (max-width: 700px) {
    display: none;
  }
&.active {
	color: #F4D303; /*jaune une fois cliqué*/
}
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;
export const NavbarLinkExtended = styled(Link)`
  
   color: white; 
 
  text-decoration: none;
  margin: 10px;
 
  &.active {
	color: #F4D303; /*jaune une fois cliqué*/
}

`;
export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
	
}
`;

export const NavMenu = styled.div`
flex: 50%;
display: flex;
padding-left: 20%;
align-items: center;
column-gap: 25px; /*espace entre items*/
/*margin-right: -24px;*/
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
/*@media screen and (max-width: 700px) {*/
	/*display: none;*/
/*}*/
`;

export const NavLeft =styled.div`

flex: 20%;
display: flex;
flex-direction: row;
justify-content: flex-start;
padding-left: 50px;

`;
export const NavRight =styled.div`

flex: 30%;
display: flex;

flex-direction: row;
justify-content: flex-end;
padding-right: 50px;

`;
export const OpenLinkButton = styled.button`
  
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: #FFFFFF;
  font-size: 45px;
  cursor: pointer;
  
  @media (min-width: 700px) {
    display: none;
  }

  
`;
export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
font-size: 1.8rem;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;
export const NavCloseBtn = styled.nav`
position: absolute;
top: 2rem;
right: 2rem;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #808080;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}
`;
export const Logo= styled.img`

margin: 10px;
left: 0px;
max-width:180px;
height: auto;
padding-left:5%; /*decaler a gauche le logo*/
`;

export const NavBarInnerContainer = styled.div`
width: 100%;
height: 85px;
display: flex;
left: 5px;

`;

export const NavBarExtendedContainer = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`;
