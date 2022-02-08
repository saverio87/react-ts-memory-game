import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';


type Props = {
  message: string
  matchedPairs: number
}
export const MatchAlert = (props:Props) => {

  const [show,setShow] = React.useState(true);
  const {message, matchedPairs} = props;
  React.useEffect(() => {
   setShow(true)
  }, [matchedPairs]);
  

  return <ToastContainer position='top-end'>
    <Toast bg="success" show={show} onClose={()=>setShow(false)} delay={1000} autohide>
  <Toast.Header>
    <strong className="me-auto">Congratulations</strong>
  </Toast.Header>
  <Toast.Body>
  {message}
  </Toast.Body>
</Toast>
  </ToastContainer>;
};
