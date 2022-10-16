import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./BotAvatar";
import UserAvatar from "./UserAvatar";


const config = {
  initialMessages: [createChatBotMessage(`Hi, I'm Via!`)],
  botName: "Via",
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />
    ,userAvatar: (props) => <UserAvatar {...props} />
  }
}

export default config;