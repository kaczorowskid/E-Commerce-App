import React from 'react';
import * as Styled from './Login.styled';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import { config } from '../../config';

const Login: React.FC = () => {
    return (
        <div>

            <Navbar />
            <Styled.Container>
                <Styled.FormContainer>
                    <h1>Zaloguj się</h1>
                    <Styled.InputData placeholder="E-mail" />
                    <Styled.InputData placeholder="Hasło" />
                    <Styled.ButtonsContainer>
                        <Styled.LoginButton>Zaloguj się</Styled.LoginButton>
                        <Link to = {config.registerPath} > 
                            <Styled.RegistryButton>Zarejestruj się</Styled.RegistryButton>
                        </Link>
                    </Styled.ButtonsContainer>
                </Styled.FormContainer>
            </Styled.Container>
            <Footer />
        </div>
    )
}

export default Login;