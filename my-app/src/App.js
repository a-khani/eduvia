<<<<<<< HEAD
import React from 'react'
import Button from 'react-bootstrap/Button';
=======
import ChatPopUp  from "./components/Chatbot.jsx";
>>>>>>> 05f359b7f8c9584e6b6680155a8fda648ed92528
import BasicExample from "./components/Table.jsx";
import Header from "./components/Navbar.jsx";
import Button from 'react-bootstrap/Button'
import "./App.css";
<<<<<<< HEAD
import { useEffect, useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
  return(
    <>
    <Header></Header>
    {show ?
    <BasicExample></BasicExample> : null}
    <Button onClick = {() => setShow(show => !show)}>Hi</Button>
=======
import {usEffect, useState} from 'react';
// window.something (value) {
//   this.setState({value})
// }
 
function App() {
  const [show, setShow] = useState(false)
  return(
    <>
    <Header></Header>
    <div class="dummy-text">
        <img src="https://d24fkeqntp1r7r.cloudfront.net/wp-content/uploads/2020/11/08041438/Untitled-design-2020-12-08T151337.059.png"></img>
        <a href="#first-section" class="bounce"></a>
      </div>
<<<<<<< HEAD
    <div class="martin">Proof of Concept??</div>
=======

    
>>>>>>> f19d51e0493894cfc55aa9c9d01f279e9f0fc8e8
    {show ? <BasicExample></BasicExample> : null}
    <Button onClick = {() => setShow(show => !show)}>hi</Button>
    <ChatPopUp></ChatPopUp>
>>>>>>> 05f359b7f8c9584e6b6680155a8fda648ed92528
    </>
  );
}

export default App;