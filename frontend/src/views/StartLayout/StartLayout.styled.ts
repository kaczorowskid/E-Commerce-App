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
    display: grid;

    @media (min-width: ${size.mobileL}) {
        width: 100%;
        grid-template-columns: 99%;
        grid-template-rows: 16% 16% 16% 16% 16% 16%;
    }

    @media (min-width: ${size.tablet}) {
        grid-template-columns: 50% 50%;
        grid-template-rows: 33% 33% 33%;
    }

    @media (min-width: ${size.laptop}) {
        width: 100%;
        grid-template-columns: 33% 33% 33%;
        grid-template-rows: 50% 50%;
    }

`;

export const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;