const process = require('process');

// Predefined set of questions
const chatbotQA = {
  "how are you?": "I'm a bot",
  "what is your name?": "I'm Chatbot, nice to meet you!",

};

console.log("Chatbot is online. Please enter anything:");

//  handle the chatbot responses
function chatbotResponse(input) {
  const trimmedInput = input.trim().toLowerCase();

  if (trimmedInput === "exit" || trimmedInput === "quit") {
    console.log("Chatbot is shutting down. Goodbye!");
    process.exit(0);
  }

  // Find a response, if available
  const response = chatbotQA[trimmedInput];
  if (response) {
    console.log(response);
  } else {
    console.log("I'm not sure how to respond to that.");
  }

  // Prompt the user again
  console.log("Please enter anything:");
}


process.stdin.setEncoding('utf-8');

process.stdin.on('data', (data) => {
  chatbotResponse(data);
});
