import React from 'react';
import * as NavbarStyled from './Navbar.styled';


const Navbar: React.FC = () => {
    return (
        <div>
            <NavbarStyled.Container>
                <NavbarStyled.LeftContainer>
                    <NavbarStyled.HamburgerButton>
                        <NavbarStyled.HamburgerMenu />
                    </NavbarStyled.HamburgerButton>
                    <NavbarStyled.InputContainer>
                        <NavbarStyled.InputSearch placeholder = "Szukaj" />
                        <NavbarStyled.MenuIconStyled />
                    </NavbarStyled.InputContainer>
                </NavbarStyled.LeftContainer>
                <NavbarStyled.CenterContainer>
                    <h2>RUBShop</h2>
                </NavbarStyled.CenterContainer>
                <NavbarStyled.RightContainer>
                    <NavbarStyled.ShoppingCart />
                    <NavbarStyled.UserCart />
                </NavbarStyled.RightContainer>
            </NavbarStyled.Container>
        </div>
    )
}

export default Navbar;

