import React, { useState } from 'react';
import * as NavbarStyled from './Navbar.styled';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import Menu from '../Menu/Menu';


const Navbar: React.FC = () => {

    const [menuVisible, setMenuVisible] = useState<boolean>(false);

    const isLogged = () => {
        return localStorage.getItem('token') ? true : false;
    }

    return (
        <div>
            <Menu visible={menuVisible} />
            <NavbarStyled.Container>
                <NavbarStyled.LeftContainer>
                    <NavbarStyled.HamburgerButton onClick={() => setMenuVisible(!menuVisible)} >
                        <NavbarStyled.HamburgerMenu />
                    </NavbarStyled.HamburgerButton>
                    <NavbarStyled.InputContainer>
                        <NavbarStyled.InputSearch placeholder="Szukaj" />
                        <NavbarStyled.MenuIconStyled />
                    </NavbarStyled.InputContainer>
                </NavbarStyled.LeftContainer>
                <NavbarStyled.CenterContainer>
                    <Link style={{ textDecoration: 'none' }} to={config.startSitePath}>
                        <NavbarStyled.Logo>RUBShop</NavbarStyled.Logo>
                    </Link>
                </NavbarStyled.CenterContainer>
                <NavbarStyled.RightContainer>
                    <NavbarStyled.ShopingCardContainer>
                        <NavbarStyled.ShoppingCart />
                        <NavbarStyled.ShopingCardNum>6</NavbarStyled.ShopingCardNum>
                    </NavbarStyled.ShopingCardContainer>
                    {!isLogged() ? (
                        <Link to={config.loginPath} >
                            <NavbarStyled.UserCart color = 'white'/>
                        </Link>
                    ) : (
                            <Link to={config.settings} >
                                <NavbarStyled.UserCart color = '#d5a2ff'/>
                            </Link>
                        )}
                </NavbarStyled.RightContainer>
            </NavbarStyled.Container>
        </div>
    )
}

export default Navbar;

