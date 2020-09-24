import React from 'react';
import * as CardStyled from './Card.styled';

type Props = {
    imgSource: string;
}

const Card: React.FC<Props> = ({ imgSource }) => {
    return (
        <div>
            <CardStyled.Container>
                <CardStyled.ImageContainer>
                    <CardStyled.Image src={imgSource}/>
                    <CardStyled.SizeContainer>
                        <CardStyled.SizeItem>XS</CardStyled.SizeItem>
                        <CardStyled.SizeItem>S</CardStyled.SizeItem>
                        <CardStyled.SizeItem>M</CardStyled.SizeItem>
                        <CardStyled.SizeItem>L</CardStyled.SizeItem>
                        <CardStyled.SizeItem>XL</CardStyled.SizeItem>
                        <CardStyled.SizeItem>XXL</CardStyled.SizeItem>
                    </CardStyled.SizeContainer>
                </CardStyled.ImageContainer>
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