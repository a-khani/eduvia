import ChatPopUp  from "./components/Chatbot.jsx";
import BasicExample from "./components/Table.jsx";
import Header from "./components/Navbar.jsx";
import Button from 'react-bootstrap/Button';
import Chatbot, { chatBot } from 'react-chatbot-kit';
import "./App.css";
import { useEffect, useState } from 'react';
import MessageParser from "./components/Chatbot/MessageParser.js";
import ActionProvider from "./components/Chatbot/ActionProvider.js";
import config from "./components/Chatbot/Config.js";


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
    <div class="martin">Proof of Concept??</div>
    <div>
      <header>
        <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider}/>
      </header>
    </div>

    

    {show ? <BasicExample></BasicExample> : null}
    <Button onClick = {() => setShow(show => !show)}>hi</Button>
    <ChatPopUp></ChatPopUp>
    </>
  );
}

export default App;