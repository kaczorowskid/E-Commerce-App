import React from 'react';
import * as StartStyled from './StartLayout.styled';
import Navbar from '../../components/Navbar/Navbar';
import Ad from '../../components/Ad/Ad';
import Card from '../../components/Card/Card';
import Menu from '../../components/Menu/Menu';
import cioochy from '../../assest/images/cioochy.jpg';
import boot from '../../assest/images/boot.jpg'
import boot1 from '../../assest/images/but1.jpg'

const StartLayout: React.FC = () => {
    return (
        <div>
            <Menu />
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
                    <StartStyled.Item><Card imgSource={boot1} /></StartStyled.Item>
                    <StartStyled.Item><Card imgSource={boot} /></StartStyled.Item>
                    <StartStyled.Item><Card imgSource={boot} /></StartStyled.Item>
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
                    <StartStyled.Item><Card imgSource={boot} /></StartStyled.Item>
                    <StartStyled.Item><Card imgSource={boot} /></StartStyled.Item>
                    <StartStyled.Item><Card imgSource={boot} /></StartStyled.Item>
                    <StartStyled.Item><Card imgSource={boot} /></StartStyled.Item>
                </StartStyled.ItemsContainer>
            </StartStyled.Container>
        </div>
    )
}

export default StartLayout;