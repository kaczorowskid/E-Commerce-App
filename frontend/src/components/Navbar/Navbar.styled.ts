import styled from 'styled-components';
import { Search } from '@styled-icons/boxicons-regular';
import { Menu } from '@styled-icons/boxicons-regular'
import { ShoppingCartOutline } from '@styled-icons/evaicons-outline'
import { User } from '@styled-icons/boxicons-regular'
import { size, device } from '../devicesWidth.styled';

export const Container = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    background-color: black;
    z-index: 10;

    @media (max-width: ${size.mobileM}) and 
    (max-width: ${size.mobileL}),
    (max-width: ${size.tablet}) {
        flex-direction: column-reverse;
        height: 150px;
    }
`;

export const LeftContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    margin-left: 100px;

    @media ${device.laptop} {
        margin-left: 0px;
    }

    @media ${device.mobileL},
    (max-width: ${size.tablet}) {
        width: 100%;
        margin: 20px 0 20px 0;
    }
`;
export const HamburgerButton = styled.button`
    background: none;
    border: none;
    margin: 0 10px 0 20px;
`;

export const HamburgerMenu = styled(Menu)`
    width: 35px;
    height: 35px;
    color: white;
`;

export const InputContainer = styled.div`
    border: 1px solid white;
    border-left: none;
    border-top: none;
    border-right: none;
    margin-left: 5px;
`;

export const InputSearch = styled.input`
    height: 30px;
    width: 70px;
    font-size: 16px;
    padding-left: 10px;
    border: none;
    background: none;
    color: white;
    transition: all 0.5s ease;

    &:focus {
        width: 185px;
        transition: all 0.5s ease;
    }

    &::placeholder {
        opacity: 1;
    }
`;

export const MenuIconStyled = styled(Search)`
    color: white;
    width: 35px;
    height: 35px;
`;

export const CenterContainer = styled.div`
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    @media (max-width: ${size.mobileM}) and 
    (max-width: ${size.mobileL}),
    (max-width: ${size.tablet}) {
        position: absolute;
        top: 0px;
        left: 10px;
    }
`;

export const Logo = styled.span`
    color: white;
    font-size: 30px;
    font-weight: bold;
    text-decoration: none;
`;

export const RightContainer = styled.div`
    width:50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 100px;

    @media ${device.laptop} {
        margin-right: 0px;
    }

    @media (max-width: ${size.mobileM}) and 
    (max-width: ${size.mobileL}),
    (max-width: ${size.tablet}){
        width: 100%;
        margin: 20px 0 20px 0;
    }
`;

export const ShopingCardContainer = styled.div`

`;

export const ShopingCardNum = styled.span`
    position: relative;
    background-color: #d5a2ff;
    top: -15px;
    left: -30px;
    color: black;
    width: 25px;
    height: 25px;
    font-weight: bold;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`;

export const ShoppingCart = styled(ShoppingCartOutline)`
    width: 35px;
    height: 35px;
    margin: 0 20px 0 20px;
    color: white;
`;

export const UserCart = styled(User)<{color: string}>`
    width: 35px;
    height: 35px;
    margin: 0 25px 0 20px;
    color: ${props => props.color};
`;