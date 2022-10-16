class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }

    schoolHandler = () => {
      const message = this.createChatBotMessage("Awesome, how many years do you have left?")
      this.setChatbotMessage(message)
    }

    yearHandler = () => {
      const message = this.createChatBotMessage("What subject are you most interested in?")
      this.setChatbotMessage(message)
    }
    setChatbotMessage = (message) => {
      this.setState(state => ({ ...state, messages: [...state.messages, message] }))
  }

  subjectHandler = () => {
    const message = this.createChatBotMessage("What's one class you want to take?")
    this.setChatbotMessage(message)
  }

  integrateHandler = () => {
    

      console.log("state");
      const fileData = JSON.stringify(this.state);
      const blob = new Blob([fileData], {type: "text/plain"});
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = `${"integrate"}".json`;
      link.href = url;
      link.click();
  
}

  preferenceHandler = () => {
    const message = this.createChatBotMessage("Dope, Thanks cool kid.")
    this.setChatbotMessage(message)
  }


}


  export default ActionProvider;