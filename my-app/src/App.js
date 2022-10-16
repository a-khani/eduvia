import React from 'react'
import Button from 'react-bootstrap/Button';
import BasicExample from "./components/Table.jsx";
import Header from "./components/Navbar.jsx";
import "./App.css";
import { useEffect, useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
  return(
    <>
    <Header></Header>
    {show ?
    <BasicExample></BasicExample> : null}
    <Button onClick = {() => setShow(show => !show)}>Hi</Button>
    </>
  );
}

export default App;