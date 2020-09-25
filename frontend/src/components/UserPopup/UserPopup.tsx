import React from 'react';
import * as Styled from './UserPopup.styled';


const UserPopup: React.FC = () => {
    return (
        <div>
            <Styled.Container>
                <Styled.UserPopupItem>Moje zamówienia</Styled.UserPopupItem>
                <Styled.UserPopupItem>Moje konto</Styled.UserPopupItem>
                <Styled.UserPopupItem>Wyloguj</Styled.UserPopupItem>
            </Styled.Container>
        </div>
    )
}

export default UserPopup;