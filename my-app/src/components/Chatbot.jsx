import React, { useState } from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import "../App.css";
import Chatbot from "react-chatbot-kit";
import config from "./Chatbot/Config";
import MessageParser from "./Chatbot/MessageParser";
import ActionProvider from "./Chatbot/ActionProvider";
// function Chatter() {
// const cohere = require('cohere-ai');
// cohere.init('MygzYOTmnz39ijzGTSM39wOPS3b7gw89jmEobgsR');
// (async () => {
//   const response = await cohere.classify({
//     model: 'large',
//     inputs: ["Am I still able to return my order?", "When can I expect my package?"],
//     examples: [{"text": "Do you offer same day shipping?", "label": "Shipping and handling policy"}, {"text": "Can you ship to Italy?", "label": "Shipping and handling policy"}, {"text": "How long does shipping take?", "label": "Shipping and handling policy"}, {"text": "Can I buy online and pick up in store?", "label": "Shipping and handling policy"}, {"text": "What are your shipping options?", "label": "Shipping and handling policy"}, {"text": "My order arrived damaged, can I get a refund?", "label": "Start return or exchange"}, {"text": "You sent me the wrong item", "label": "Start return or exchange"}, {"text": "I want to exchange my item for another colour", "label": "Start return or exchange"}, {"text": "I ordered something and it wasn’t what I expected. Can I return it?", "label": "Start return or exchange"}, {"text": "What’s your return policy?", "label": "Start return or exchange"}, {"text": "Where’s my package?", "label": "Track order"}, {"text": "When will my order arrive?", "label": "Track order"}, {"text": "What’s my shipping number?", "label": "Track order"}, {"text": "Which carrier is my package with?", "label": "Track order"}, {"text": "Is my package delayed?", "label": "Track order"}]
//   });
//   console.log(`The confidence levels of the labels are ${JSON.stringify(response.body.classifications)}`);
// })();
// }
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
          <Modal.Title>Via</Modal.Title>
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