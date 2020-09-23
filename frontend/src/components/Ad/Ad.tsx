import React from 'react';
import * as AdStyled from './Ad.styled';

type Props = {
    imgSource: string;
}

const Ad: React.FC<Props> = ({imgSource}) => {
    return (
        <div>
            <AdStyled.Container>
                <AdStyled.Image source = {imgSource} />
            </AdStyled.Container>
        </div>
    )
}

export default Ad;