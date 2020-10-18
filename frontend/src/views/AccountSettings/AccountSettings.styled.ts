import styled from 'styled-components';

export const Container = styled.div`
    height: calc(100vh - 240px);
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const Item = styled.div`
    display: none;
`;

export const ItemContainer = styled.div<{value: number}>`
    height: 90%;
    width: 60vw;
    overflow: auto;

    & ${Item}:nth-child(${props => props.value}) {
        display: block;
    }
`;

export const OptionsWrapper = styled.div`
    height: 90%;
    width: 15vw;
    background-color: #e6e6e6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const OptionsItem = styled.span`
    margin: 7px;  
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0.75, 0.82, 0.165, 1);

    /* &:hover{
        color: red;
    } */
`;

export const OptionsContainer = styled.div<{value: number}>`
    display: flex;
    flex-direction: column;

    & ${OptionsItem}:nth-child(${props => props.value}) {
        color: #d5a2ff;
    }
`;

export const LogoutButton = styled.span`
    color: red;
    font-weight: bold;    
    letter-spacing: 4px;
    cursor: pointer;

    &:hover{
        color: #bf1f1f;
    }
`;
