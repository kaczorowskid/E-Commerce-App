import React, { useState } from 'react';
import * as Styled from './Register.styled';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';

const Register: React.FC = () => {

    const [nameValue, setNameValue] = useState<string>('');
    const [surnameValue, setSurnameValue] = useState<string>('');
    const [emailValue, setEmailValue] = useState<string>('');
    const [passwordValue, setPasswordValue] = useState<string>('');

    const [errorNameValue, setErrorNameValue] = useState<boolean>(false);
    const [errorSurnameValue, setErrorSurnameValue] = useState<boolean>(false);
    const [errorEmailValue, setErrorEmailValue] = useState<boolean>(false);
    const [errorPasswordValue, setErrorPasswordValue] = useState<boolean>(false);

    const [isRegister, setRegister] = useState<string>('');

    const sendData = (name: string, surname: string, email: string, password: string) => {
        const nameRegExp: RegExp = new RegExp('^[A-Z][a-zA-Z]{1,20}$');
        const emailRegExp: RegExp = new RegExp('^[a-zA-Z0-9]+@[a-z]+(.pl|.com)$');
        const passwordRegExp: RegExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$");

        const nameErr: boolean = nameRegExp.test(name) ? false : true
        const surnameErr: boolean = nameRegExp.test(surname) ? false : true;
        const emailErr: boolean = emailRegExp.test(email) ? false : true;
        const passErr: boolean = passwordRegExp.test(password) ? false : true;

        setErrorNameValue(nameErr);
        setErrorSurnameValue(surnameErr);
        setErrorEmailValue(emailErr);
        setErrorPasswordValue(passErr);

        if(nameErr || surnameErr || emailErr || passErr) return;
        else {
            axios.post('/user/register', {
                name, 
                surname,
                email,
                password
            }).then(res => setRegister(res.data.msg))
            .catch(res => setRegister(res.response.data.msg))
        }
    }


    return (
        <div>
            <Navbar />
            <Styled.Container>
                <h1>Zarejestruj się</h1>
                <Styled.FormContainer>
                    <Styled.InputData error={errorNameValue} onChange={e => setNameValue(e.target.value)} placeholder="Imie" />
                        {errorNameValue ? <Styled.ErrorInfo>Imie musi zaczynać się wielką literą</Styled.ErrorInfo> : null}
                    <Styled.InputData error={errorSurnameValue} onChange={e => setSurnameValue(e.target.value)} placeholder="Nazwisko" />
                        {errorSurnameValue ? <Styled.ErrorInfo >Nazwisko musi zaczynać się wielką literą</Styled.ErrorInfo> : null}
                    <Styled.InputData error={errorEmailValue} onChange={e => setEmailValue(e.target.value)} placeholder="E-mail" />
                        {errorEmailValue ? <Styled.ErrorInfo >E-mail ma zly format</Styled.ErrorInfo> : null}
                    <Styled.InputData error={errorPasswordValue} onChange={e => setPasswordValue(e.target.value)} placeholder="Hasło" />
                        {errorPasswordValue ? <Styled.ErrorInfo >Wymagana duża litera, liczba, znak specjalny</Styled.ErrorInfo> : null}
                    <Styled.RegistryButton onClick={() => sendData(nameValue, surnameValue, emailValue, passwordValue)} >Zarejestruj się</Styled.RegistryButton>
                </Styled.FormContainer>
                {`${isRegister}`}
            </Styled.Container>
            <Footer />
        </div>
    )
}

export default Register;