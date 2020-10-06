import React from 'react';
import * as Styled from './InputPopUp.styled';

interface Props {
    hide: any;
    title: string;
}

const InputPopUp: React.FC<Props> = ({ hide, title }) => {
    return (
        <div>
            <Styled.Container>
                <Styled.InpuPopUpContainer>
                    <Styled.Info>{`${title}`}</Styled.Info>
                    <Styled.InputData />
                    <Styled.ButtonsContainer>
                        <Styled.InputDataButton onClick={() => hide()} >ZAPISZ</Styled.InputDataButton>
                        <Styled.InputDataButton onClick={() => hide()} >WYJŚCIE</Styled.InputDataButton>
                    </Styled.ButtonsContainer>
                </Styled.InpuPopUpContainer>
            </Styled.Container>
        </div>
    )
}

export default InputPopUp