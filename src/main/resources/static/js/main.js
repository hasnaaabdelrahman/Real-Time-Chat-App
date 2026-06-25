const username = localStorage.getItem("username");

let stompClient = null;

function connect() {

    const socket = new SockJS('http://localhost:8080/ws');

    stompClient = Stomp.over(socket);

    stompClient.connect({}, onConnected, onError);
}

function onConnected() {

    stompClient.subscribe('/topic/public', onMessageReceived);

    stompClient.send(
        "/app/chat.addUser",
        {},
        JSON.stringify({
            sender: username,
            messageType: "JOIN"
        })
    );
}

function onError(error) {
    console.log("Connection error", error);
}

function sendMessage(event) {

    event.preventDefault();

    const messageInput = document.getElementById("message");

    const content = messageInput.value.trim();

    if (content && stompClient) {

        const chatMessage = {
            sender: username,
            content: content,
            messageType: "CHAT"
        };

        stompClient.send(
            "/app/chat.send",
            {},
            JSON.stringify(chatMessage)
        );

        messageInput.value = "";
    }
}

function onMessageReceived(payload) {

    const message = JSON.parse(payload.body);

    const chat = document.getElementById("chat");

    const div = document.createElement("div");

    if (message.messageType === "JOIN") {
        div.innerText = `${message.sender} joined the chat`;
    }
    else if (message.messageType === "LEAVE") {
        div.innerText = `${message.sender} left the chat`;
    }
    else {
        div.innerText = `${message.sender}: ${message.content}`;
    }

    chat.appendChild(div);
}

document
    .getElementById("chat-form")
    .addEventListener("submit", sendMessage);

connect();