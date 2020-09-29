import React, { useState } from 'react';
import * as MenuStyled from './Menu.styled';

interface Props {
    visible: boolean
}

const Menu: React.FC<Props> = ({visible}) => {

    const [womenCategoryVisible, womenToogleVisible] = useState(true);
    const [menCategoryVisible, menToogleVisible] = useState(true);


    return (
        <div>
            <MenuStyled.Container visible={visible}>

                <MenuStyled.MenuSexContainer>
                    {womenCategoryVisible ? <MenuStyled.FolderOpenIcon /> : <MenuStyled.FolderClosedIcon />}
                    <MenuStyled.MenuSex onClick = {() => womenToogleVisible(!womenCategoryVisible)} >Kobieta</MenuStyled.MenuSex>
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
                    <MenuStyled.MenuSex onClick = {() => menToogleVisible(!menCategoryVisible)} >Mężczyzna</MenuStyled.MenuSex>
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



export default Menu;