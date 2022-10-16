import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../../chatbotqs/Options/Options";
import Quiz from "../../chatbotqs/Quiz/Quiz";

const config = {
  botName: "Via",
  initialMessages: [
    createChatBotMessage(`What is your school name?`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "javascriptQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
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