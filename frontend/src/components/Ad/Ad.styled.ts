import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 350px;
    /* position: relative; */
`;

export const Image = styled.div<{source: string}>`

    background-image: url(${props => props.source});
    width: 100vw;
    height: 350px;
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover; 
`;