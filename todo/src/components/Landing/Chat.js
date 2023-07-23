import React, { useState, useEffect } from "react";
import { makeStyles, Paper, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  chatContainer: {
    display: "flex",
    flexDirection: "column",
    minWidth: "40%",
    margin: "0 auto",
    marginTop: "20px",
    padding: theme.spacing(2),
    borderRadius: "8px",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%", // Adjust the width to 100% on small screens
    },
  },
  chatMessages: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  messageBubble: {
    padding: theme.spacing(1),
    borderRadius: "8px",
    backgroundColor: "#f1f1f1",
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#dbf7c5",
  },
  botMessage: {
    alignSelf: "flex-start",
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
    marginTop: theme.spacing(2),
  },
  inputField: {
    flex: 1,
  },
}));

const Chat = () => {
  const classes = useStyles();
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputText, sender: "user" },
      ]);
      setInputText("");
    }
  };

  const handleBotReply = () => {
    // Simulate a bot reply with a delay (e.g., 1 second)
    setTimeout(() => {
      // Get the user's input text
      const userMessage = inputText.trim().toLowerCase();

      // Define chatbot replies based on user input
      const chatbotReplies = {
        hello: "Hello! How can I help you?",
        how_are_you: "I'm doing well, thank you!",
        name: "I'm a chatbot. You can call me ChatBot!",
        default:
          "I'm sorry, I didn't understand that. Can you please rephrase?",
      };

      // Get the appropriate reply from the chatbotReplies object
      const botMessage = chatbotReplies[userMessage] || chatbotReplies.default;

      // Add the bot's reply to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botMessage, sender: "bot" },
      ]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
      handleBotReply();
    }
  };

  useEffect(() => {
    // Auto-scroll to the bottom of the chat messages
    const chatContainer = document.getElementById("chat-container");
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [messages]);

  return (
    <Paper className={classes.chatContainer} elevation={3}>
      <div id="chat-container" className={classes.chatMessages}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${classes.messageBubble} ${
              message.sender === "user"
                ? classes.userMessage
                : classes.botMessage
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className={classes.inputContainer}>
        <TextField
          className={classes.inputField}
          variant="outlined"
          label="Type a message..."
          value={inputText}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <Button
          variant="contained"
          style={{ backgroundColor: "#426b1f", color: "white" }}
          onClick={handleSendMessage}
        >
          Send
        </Button>
      </div>
    </Paper>
  );
};

export default Chat;
