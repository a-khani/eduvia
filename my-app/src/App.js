import ChatPopUp  from "./components/Chatbot.jsx";
import BasicExample from "./components/Table.jsx";
import Header from "./components/Navbar.jsx";
import Button from 'react-bootstrap/Button'
import "./App.css";
import {usEffect, useState} from 'react';


function App() {
  const [show, setShow] = useState(false)
  return(
    <>
    <Header></Header>
    <div class="dummy-text">
        <img src="https://d24fkeqntp1r7r.cloudfront.net/wp-content/uploads/2020/11/08041438/Untitled-design-2020-12-08T151337.059.png"></img>
      </div>
    {show ? <BasicExample></BasicExample> : null}
    <Button onClick = {() => setShow(show => !show)}>hi</Button>
    <ChatPopUp></ChatPopUp>
    </>
  );
}

export default App;