import React, { useState } from 'react';
import * as Styled from './AccountSettings.styled';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import MyOrders from './Settings/MyOrders/MyOrders';
import MyPersonalities from './Settings/MyPersonalities/MyPersonalities';

const AccountSettings: React.FC = () => {

    const [tabItem, setTabItem] = useState<number>(2);

    const logout = () => {
        localStorage.setItem('token', '');
        console.log(localStorage.getItem('token'))
    }

    return (
        <div>
            <Navbar />
            <Styled.Container>
                <Styled.ItemContainer value = {tabItem} >
                    <Styled.Item><MyOrders /></Styled.Item>
                    <Styled.Item><MyPersonalities /></Styled.Item>
                </Styled.ItemContainer>
                <Styled.OptionsWrapper>
                    <Styled.OptionsContainer value = {tabItem}>
                        <Styled.OptionsItem onClick = {() => setTabItem(1)} >Moje zamówienia</Styled.OptionsItem>
                        <Styled.OptionsItem onClick = {() => setTabItem(2)} >Zmień swoje dane</Styled.OptionsItem>
                        <button onClick = {() => logout()} >wyloguj</button>
                    </Styled.OptionsContainer>
                </Styled.OptionsWrapper>
            </Styled.Container>
            <Footer />
        </div>
    )
}

export default AccountSettings;