import React, { useState } from 'react';
import * as Styled from './AccountSettings.styled';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import MyOrders from './Settings/MyOrders/MyOrders';
import MyPersonalities from './Settings/MyPersonalities/MyPersonalities';
import { useHistory } from "react-router-dom";
import { config } from '../../config'

const AccountSettings: React.FC = () => {

    const [tabItem, setTabItem] = useState<number>(2);
    const history = useHistory();

    const logout = () => {
        localStorage.setItem('token', '');
        history.push(config.startSitePath);
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
                    </Styled.OptionsContainer>
                    <Styled.LogoutButton onClick = {() => logout()} >WYLOGUJ</Styled.LogoutButton>
                </Styled.OptionsWrapper>
            </Styled.Container>
            <Footer />
        </div>
    )
}

export default AccountSettings;