import styled from 'styled-components';
import { device } from '../../components/devicesWidth.styled';

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
    width: 65%;
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 50% 50%;

    @media ${device.laptopL} {
        width: 80%;
    }
`;

export const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;