import ChatBox from "@/components/ChatBox";

export default function Chat() {
  return (
    <div id="chatbot-container">
      <div id="chatbot-messages">
        <ChatBox />
      </div>
      <div className="absolute bottom-0" id="user-input">
        <input type="text" id="user-message" placeholder="Type your message..." />
        <button id="send-button">Send</button>
      </div>
    </div>
  );
}
