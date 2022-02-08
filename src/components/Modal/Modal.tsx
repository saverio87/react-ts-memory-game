

import React from 'react';
import {Modal, Button} from 'react-bootstrap';


type Props = {
  show: boolean,
  playAgain: () => void
}

export const GameOverModal: React.FC<Props> =({show, playAgain})  => {
  return (
    <Modal show={show}>
    <Modal.Header>
      <Modal.Title>Congratulations</Modal.Title>
    </Modal.Header>
    <Modal.Body>You won the game! Do you want to play again?</Modal.Body>
    <Modal.Footer>
      
      <Button variant="primary" onClick={playAgain}>
        Play again!
      </Button>
    </Modal.Footer>
  </Modal>
    );
};
