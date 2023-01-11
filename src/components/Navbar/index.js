import React, { useRef, useState} from 'react'; 
import { FaBars, FaTimes } from 'react-icons/fa';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBarExtendedContainer,
  NavBarInnerContainer,
  NavBtn,
  NavBtnLink,
  NavLeft,
  NavRight,
  Logo,
  OpenLinkButton,
  NavbarLinkContainer,
  NavbarLinkExtended,
  

} from './NavbarElements';
import LogoImg from "../../assets/logo.png";

function Navbar(){
 
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    
     
      <Nav  extendNavbar={extendNavbar}>
        <NavBarInnerContainer>

        <NavLeft>
        <Logo src={LogoImg}></Logo>
        
        
        </NavLeft>

        <NavMenu>
        <NavbarLinkContainer>
        <NavLink to='/Home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/Publish' activeStyle>
            Publish
          </NavLink>
          <NavLink to='/Help' activeStyle>
            Help
          </NavLink>
          <OpenLinkButton onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
              >
                {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
              </OpenLinkButton>
              </NavbarLinkContainer>
        </NavMenu>

       <NavRight>
       <NavLink to='/Profile' activeStyle>
            Profile
          </NavLink>
       </NavRight>
       

        </NavBarInnerContainer>

        {extendNavbar && (
        <NavBarExtendedContainer>
          <NavbarLinkExtended to="/Home"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/Publish"> Publish</NavbarLinkExtended>
          <NavbarLinkExtended to="/Help"> Help</NavbarLinkExtended>
          <NavbarLinkExtended to="/Profile"> Profile</NavbarLinkExtended>
          </NavBarExtendedContainer>
         )}
     
    
          </Nav>
 
     
        
          
  );
}
  
export default Navbar;