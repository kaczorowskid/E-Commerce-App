import React, { useState } from 'react';
import * as Styled from './InputPopUp.styled';
import axios from 'axios';
import { config } from '../../config';

interface Props {
    hide: any;
    title: string;
    edit: string;
    email?: string;
    disabledName?: boolean;
    url: string
}

const InputPopUp: React.FC<Props> = ({ hide, title, edit, email, disabledName, url }) => {

    const [inputData, setInputData] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [postcode, setPostCode] = useState<string>('');
    const [voivodeship, setVoivodeship] = useState<string>('');
    const [country, setCountry] = useState<string>('');


    const editData = () => {
        axios.put(`${config.backendUrl}/user/${url}`, {
            email,
            inputData,
            name,
            address,
            postcode,
            voivodeship,
            country
        }, {
            headers: { 'auth-token': localStorage.getItem('token') }
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }


    return (
        <div>
            <Styled.Container>
                <Styled.InpuPopUpContainer size = {edit}>
                    <Styled.Info>{`${title}`}</Styled.Info>
                    {edit !== 'big' && <Styled.InputData onChange={e => setInputData(e.target.value)} />}
                    {edit === 'big' && <Styled.InputData disabled = {disabledName} placeholder = 'Imie i nazwisko' onChange={e => setName(e.target.value)} />}
                    {edit === 'big' && <Styled.InputData placeholder = 'Adres' onChange={e => setAddress(e.target.value)} />}
                    {edit === 'big' && <Styled.InputData placeholder = 'Kod pocztowy' onChange={e => setPostCode(e.target.value)} />}
                    {edit === 'big' && <Styled.InputData placeholder = 'Województwo' onChange={e => setVoivodeship(e.target.value)} />}
                    {edit === 'big' && <Styled.InputData placeholder = 'Państwo' onChange={e => setCountry(e.target.value)} />}
                    <Styled.ButtonsContainer>
                        <Styled.InputDataButton onClick={() => editData()} >ZAPISZ</Styled.InputDataButton>
                        <Styled.InputDataButton onClick={() => hide()} >WYJŚCIE</Styled.InputDataButton>
                    </Styled.ButtonsContainer>
                </Styled.InpuPopUpContainer>
            </Styled.Container>
        </div>
    )
}

export default InputPopUp