import React from 'react';
import * as MenuStyled from './Menu.styled';

const Menu: React.FC = () => {
    return (
        <div>
            <MenuStyled.Container>
                <MenuStyled.MenuSexContainer>
                    <MenuStyled.FolderOpenIcon />
                    <MenuStyled.MenuSex>Kobieta</MenuStyled.MenuSex>
                </MenuStyled.MenuSexContainer>
                <MenuStyled.MenuItem>Buty</MenuStyled.MenuItem>
                <MenuStyled.MenuItem>Spodnie</MenuStyled.MenuItem>
                <MenuStyled.MenuItem>Bluzy</MenuStyled.MenuItem>
                <MenuStyled.MenuItem>Kurtki</MenuStyled.MenuItem>
                <MenuStyled.MenuItem>Papcie</MenuStyled.MenuItem>

                <MenuStyled.MenuSexContainer>
                    <MenuStyled.FolderOpenIcon />
                    <MenuStyled.MenuSex>Mężczyzna</MenuStyled.MenuSex>
                </MenuStyled.MenuSexContainer>
                <MenuStyled.MenuItem>Buty</MenuStyled.MenuItem>
                <MenuStyled.MenuItem>Spodnie</MenuStyled.MenuItem>
                <MenuStyled.MenuItem>Spódniczki</MenuStyled.MenuItem>
                <MenuStyled.MenuItem>Sukienki</MenuStyled.MenuItem>
                <MenuStyled.MenuItem>Rajstopki</MenuStyled.MenuItem>
                <MenuStyled.MenuItem>Kabaretki</MenuStyled.MenuItem>

            </MenuStyled.Container>
        </div>
    )
}



export default Menu;