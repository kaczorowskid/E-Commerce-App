import React from 'react';
import * as CardStyled from './Card.styled';

type Props = {
    imgSource: string;
}

const Card: React.FC<Props> = ({ imgSource }) => {
    return (
        <div>
            <CardStyled.Container>
                <CardStyled.ImageContainer src={imgSource} />
                <CardStyled.InfoContainer>
                    <CardStyled.Info>
                        <CardStyled.InfoTitle>
                            Bluza z nadrukiem cyberpunk
                        </CardStyled.InfoTitle>
                        <CardStyled.InfoPricePromotion>
                            150.99 zł
                        </CardStyled.InfoPricePromotion>
                        <CardStyled.InfoPrice>
                            119.99 zł
                        </CardStyled.InfoPrice>
                    </CardStyled.Info>
                </CardStyled.InfoContainer>
            </CardStyled.Container>
        </div>
    )
}

export default Card;