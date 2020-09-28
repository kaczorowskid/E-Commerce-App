import styled from 'styled-components';
import { size } from '../../components/devicesWidth.styled';

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 240px);
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const FormContainer = styled.div`
    width: 370px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media  (max-width: ${size.mobileL}) {
        width: 100%;
    }
`;

export const InputData = styled.input`
    width: 95%;
    height: 35px;
    border: 2px solid black;
    margin: 10px 0;
    font-size: 14px;
    padding-left: 14px;

    &::placeholder {
        opacity: 1;
        font-weight: bold;
    }
`;

export const ButtonsContainer = styled.div`
    width: 100%;
    margin-top: 20px;
`;

export const LoginButton = styled.button`
    width: 50%;
    height: 40px;
    border: 2px solid black;
    background-color: black;
    color: white;
    font-size: 15px;
    font-weight: bold;
    /* margin-right: 1px; */
`;

export const RegistryButton = styled.button`
    width: 50%;
    height: 40px;
    border: 2px solid black;
    background-color: white;
    color: black;
    font-size: 15px;
    font-weight: bold;
    /* margin-left: 1px; */
`;