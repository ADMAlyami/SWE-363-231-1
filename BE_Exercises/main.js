
const UserEventEmitter = require('./event');

// Event handler for userLoggedIn
UserEventEmitter.on('userLoggedIn', (userId) => {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: USER_${userId} logged in`);
});

// Event handler for userLoggedOut
UserEventEmitter.on('userLoggedOut', (userId) => {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: USER_${userId} logged out`);
});

// Function to simulate user logging in at random intervals
function simulateUserLogin(userId) {
  const randomSeconds = Math.random() * 1.9 + 0.1; 
  setTimeout(() => {
    UserEventEmitter.emit('userLoggedIn', userId);
    simulateUserLogout(userId); 
  }, randomSeconds * 1000);
}

// Function to simulate user logging out after a delay
function simulateUserLogout(userId) {
  const randomSeconds = Math.random() * 1.9 + 0.1; 
  setTimeout(() => {
    UserEventEmitter.emit('userLoggedOut', userId);
    simulateUserLogin(userId); 
  }, randomSeconds * 1000);
}

// Simulate user events for 5 users
for (let userId = 1; userId <= 5; userId++) {
  simulateUserLogin(userId);
}
