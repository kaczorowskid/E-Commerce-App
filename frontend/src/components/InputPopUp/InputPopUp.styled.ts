import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: #797979ba;
    width: 100%;
    height: 100%;
`;

export const InpuPopUpContainer = styled.div<{size: string}>`
    width: 400px;
    height: ${props => props.size === 'big' ? '320px' : '150px'};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    background-color: #717171;
    align-items: center;
    justify-content: space-evenly;
`;

export const Info = styled.span`
    font-weight: bold;
    color: white;
`;

export const InputDataContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const InputData = styled.input`
    width: 80%;
    height: 30px;
    border: 3px solid #717171;
    
    &:hover {
        border: 3px solid black;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 40px;
`;

export const InputDataButton = styled.button`
    width: 40%;
    background: none;
    border: 2px solid black;

    &:hover {
        background-color: gray;
    }
`;
