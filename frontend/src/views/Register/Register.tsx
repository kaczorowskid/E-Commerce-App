import React, { useState, useEffect } from 'react';
import * as Styled from './Register.styled';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';

const Register: React.FC = () => {

    const [nameValue, setNameValue] = useState<string>('');
    const [surnameValue, setSurnameValue] = useState<string>('');
    const [emailValue, setEmailValue] = useState<string>('');
    const [passwordValue, setPasswordValue] = useState<string>('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState<string>('');

    const [errorNameValue, setErrorNameValue] = useState<boolean>(false);
    const [errorSurnameValue, setErrorSurnameValue] = useState<boolean>(false);
    const [errorEmailValue, setErrorEmailValue] = useState<boolean>(false);
    const [errorPasswordValue, setErrorPasswordValue] = useState<boolean>(false);
    const [confirmErrorPasswordValue, setConfirmErrorPasswordValue] = useState<boolean>(false);

    const [isRegister, setRegister] = useState<string>('');

    const daysOption: Array<number> = [];
    const months: Array<string> = ["Styczeń", "Luty", "Marzec", "Kwiecień", 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
    const yearOption: Array<number> = [];

    const [days, setDays] = useState<Array<number>>();
    const [years, setYears] = useState<Array<number>>();

    const [daysValue, setDaysValue] = useState<string>('1');
    const [monthsValue, setMonthsValue] = useState<string>('Styczeń');
    const [yearsValue, setYearsValue] = useState<string>('1970');

    const makeDays = () => {
        for(let d = 1; d <= 31; d++) {
            daysOption.push(d);
            setDays(daysOption)
        }

        for(let y = 1970; y <= 2020; y++) {
            yearOption.push(y);
            setYears(yearOption)
        }
    }

    useEffect(() => makeDays(), []);


    const sendData = (name: string, surname: string, email: string, password: string) => {
        const nameRegExp: RegExp = new RegExp('^[A-Z][a-zA-Z]{1,20}$');
        const emailRegExp: RegExp = new RegExp('^[a-zA-Z0-9]+@[a-z]+(.pl|.com)$');
        const passwordRegExp: RegExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$");

        const nameErr: boolean = nameRegExp.test(name) ? false : true
        const surnameErr: boolean = nameRegExp.test(surname) ? false : true;
        const emailErr: boolean = emailRegExp.test(email) ? false : true;
        const passErr: boolean = passwordRegExp.test(password) ? false : true;
        const confirmPassErr: boolean = passwordValue === confirmPasswordValue ? false : true;

        setErrorNameValue(nameErr);
        setErrorSurnameValue(surnameErr);
        setErrorEmailValue(emailErr);
        setErrorPasswordValue(passErr);
        setConfirmErrorPasswordValue(confirmPassErr);

        if (nameErr || surnameErr || emailErr || passErr || confirmPassErr) return;
        else {
            axios.post('/user/register', {
                name,
                surname,
                email,
                password,
                birthdate: `${yearsValue} ${monthsValue} ${daysValue}`
            })
                .then(res => setRegister(res.data.msg))
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
                    <Styled.InputData error={errorPasswordValue} onChange={e => setConfirmPasswordValue(e.target.value)} placeholder="Potwierdź Hasło" />
                    {confirmErrorPasswordValue ? <Styled.ErrorInfo >Hasła się nie zgadzają</Styled.ErrorInfo> : null}
                    <Styled.DateContainer>
                        <Styled.ItemSelect onChange = {e => setDaysValue(e.target.value)} >
                            {days && days.map(day => <Styled.ItemOption key = {day} value = {day + 1} > {day} </Styled.ItemOption> )}
                        </Styled.ItemSelect>
                        <Styled.ItemSelect onChange = {e => setMonthsValue(e.target.value)}>
                            {months.map((month, i) => <Styled.ItemOption key = {month} value = {i + 1}> {month} </Styled.ItemOption>)}
                        </Styled.ItemSelect>
                        <Styled.ItemSelect onChange = {e => setYearsValue(e.target.value)}>
                            {years && years.map(year => <Styled.ItemOption key = {year} value = {year}> {year} </Styled.ItemOption> )}
                        </Styled.ItemSelect>
                    </Styled.DateContainer>
                    <Styled.RegistryButton onClick={() => sendData(nameValue, surnameValue, emailValue, passwordValue)} >Zarejestruj się</Styled.RegistryButton>
                </Styled.FormContainer>
                {`${isRegister}`}
            </Styled.Container>
            <Footer />
        </div>
    )
}

export default Register;