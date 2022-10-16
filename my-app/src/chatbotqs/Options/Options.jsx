import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    { text: "Tracy High", handler: props.actionProvider.handleTracyHigh, id: 1 },
    { text: "stem high", handler: () => {}, id: 2 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
