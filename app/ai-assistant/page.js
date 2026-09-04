"use client";

import { useState } from "react";
import { getAIResponse } from "../../services/aiService";

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello! 👋 I am your Smart Classroom AI Assistant. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = {
      role: "user",
      text: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const result = await getAIResponse(userMessage.text);

      const aiMessage = {
        role: "assistant",
        text: result.response,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage = {
        role: "assistant",
        text: "Sorry, something went wrong. Please try again.",
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: "30px", maxWidth: "800px", margin: "auto" }}>
      <h1>🤖 Smart Classroom AI Assistant</h1>

      {/* Chat Messages */}
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "20px",
          height: "400px",
          overflowY: "auto",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              marginBottom: "15px",
              textAlign: message.role === "user" ? "right" : "left",
            }}
          >
            <strong>
              {message.role === "user" ? "You: " : "🤖 AI: "}
            </strong>

            {message.text}
          </div>
        ))}

        {loading && <p>🤖 AI is thinking...</p>}
      </div>

      {/* Input Section */}
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={handleSend}
          disabled={loading}
          style={{
            padding: "12px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </main>
  );
}