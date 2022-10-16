class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      const lowercase = message.toLowerCase()

      if (lowercase.includes("tracy high")) {
        this.actionProvider.schoolHandler()
      }

      if (lowercase.includes(1) || lowercase.includes(2) || lowercase.includes(3) || lowercase.includes(4)) {
        this.actionProvider.yearHandler()
      }

      if (lowercase.includes("math") || lowercase.includes("math") || lowercase.includes("math")) {
      this.actionProvider.subjectHandler()
      }

      if (lowercase.includes("algebra") || lowercase.includes("geometry") || lowercase.includes("pre-calculus") || lowercase.includes("calculus") || lowercase.includes("biology") || lowercase.includes("physics") || lowercase.includes("english") || lowercase.includes("chemistry")) {
        this.actionProvider.preferenceHandler()
      }

      
    }
  }

  export default MessageParser;

  