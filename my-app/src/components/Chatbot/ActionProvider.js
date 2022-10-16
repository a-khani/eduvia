class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet = () => {
      const message = this.createChatBotMessage("Hey there!",
      {
        widget: "greets",
      });
      this.addMessageToState(message);
      this.handleSchool();
    };

    handleSchool = () => {
      const message = this.createChatBotMessage(
        "What is your school name?",
        {
          widget: "options",
        }
      )
    }
  
    handleTracyHigh = () => {
      const message = this.createChatBotMessage(
        "Great! How many years do you have left?",
        {
          widget: "options1",
        }
      );
  
      this.addMessageToState(message);
    };
  
    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  }
  
  export default ActionProvider;