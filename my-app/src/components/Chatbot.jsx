import React, { useState } from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import "../App.css";
import Chatbot from "react-chatbot-kit";
import config from "./Chatbot/Config";
import MessageParser from "./Chatbot/MessageParser";
import ActionProvider from "./Chatbot/ActionProvider";

function ChatPopUp() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ButtonToolbar className = "text-center d-block"> <Button class = "chatBotButton" variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button></ButtonToolbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Welcome human, my name is Via. I'll be your mf helper.</Modal.Body>
        
        <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ChatPopUp