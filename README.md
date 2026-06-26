# Real-Time Chat Application

A simple real-time chat application built with Spring Boot, WebSocket, STOMP, SockJS, HTML, CSS, and JavaScript.

## Features

* Real-time messaging using WebSockets
* User join notifications
* User leave notifications
* Multiple users can communicate in a shared chat room
* Responsive and modern user interface
* STOMP messaging support with SockJS fallback

## Technologies Used

### Backend

* Java
* Spring Boot
* Spring WebSocket
* STOMP Protocol
* Lombok

### Frontend

* HTML5
* CSS3
* JavaScript
* SockJS Client
* STOMP.js

## Project Structure

```
src
├── main
│   ├── java
│   │   └── com.demo.chat
│   │       ├── config
│   │       ├── controller
│   │       ├── models
│   │       └── common
│   └── resources
│       └── static
│           ├── css
│           ├── js
│           ├── index.html
│           └── chat_room.html
```

## How It Works

1. A user enters their name on the home page.
2. The application stores the username.
3. The user joins the chat room.
4. A WebSocket connection is established.
5. The user subscribes to the public topic.
6. Messages are broadcast to all connected users.
7. Join and leave events are announced to everyone in the chat room.

## WebSocket Configuration

### Endpoint

```
/ws
```

### Application Destination Prefix

```
/app
```

### Broker Destination

```
/topic
```

## Message Types

The application supports the following message types:

* JOIN
* CHAT
* LEAVE

Example message payload:

```json
{
  "sender": "Hasnaa",
  "content": "Hello everyone!",
  "messageType": "CHAT"
}
```

## Running the Application

### Prerequisites

* Java 17 or later
* Maven

### Clone the Repository

```bash
git clone <repository-url>
cd chat-application
```

### Run the Application

```bash
mvn spring-boot:run
```

The application will be available at:

```
http://localhost:8080
```

## Future Improvements

* Private messaging
* User authentication
* Online users list
* Message persistence with a database
* Typing indicators
* Read receipts
* Emojis and file sharing
