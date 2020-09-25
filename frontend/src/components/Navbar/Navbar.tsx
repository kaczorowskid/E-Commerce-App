import React from 'react';
import * as NavbarStyled from './Navbar.styled';
import { connect, ConnectedProps } from 'react-redux';
import { toggleMenu } from '../../action/navbar/navbarAction';

interface linkDispatchProps {
    toggleMenu: () => Object
}

const mapDispatchToProps: linkDispatchProps = {
    toggleMenu
}

const connector = connect(null, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>;

const Navbar: React.FC<Props> = ({ toggleMenu }) => {
    return (
        <div>
            <NavbarStyled.Container>
                <NavbarStyled.LeftContainer>
                    <NavbarStyled.HamburgerButton onClick={() => toggleMenu()}>
                        <NavbarStyled.HamburgerMenu />
                    </NavbarStyled.HamburgerButton>
                    <NavbarStyled.InputContainer>
                        <NavbarStyled.InputSearch placeholder="Szukaj" />
                        <NavbarStyled.MenuIconStyled />
                    </NavbarStyled.InputContainer>
                </NavbarStyled.LeftContainer>
                <NavbarStyled.CenterContainer>
                    <h2>RUBShop</h2>
                </NavbarStyled.CenterContainer>
                <NavbarStyled.RightContainer>
                    <NavbarStyled.ShopingCardContainer>
                        <NavbarStyled.ShoppingCart />
                        <NavbarStyled.ShopingCardNum>6</NavbarStyled.ShopingCardNum>
                    </NavbarStyled.ShopingCardContainer>
                    <NavbarStyled.UserCart />
                </NavbarStyled.RightContainer>
            </NavbarStyled.Container>
        </div>
    )
}

export default connector(Navbar);

