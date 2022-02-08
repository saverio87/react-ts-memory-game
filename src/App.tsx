import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {createBoard, CardType} from './setup';
import {shuffleCards} from './utils';

// Bootstrap

import {Container, Row, Col} from 'react-bootstrap';
import { Wrapper } from './components/Card/Card.styles';

// Components

import Card from './components/Card/Card';
import { GameOverModal } from './components/Modal/Modal';
import {MatchAlert} from './components/Toast/Toast';


function App() {

  
  const [cards, setCards] = useState<any[]>(shuffleCards(createBoard()));
  const [gameWon, setGameWon] = useState<boolean>(false);
  const [matchedPairs, setMatchedPairs] = useState<number>(0);
  const [flippedCard,setFlippedCard] = useState<undefined | CardType>(undefined);


  useEffect(() => {
    if (matchedPairs == cards.length / 2) {
      setGameWon(true)
    }

    // display toast whenever a match has been found

    
  }, [matchedPairs]);
  
  // const closeModal = () => setGameWon(false);
  const playAgain = () => {
    setGameWon(false);
    setMatchedPairs(0);
    setCards(shuffleCards(createBoard()));
  }

  const handleCardSelect = (selectedCard:CardType) => {

    // Flip the card
    setCards((previous)=> previous.map(
      card => card.id === selectedCard.id ? {...card, flipped: true, clickable: false} : card
    ))

    // If no card has been flipped yet, do this:
    if (flippedCard == undefined) {
      setFlippedCard({...selectedCard});
      return
    };

    // Upon selecting a second card, check if it's a match
    if (flippedCard.matchingCardId === selectedCard.id) {
      setMatchedPairs(prev => prev + 1);

    // If a match has been found, set clickable to false,
    // which will prevent execution of the callback

      setCards(prev => prev.map(
        (card) => card.id === selectedCard.id || card.id === flippedCard.id ? {...card, clickable: false} : card
      ))

      setFlippedCard(undefined)
      return;
    };

    // If no match has been found, do this

    setTimeout(() => {
      setCards(prev => prev.map(
        card => (card.id === selectedCard.id || card.id === flippedCard.id ? {...card, clickable: true, flipped: false} : card)
      ))
    }, 1000);
    setFlippedCard(undefined);
    return

  }

  
  return (
    <div className="App">
      <h2 style={{margin: "2rem",fontFamily:"Montserrat", fontWeight: "800", color: "brown"}}>Coffee memory game</h2>
      {matchedPairs > 0 && <MatchAlert matchedPairs={matchedPairs} message={`congratulations, you found ${matchedPairs} matches!`}/>}
      <GameOverModal show={gameWon} playAgain={playAgain}/>
      <Container style={{ maxWidth: "600px"}}>
        <Row>
          {cards.map((card,id)=>(
            <Col style={{padding: "0rem"}} xs={4} sm={3}>
              <Card card={card} callback={handleCardSelect}></Card>
            </Col>
          ))}
        </Row>
      </Container>

    </div>
  );
}

export default App;
