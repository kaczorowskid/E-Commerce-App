import styled from 'styled-components';

export const Container = styled.div`
    width: 320px;
    height: 200px;
    background-color: black;
    opacity: 0.8;

    position: fixed;
    top: 120px;
    left: calc(100% - 400px);
    z-index: 1;
`;

export const UserPopupItem = styled.button`
    width: 100%;
    height: 40px;
    color: white;
    border: none;
    background: none;
    font-size: 15px;
    text-align: start;
    margin: 10px 0 0 10px;
`;