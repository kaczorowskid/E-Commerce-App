import styled from 'styled-components';
import { CartAdd } from '@styled-icons/boxicons-solid';
import { Heart } from '@styled-icons/boxicons-regular'

export const Container = styled.div`
    width: 200px;
    height: 350px;
    /* background-color: #F8F9FB; */
    margin: 50px 5px 50px 5px;
    /* border: 1px solid #b3b3b3; */
`;

export const ImageContainer = styled.img`
    width: 200px;
    height: 270px;
`;

export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 80px;
    width: 200px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InfoTitle = styled.span`
    font-weight: bold;
    text-align: center;
`;

export const InfoPrice = styled.span`
    color: green;
`;

export const InfoPricePromotion = styled.span`
    color: red;
    text-decoration: line-through;
`;

export const CartAddIcon = styled(CartAdd)`
    width: 30xp;
    height: 30px;
`;

export const HeartIcon = styled(Heart)`
    width: 30xp;
    height: 30px;
`;