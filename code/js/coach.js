
// Connect to backend Socket.IO server
const socket = io();




// elements
const messagesDiv = document.getElementById("messages");
const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

//Get current user from login
const currentUser = sessionStorage.getItem("currentUser") || "Unknown";


// Add message to screen
function addMessage(text) {
    const div = document.createElement("div");
    div.className = "message";
    div.textContent = text;
    messagesDiv.appendChild(div);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Send message
sendBtn.addEventListener("click", () => {
    if (input.value.trim()) {
        socket.emit("chatMessage", {
        	user: currentUser,
		text: input.value
	});

	input.value = "";
     }
});

// Allow Enter key to send
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendBtn.click();
});

// Receive messages from server
socket.on("chatMessage", (data) => {
    addMessage(`${data.user}: ${data.text}`);
});

