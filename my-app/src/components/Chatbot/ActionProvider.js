class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }

    schoolHandler = () => {
      const message = this.createChatBotMessage("Awesome, what's your year?")
      this.setChatbotMessage(message)
    }
    setChatbotMessage = (message) => {
      this.setState(state => ({ ...state, messages: [...state.messages, message] }))
  }

}

  export default ActionProvider;