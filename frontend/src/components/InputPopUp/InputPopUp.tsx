import React, { useState } from 'react';
import * as Styled from './InputPopUp.styled';
import axios from 'axios';
import { config } from '../../config';

interface Props {
    hide: any;
    title: string;
    edit: string;
    email?: string;
}

const InputPopUp: React.FC<Props> = ({ hide, title, edit, email }) => {

    const [inputData, setInputData] = useState<string>('');

    const editData = (data: string) => {
        axios.put(`${config.backendUrl}/user/${edit}`, {
            email: email,
            data: data
        }, {
            headers: { 'auth-token': localStorage.getItem('token') }
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }


    return (
        <div>
            <Styled.Container>
                <Styled.InpuPopUpContainer>
                    <Styled.Info>{`${title}`}</Styled.Info>
                    {(edit === config.userDataEdit.myAddress) || (edit === config.userDataEdit.shippingAddress) ?
                        <Styled.InputDataContainer>
                            <Styled.InputData onChange={e => setInputData(e.target.value)} />
                            <Styled.InputData onChange={e => setInputData(e.target.value)} />
                            <Styled.InputData onChange={e => setInputData(e.target.value)} />
                            <Styled.InputData onChange={e => setInputData(e.target.value)} />
                        </Styled.InputDataContainer> :
                        <Styled.InputData onChange={e => setInputData(e.target.value)} />
                    }
                    <Styled.ButtonsContainer>
                        <Styled.InputDataButton onClick={() => editData(inputData)} >ZAPISZ</Styled.InputDataButton>
                        <Styled.InputDataButton onClick={() => hide()} >WYJŚCIE</Styled.InputDataButton>
                    </Styled.ButtonsContainer>
                </Styled.InpuPopUpContainer>
            </Styled.Container>
        </div>
    )
}

export default InputPopUp