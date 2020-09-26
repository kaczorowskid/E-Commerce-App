import styled from 'styled-components';
import { CartAdd } from '@styled-icons/boxicons-solid';
import { Heart } from '@styled-icons/boxicons-regular'

export const SizeContainer = styled.div`
    position: relative;
    width: 100%;
    height: 80px;
    top: -80px;
    background-color: #00000085;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;
`;

export const SizeItem = styled.span`
    margin: 0 10px 0 10px;
    font-weight: bold;
    color: white;
    font-size: 18px;
`;

export const Container = styled.div`
    width: 320px;
    height: 100%;
    margin: 50px 5px 50px 5px;

    &:hover {
        ${SizeContainer} {
            opacity: 1;
            transition: all 0.5s ease;
        }
    }
`;

export const Image = styled.img`

    width:100%;
    height:100%;
    object-fit: cover;
    overflow: hidden;
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 450px;
`;


export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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