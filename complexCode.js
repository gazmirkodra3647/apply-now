// Filename: complexCode.js
// Description: This code demonstrates a complex implementation of a chat application using object-oriented programming concepts in JavaScript.

// ChatUser class representing a user in the chat application
class ChatUser {
  constructor(name) {
    this.name = name;
  }

  sendMessage(message, recipient) {
    const formattedMessage = `${this.name}: ${message}`;
    recipient receiveMessage(formattedMessage);
  }
}

// ChatRoom class representing a chat room in the chat application
class ChatRoom {
  constructor(name) {
    this.name = name;
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  broadcast(message) {
    for (const user of this.users) {
      user.receiveMessage(message);
    }
  }
}

// Main function to simulate the chat application
function main() {
  const room = new ChatRoom("General");

  const user1 = new ChatUser("Alice");
  const user2 = new ChatUser("Bob");
  const user3 = new ChatUser("Charlie");

  room.addUser(user1);
  room.addUser(user2);
  room.addUser(user3);

  user1.sendMessage("Hello everyone!", room);
  user2.sendMessage("Hi Alice!", user1);
}

// Entry point of the program
main();