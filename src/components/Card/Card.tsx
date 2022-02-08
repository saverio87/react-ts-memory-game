import React from 'react';
import { CardType } from '../../setup';
import {Wrapper, FrontImg, BackImg} from './Card.styles'

type Props = {
  card: CardType,
  callback: (card: CardType) => void;
}

const Card: React.FC<Props> =({card, callback}) => {

  const handleClick = () => {
    if (card.clickable) callback(card);
  }
  return (
    <Wrapper onClick={handleClick}>
      <FrontImg flipped={card.flipped} src={card.frontImage}/>
      <BackImg flipped={card.flipped} src={card.backImage} />
    </Wrapper>
  )
}

export default Card;