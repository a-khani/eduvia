import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../../chatbotqs/Options/Options";
import Options1 from "../../chatbotqs/Quiz/Quiz";
import Greets from "../../chatbotqs/Options/Greets";

const config = {
  botName: "Via",
  initialMessages: [
    createChatBotMessage(`Hi, I'm Via!`, {
      widget: "greets",
    }),
  ],
  widgets: [
    {
      widgetName: "greets",
      widgetFunc: (props) => <Greets {...props} />,
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "options1",
      widgetFunc: (props) => <Options1 {...props} />,
      props: {
        questions: [
          {
            question: "How many years do you have left?",
            answer:
              "3",
            id: 1,
          },
          {
            question: "What classes have you taken?",
            answer:
              "CS 61A",
            id: 1,
          },
          {
            question: "Any courses in particular you want to take?",
            answer:
              "CS 61C",
            id: 1,
          },
        ],
      },
    },
  ],
};

export default config;