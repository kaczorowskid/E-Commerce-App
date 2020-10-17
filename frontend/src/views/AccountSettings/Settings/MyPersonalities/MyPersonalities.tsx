import React, { useState, useEffect } from 'react';
import * as Styled from './MyPersonalities.styled'
import InputPopUp from '../../../../components/InputPopUp/InputPopUp';
import { IUserData } from '../../../../types/myPersonalities.types';
import axios from 'axios';
import { config } from '../../../../config';

const MyPersonalities: React.FC = () => {

    const [nameVisible, changeNameVisible] = useState<boolean>(false);
    const [numberVisible, changeNumberVisible] = useState<boolean>(false);
    const [myAddressVisible, changeMyAddressVisible] = useState<boolean>(false);
    const [shippingAddressVisible, changeShippingAddressVisible] = useState<boolean>(false);

    const [userData, setUserData] = useState<IUserData>();

    useEffect(() => {
        axios.get(`${config.backendUrl}/user/get-user`,  {
            headers: {'auth-token': localStorage.getItem('token')}
        })
            .then(res => setUserData(res.data))
            .catch(err => console.log(err));
    }, [])


    const {
        email, 
        name, 
        role, 
        telefonnumber, 
        birthdate, 
        createaccount, 
        myaddressstreet, 
        myaddresspostcode,
        myaddressvoivodeship, 
        myaddresscountry,
        shippingaddressname,
        shippingaddressstreet,
        shippingaddresspostcode,
        shippingaddressvoivodeship,
        shippingaddresscountry
    } = userData || {};

    return (
        <div>
            <Styled.Container>
                <Styled.Info>
                    Ustawienia danych personalnych
               </Styled.Info>

                {nameVisible ? <InputPopUp email = {email} edit = {config.userDataEdit.name} title='Edytuj imię i nazwisko' hide={changeNameVisible} /> : null}
                {numberVisible ? <InputPopUp email = {email} edit = {config.userDataEdit.telefonNumber} title='Edytuj numer telefonu' hide={changeNumberVisible} /> : null}
                {myAddressVisible ? <InputPopUp email = {email} edit = {config.userDataEdit.myAddress} title='Edytuj swój adres' hide={changeMyAddressVisible} /> : null}
                {shippingAddressVisible ? <InputPopUp email = {email} edit = {config.userDataEdit.shippingAddress} title='Edytuj adres wysyłki' hide={changeShippingAddressVisible} /> : null}

                <Styled.GridDataPersonality>
                    <Styled.DataContainer>
                        <Styled.DataTitle>IMIE I NAZWISKO</Styled.DataTitle>
                        <Styled.DataValue> {`${name}`} </Styled.DataValue>
                        <Styled.DataButton onClick={() => changeNameVisible(!nameVisible)}>EDYTUJ</Styled.DataButton>
                    </Styled.DataContainer>
                    <Styled.DataContainer>
                        <Styled.DataTitle>EMAIL</Styled.DataTitle>
                        <Styled.DataValue> {`${email}`} </Styled.DataValue>
                        <Styled.DataButton style = {{color: 'gray'}}>EDYTUJ</Styled.DataButton>
                    </Styled.DataContainer>
                    <Styled.DataContainer>
                        <Styled.DataTitle>TELEFON KONTAKTOWY</Styled.DataTitle>
                        <Styled.DataValue>+48 {`${telefonnumber}`} </Styled.DataValue>
                        <Styled.DataButton onClick={() => changeNumberVisible(!numberVisible)} >EDYTUJ</Styled.DataButton>
                    </Styled.DataContainer>
                    <Styled.DataContainer>
                        <Styled.DataTitle>DATA URODZENIA</Styled.DataTitle>
                        <Styled.DataValue> {`${birthdate}`} </Styled.DataValue>
                        <Styled.DataButton style = {{color: 'gray'}} >EDYTUJ</Styled.DataButton>
                    </Styled.DataContainer>
                    <Styled.DataContainer></Styled.DataContainer>
                    <Styled.DataContainer>
                        <Styled.DataTitle>KONTO AKTYWNE OD</Styled.DataTitle>
                        <Styled.DataValue> {`${createaccount}`} </Styled.DataValue>
                        <Styled.DataValue> {`${role}`} </Styled.DataValue>
                    </Styled.DataContainer>
                </Styled.GridDataPersonality>


                <Styled.GridDataAdres>
                    <Styled.DataContainer>
                        <Styled.DataTitle>TWÓJ ADRES</Styled.DataTitle>
                        <Styled.DataValue> {`${myaddressstreet}`} </Styled.DataValue>
                        <Styled.DataValue> {`${myaddresspostcode}`} </Styled.DataValue>
                        <Styled.DataValue> {`${myaddressvoivodeship}`} </Styled.DataValue>
                        <Styled.DataValue> {`${myaddresscountry}`} </Styled.DataValue>
                        <Styled.DataButton onClick={() => changeMyAddressVisible(!myAddressVisible)} >EDYTUJ</Styled.DataButton>
                    </Styled.DataContainer>
                    <Styled.DataContainer></Styled.DataContainer>
                    <Styled.DataContainer>
                        <Styled.DataTitle>ADRES DO WYSYŁKI</Styled.DataTitle>
                        <Styled.DataValue> {`${shippingaddressname}`} </Styled.DataValue>
                        <Styled.DataValue> {`${shippingaddressstreet}`} </Styled.DataValue>
                        <Styled.DataValue> {`${shippingaddresspostcode}`} </Styled.DataValue>
                        <Styled.DataValue> {`${shippingaddressvoivodeship}`} </Styled.DataValue>
                        <Styled.DataValue> {`${shippingaddresscountry}`} </Styled.DataValue>
                        <Styled.DataButton onClick={() => changeShippingAddressVisible(!shippingAddressVisible)} >EDYTUJ</Styled.DataButton>
                    </Styled.DataContainer>
                </Styled.GridDataAdres>
            </Styled.Container>
        </div>
    )
}

export default MyPersonalities;