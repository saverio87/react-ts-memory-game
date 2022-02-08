import card1 from './img/1.jpeg';
import card2 from './img/2.jpeg';
import card3 from './img/3.jpeg';
import card4 from './img/4.jpeg';
import card5 from './img/5.jpeg';
import card6 from './img/6.jpeg';
import card7 from './img/7.jpeg';
import card8 from './img/8.jpeg';
import backCard from './img/backCard.jpeg'


export const setup = () => {
  return undefined;
};


export type CardType = {
  id: string,
  flipped: boolean,
  backImage: string,
  frontImage: string,
  clickable: boolean,
  matchingCardId: string
}

const cardImages: string[] = [card1,card2,card3,card4,card5,card6,card7,card8];

export const createBoard = ():CardType[] => (
  [...cardImages, ...cardImages].map((card,id)=> ({
    id: `card${id}`,
    flipped: false,
  backImage: backCard,
  frontImage: card,
  clickable: true,
  matchingCardId: id < cardImages.length ? `card${id + cardImages.length}` : `card${id - cardImages.length}`
  }))
)