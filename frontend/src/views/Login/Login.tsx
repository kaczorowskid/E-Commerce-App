import React, { useEffect, useState } from 'react';
import * as Styled from './Login.styled';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import axios from 'axios';


const Login: React.FC = () => {

    const [emailValue, getEmailValue] = useState<string>('');
    const [passwordValue, getPasswordValue] = useState<string>('');
    const [loginVerification, getVerification] = useState<string>('');



    const sendData = (email: string, password: string) => {
        axios.post('/user/login', {
            email: email,
            password: password
        }).then(result =>  {
            console.log(result.headers['auth-token'])
            localStorage.setItem('token', result.headers['auth-token'])
            getVerification(result.data.msg)
        })
        .catch(err => {
            localStorage.removeItem('token');
            getVerification(err.response.data.msg)
        })
    }


    return (
        <div>
            <Navbar />
            <Styled.Container>
                <Styled.FormContainer>
                    <h1>Zaloguj się</h1>
                    <Styled.InputData placeholder="E-mail" onChange={e => getEmailValue(e.target.value)} />
                    <Styled.InputData placeholder="Hasło" onChange={e => getPasswordValue(e.target.value)} />
                    <Styled.ButtonsContainer>
                        <Styled.LoginButton onClick={() => sendData(emailValue, passwordValue)} >Zaloguj się</Styled.LoginButton>
                        <Link to={config.registerPath} >
                            <Styled.RegistryButton>Zarejestruj się</Styled.RegistryButton>
                        </Link>
                    </Styled.ButtonsContainer>
                </Styled.FormContainer>
                {loginVerification === '' ? null : <h4>{`${loginVerification}`}</h4>}
            </Styled.Container>
            <Footer />
        </div>
    )
}

export default Login;