import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100%;
    width: calc(60vw - 17px);
    flex-direction: column;
    align-items: center;
    z-index: 1000;
`;

export const Info = styled.span`
    font-size: 30px;
    font-weight: bold;
    margin-top: 20px;
    /* margin-bottom: 20px; */
`;

export const GridDataPersonality = styled.div`
    display: grid;
    margin-top: 50px;
    background-color: #e6e6e6;
    width: 100%;
    height: 28vh;
    grid-template-columns: 33% 34% 33%;
    grid-template-rows: 50% 50%;
`;

export const GridDataAdres = styled.div`
    display: grid;
    margin-top: 50px;
    background-color: #e6e6e6;
    width: 100%;
    height: 25vh;
    grid-template-columns: 33% 34% 33%;
    grid-template-rows: 100%;
`;

export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 20px;
`;

export const DataTitle = styled.span`
    color: gray;
`;

export const DataValue = styled.span`
    /* color: gray; */
`;

export const DataButton = styled.span`
    width: 100px;
    color: #49b788;
    cursor: pointer;
`;