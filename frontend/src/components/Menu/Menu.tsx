import React, { useState, useEffect } from 'react';
import * as MenuStyled from './Menu.styled';
import axios from 'axios';

interface Props {
    visible: boolean
}

interface ICategory {
    menCategory: Array<string>;
    womenCategory: Array<string>
}

const Menu: React.FC<Props> = ({ visible }) => {

    const [womenCategoryVisible, womenToogleVisible] = useState<boolean>(true);
    const [menCategoryVisible, menToogleVisible] = useState<boolean>(true);
    const [category, setCategory] = useState<ICategory>();

    useEffect(() => {
        axios.get('/category/category').then((res: any) => setCategory(res.data));
    }, [])

    return (
        <div>
            <MenuStyled.Container visible={visible}>

                <MenuStyled.MenuSexContainer>
                    {womenCategoryVisible ? <MenuStyled.FolderOpenIcon /> : <MenuStyled.FolderClosedIcon />}
                    <MenuStyled.MenuSex onClick={() => womenToogleVisible(!womenCategoryVisible)} >Kobieta</MenuStyled.MenuSex>
                </MenuStyled.MenuSexContainer>
                <MenuStyled.MenuItemsContainer show={womenCategoryVisible} >
                    {category?.womenCategory.map((item: any, i: number) => <MenuStyled.MenuItem key={i}>{`${item}`}</MenuStyled.MenuItem>)}
                </MenuStyled.MenuItemsContainer>


                <MenuStyled.MenuSexContainer>
                    {menCategoryVisible ? <MenuStyled.FolderOpenIcon /> : <MenuStyled.FolderClosedIcon />}
                    <MenuStyled.MenuSex onClick={() => menToogleVisible(!menCategoryVisible)} >Mężczyzna</MenuStyled.MenuSex>
                </MenuStyled.MenuSexContainer>
                <MenuStyled.MenuItemsContainer show={menCategoryVisible}>
                    {category?.menCategory.map((item: any, i: number) => <MenuStyled.MenuItem key={i}>{`${item}`}</MenuStyled.MenuItem>)}
                </MenuStyled.MenuItemsContainer>

            </MenuStyled.Container>
        </div>
    )
}



export default Menu;