import React from 'react';
import * as MenuStyled from './Menu.styled';
import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../reducers/AppState';
import { toggleWomenCategory, toggleMenCategory } from '../../action/menu/menuAction';

interface AppProps {
    visible: boolean
}

interface linkStateProps {
    womenCategoryVisible: boolean;
    menCategoryVisible: boolean;
}

interface linkDispatchProps {
    toggleWomenCategory: () => Object;
    toggleMenCategory: () => Object;
}

const mapStateToProps = (state: AppState): linkStateProps => ({
    womenCategoryVisible: state.menuReducer.womenCategoryVisible,
    menCategoryVisible: state.menuReducer.menCategoryVisible
})

const mapDispatchToProps: linkDispatchProps = {
    toggleWomenCategory,
    toggleMenCategory
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector> & AppProps

const Menu: React.FC<Props> = ({ visible, toggleWomenCategory, womenCategoryVisible, toggleMenCategory, menCategoryVisible }) => {
    return (
        <div>
            <MenuStyled.Container visible={visible}>

                <MenuStyled.MenuSexContainer>
                    {womenCategoryVisible ? <MenuStyled.FolderOpenIcon /> : <MenuStyled.FolderClosedIcon />}
                    <MenuStyled.MenuSex onClick={() => toggleWomenCategory()} >Kobieta</MenuStyled.MenuSex>
                </MenuStyled.MenuSexContainer>
                <MenuStyled.MenuItemsContainer show={womenCategoryVisible} >
                    <MenuStyled.MenuItem>Buty</MenuStyled.MenuItem>
                    <MenuStyled.MenuItem>Spodnie</MenuStyled.MenuItem>
                    <MenuStyled.MenuItem>Bluzy</MenuStyled.MenuItem>
                    <MenuStyled.MenuItem>Kurtki</MenuStyled.MenuItem>
                    <MenuStyled.MenuItem>Papcie</MenuStyled.MenuItem>
                </MenuStyled.MenuItemsContainer>


                <MenuStyled.MenuSexContainer>
                    {menCategoryVisible ? <MenuStyled.FolderOpenIcon /> : <MenuStyled.FolderClosedIcon />}
                    <MenuStyled.MenuSex onClick={() => toggleMenCategory()} >Mężczyzna</MenuStyled.MenuSex>
                </MenuStyled.MenuSexContainer>
                <MenuStyled.MenuItemsContainer show={menCategoryVisible}>
                    <MenuStyled.MenuItem>Buty</MenuStyled.MenuItem>
                    <MenuStyled.MenuItem>Spodnie</MenuStyled.MenuItem>
                    <MenuStyled.MenuItem>Spódniczki</MenuStyled.MenuItem>
                    <MenuStyled.MenuItem>Sukienki</MenuStyled.MenuItem>
                    <MenuStyled.MenuItem>Rajstopki</MenuStyled.MenuItem>
                    <MenuStyled.MenuItem>Kabaretki</MenuStyled.MenuItem>
                </MenuStyled.MenuItemsContainer>

            </MenuStyled.Container>
        </div>
    )
}



export default connector(Menu);