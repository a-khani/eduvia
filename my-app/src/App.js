import ChatPopUp  from "./components/Chatbot.jsx";
import BasicExample from "./components/Table.jsx";
import Header from "./components/Navbar.jsx";
import Button from 'react-bootstrap/Button'
import "./App.css";
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
    </>
  );
}

export default App;