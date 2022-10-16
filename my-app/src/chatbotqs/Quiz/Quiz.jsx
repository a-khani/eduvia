import React, { useState } from "react";

import "../Options/Options.css";

const Options1 = (props) => {
  const options1 = [
    { text: "4", handler: props.actionProvider.handleTracyHigh, id: 1 },
    { text: "3", handler: () => {}, id: 2 },
    { text: "2", handler: () => {}, id: 3 },
    { text: "1", handler: () => {}, id: 4 },
  ];

  const buttonsMarkup = options1.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options1;
