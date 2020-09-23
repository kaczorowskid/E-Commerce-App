import styled from 'styled-components';
import { FolderFill } from '@styled-icons/bootstrap'
import { FolderOpen }  from '@styled-icons/boxicons-solid'


export const Container = styled.div`
    position: fixed;
    top: 120px;
    left: 0px;
    width: 300px;
    height: 100vh;
    z-index: 1;
    background-color: black;
    padding-top: 10px;
    /* overflow: scroll; */
`;

export const MenuSexContainer = styled.div`
    height: 50px;
    width: 100%;
    color: white;
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 0 0 0 10px;
`;

export const MenuSex = styled.span`
    margin-left: 20px;
`;

export const MenuItem = styled.div`
    height: 50px;
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover {
        background-color: gray;
    }
`;

export const FolderClosedIcon = styled(FolderFill)`
    width: 20px;
    height: 20px;
    color: white;
`;

export const FolderOpenIcon = styled(FolderOpen)`
    width: 20px;
    height: 20px;
    color: white;
`;