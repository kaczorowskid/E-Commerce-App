import React from 'react';
import * as StartStyled from './StartLayout.styled';
import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../reducers/AppState';
import Navbar from '../../components/Navbar/Navbar';
import Ad from '../../components/Ad/Ad';
import Card from '../../components/Card/Card';
import Menu from '../../components/Menu/Menu';
import cioochy from '../../assest/images/cioochy.jpg';
import boot from '../../assest/images/boot.jpg'
import boot1 from '../../assest/images/but1.jpg'
import Footer from '../../components/Footer/Footer';


const StartLayout: React.FC = () => {
    return (
        <div>
            
            <StartStyled.StickyNavbarContainer>
                <Navbar />
            </StartStyled.StickyNavbarContainer>
            <Ad imgSource={cioochy} />
            <StartStyled.Container>
                <StartStyled.ItemsContainer>
                    <StartStyled.Item><Card imgSource={boot} /></StartStyled.Item>
                    <StartStyled.Item><Card imgSource={boot} /></StartStyled.Item>
                    <StartStyled.Item><Card imgSource={boot1} /></StartStyled.Item>
                    <StartStyled.Item><Card imgSource={boot} /></StartStyled.Item>
                    <StartStyled.Item><Card imgSource={boot1} /></StartStyled.Item>
                    <StartStyled.Item><Card imgSource={boot} /></StartStyled.Item>
                </StartStyled.ItemsContainer>
            </StartStyled.Container>

            <Ad imgSource={cioochy} />
            <StartStyled.Container>
                <StartStyled.ItemsContainer>
                    <StartStyled.Item><Card imgSource={boot} /></StartStyled.Item>
                    <StartStyled.Item><Card imgSource={boot} /></StartStyled.Item>
                    <StartStyled.Item><Card imgSource={boot} /></StartStyled.Item>
                    <StartStyled.Item><Card imgSource={boot} /></StartStyled.Item>
                    <StartStyled.Item><Card imgSource={boot} /></StartStyled.Item>
                    <StartStyled.Item><Card imgSource={boot} /></StartStyled.Item>
                </StartStyled.ItemsContainer>
            </StartStyled.Container>
            <Footer />
        </div>
    )
}

export default StartLayout;