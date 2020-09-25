import styled from 'styled-components';
import { size } from '../devicesWidth.styled';
import { FolderFill } from '@styled-icons/bootstrap'
import { FolderOpen }  from '@styled-icons/boxicons-solid'

interface Props {
    visible: boolean
}

export const Container = styled.div<Props>`
    position: fixed;
    top: 120px;
    left: 0px;
    width: ${props => props.visible ? '300px' : '0px'};
    overflow: hidden;
    height: 100vh;
    z-index: 1;
    opacity: 0.8;
    background-color: black;
    padding-top: 10px;
    transition: width 0.5s cubic-bezier(0.75, 0.82, 0.165, 1);

    @media (max-width: ${size.mobileL}){
        width: ${props => props.visible ? '100%' : '0px'};
    }

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
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    
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