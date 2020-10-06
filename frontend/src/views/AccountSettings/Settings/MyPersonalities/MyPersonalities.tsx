import React, { useState } from 'react';
import * as Styled from './MyPersonalities.styled'
import InputPopUp from '../../../../components/InputPopUp/InputPopUp';


const MyPersonalities: React.FC = () => {

    const [nameVisible, changeNameVisible] = useState<boolean>(true);
    const [emailVisible, changeEmailVisible] = useState<boolean>(false);
    const [numberVisible, changeNumberVisible] = useState<boolean>(false);
    const [birthDateVisible, changeBirthDateVisible] = useState<boolean>(false);
    const [myAddressVisible, changeMyAddressVisible] = useState<boolean>(false);
    const [shippingAddressVisible, changeShippingAddressVisible] = useState<boolean>(false);


    return (
        <div>
            <Styled.Container>
                <Styled.Info>
                    Ustawienia danych personalnych
               </Styled.Info>

                {nameVisible ? <InputPopUp title = 'Edytuj imię i nazwisko' hide = {changeNameVisible} /> : null}
                {emailVisible ? <InputPopUp title = 'Edytuj adres email' hide = {changeEmailVisible}/> : null}
                {numberVisible ? <InputPopUp title = 'Edytuj numer telefonu' hide = {changeNumberVisible}/> : null}
                {birthDateVisible ? <InputPopUp title = 'Edytuj datę urodzenia' hide = {changeBirthDateVisible}/> : null}
                {myAddressVisible ? <InputPopUp title = 'Edytuj swój adres' hide = {changeMyAddressVisible}/> : null}
                {shippingAddressVisible ? <InputPopUp title = 'Edytuj adres wysyłki' hide = {changeShippingAddressVisible}/> : null}

                <Styled.GridDataPersonality>
                    <Styled.DataContainer>
                        <Styled.DataTitle>IMIE I NAZWISKO</Styled.DataTitle>
                        <Styled.DataValue>Jan Kowalski</Styled.DataValue>
                        <Styled.DataButton onClick={() => changeNameVisible(!nameVisible)}>EDYTUJ</Styled.DataButton>
                    </Styled.DataContainer>
                    <Styled.DataContainer>
                        <Styled.DataTitle>EMAIL</Styled.DataTitle>
                        <Styled.DataValue>jankowalski123@wp.pl</Styled.DataValue>
                        <Styled.DataButton onClick={() => changeEmailVisible(!emailVisible)} >EDYTUJ</Styled.DataButton>
                    </Styled.DataContainer>
                    <Styled.DataContainer>
                        <Styled.DataTitle>TELEFON KONTAKTOWY</Styled.DataTitle>
                        <Styled.DataValue>+48 123 456 789</Styled.DataValue>
                        <Styled.DataButton onClick={() => changeNumberVisible(!numberVisible)} >EDYTUJ</Styled.DataButton>
                    </Styled.DataContainer>
                    <Styled.DataContainer>
                        <Styled.DataTitle>DATA URODZENIA</Styled.DataTitle>
                        <Styled.DataValue>01.01.1970</Styled.DataValue>
                        <Styled.DataButton onClick={() => changeBirthDateVisible(!birthDateVisible)} >EDYTUJ</Styled.DataButton>
                    </Styled.DataContainer>
                    <Styled.DataContainer></Styled.DataContainer>
                    <Styled.DataContainer>
                        <Styled.DataTitle>KONTO AKTYWNE OD</Styled.DataTitle>
                        <Styled.DataValue>01.01.2010</Styled.DataValue>
                        <Styled.DataValue>USER</Styled.DataValue>
                    </Styled.DataContainer>
                </Styled.GridDataPersonality>


                <Styled.GridDataAdres>
                    <Styled.DataContainer>
                        <Styled.DataTitle>TWÓJ ADRES</Styled.DataTitle>
                        <Styled.DataValue>ul. Garncarska 100/1</Styled.DataValue>
                        <Styled.DataValue>00-00 Warszawa</Styled.DataValue>
                        <Styled.DataValue>mazowieckie</Styled.DataValue>
                        <Styled.DataValue>Polska</Styled.DataValue>
                        <Styled.DataButton onClick={() => changeMyAddressVisible(!myAddressVisible)} >EDYTUJ</Styled.DataButton>
                    </Styled.DataContainer>
                    <Styled.DataContainer></Styled.DataContainer>
                    <Styled.DataContainer>
                        <Styled.DataTitle>ADRES DO WYSYŁKI</Styled.DataTitle>
                        <Styled.DataValue>Jan Kowalski</Styled.DataValue>
                        <Styled.DataValue>ul. Garncarska 100/1</Styled.DataValue>
                        <Styled.DataValue>00-00 Warszawa</Styled.DataValue>
                        <Styled.DataValue>mazowieckie</Styled.DataValue>
                        <Styled.DataValue>Polska</Styled.DataValue>
                        <Styled.DataButton onClick={() => changeShippingAddressVisible(!shippingAddressVisible)} >EDYTUJ</Styled.DataButton>
                    </Styled.DataContainer>
                </Styled.GridDataAdres>
            </Styled.Container>
        </div>
    )
}

export default MyPersonalities;