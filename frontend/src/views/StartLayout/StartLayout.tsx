import React from 'react';
import * as StartStyled from './StartLayout.styled';
import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../reducers/AppState';
import Navbar from '../../components/Navbar/Navbar';
import Ad from '../../components/Ad/Ad';
import Card from '../../components/Card/Card';
import Menu from '../../components/Menu/Menu';
import UserPopup from '../../components/UserPopup/UserPopup';
import cioochy from '../../assest/images/cioochy.jpg';
import boot from '../../assest/images/boot.jpg'
import boot1 from '../../assest/images/but1.jpg'


interface linkStateProps {
    menuVisible: boolean
}

const mapStateToProps = (state: AppState): linkStateProps => ({
    menuVisible: state.navbarReducer.menuVisible
})

const connector = connect(mapStateToProps, null);

type Props = ConnectedProps<typeof connector>;

const StartLayout: React.FC<Props> = ({menuVisible}) => {
    return (
        <div>
            <Menu visible = {menuVisible}/>
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
        </div>
    )
}

export default connector(StartLayout);