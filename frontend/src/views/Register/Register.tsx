import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import * as Styled from './Register.styled';

const Register: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Styled.Container>
                <h1>Zarejestruj się</h1>
                <Styled.FormContainer>
                    <Styled.InputData placeholder="Imie" />
                    <Styled.InputData placeholder="Nazwisko" />
                    <Styled.InputData placeholder="E-mail" />
                    <Styled.InputData placeholder="Hasło" />
                    <Styled.RegistryButton>Zarejestruj się</Styled.RegistryButton>
                </Styled.FormContainer>
            </Styled.Container>
        </div>
    )
}

export default Register;