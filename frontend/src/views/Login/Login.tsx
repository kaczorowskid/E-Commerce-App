import React, { useEffect, useState } from 'react';
import * as Styled from './Login.styled';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import { config } from '../../config';
import axios from 'axios';
import { useHistory } from "react-router-dom";


const Login: React.FC = () => {

    const [emailValue, setEmailValue] = useState<string>('');
    const [passwordValue, setPasswordValue] = useState<string>('');
    const [loginVerification, setVerification] = useState<string>('');
    const [isLogged, setLogged] = useState<boolean>(false);

    const history = useHistory();

    const sendData = (email: string, password: string) => {
        axios.post('/user/login', {
            email: email,
            password: password
        }).then(result =>  {
            console.log(result.headers['auth-token'])
            localStorage.setItem('token', result.headers['auth-token'])
            history.push(config.startSitePath);
        })
        .catch(err => {
            localStorage.removeItem('token');
            setVerification(err.response.data.msg)
        })
    }


    return (
        <div>
            <Navbar isLogged = {isLogged}/>
            <Styled.Container>
                <Styled.FormContainer>
                    <h1>Zaloguj się</h1>
                    <Styled.InputData placeholder="E-mail" onChange={e => setEmailValue(e.target.value)} />
                    <Styled.InputData placeholder="Hasło" onChange={e => setPasswordValue(e.target.value)} />
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