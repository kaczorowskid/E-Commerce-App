import styled from 'styled-components';
import { size, device } from '../../components/devicesWidth.styled';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const StickyNavbarContainer = styled.nav`
    position: sticky;
    top: 0px;
`;

export const ItemsContainer = styled.div`
    width: 75%;
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: 50% 50%;

    @media (max-width: ${size.laptopL}) {
        width: 100%;
    }

    @media (min-width: ${size.mobileS}) and (max-width: ${size.tablet}) {
        grid-template-columns: 100%;
        grid-template-rows: 16% 16% 16% 16% 16% 16%;
    }

    @media (min-width: ${size.mobileL}) and (max-width: ${size.tablet}){
        grid-template-columns: 50% 50%;
        grid-template-rows: 33% 33% 33%;
    }
`;

export const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;