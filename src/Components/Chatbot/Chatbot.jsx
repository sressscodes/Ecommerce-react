import React, { useState } from 'react';
import './ChatBot.css';
import all_product from '../Assets/all_product';

const ChatBot = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! Ask me about our plants or get recommendations 🌿' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'user', text: input };
    const botMsg = getBotResponse(input);
    setMessages([...messages, userMsg, botMsg]);
    setInput('');
  };

  const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase();
  
    // Plant categories
    if (lowerInput.includes('indoor')) {
      const indoor = all_product.filter(p => p.category === 'indoor').slice(0, 6);
      return { sender: 'bot', text: `You might like these indoor plants: ${indoor.map(p => p.name).join(', ')}` };
    }
  
    if (lowerInput.includes('outdoor')) {
      const outdoor = all_product.filter(p => p.category === 'outdoor').slice(0, 6);
      return { sender: 'bot', text: `You might like these outdoor plants: ${outdoor.map(p => p.name).join(', ')}` };
    }
  
    if (lowerInput.includes('flowering')) {
      const flowering = all_product.filter(p => p.category === 'flowering').slice(0, 6);
      return { sender: 'bot', text: `Check out these flowering plants: ${flowering.map(p => p.name).join(', ')}` };
    }
  
    if (lowerInput.includes('cheap') || lowerInput.includes('budget')) {
      const cheap = all_product.sort((a, b) => a.new_price - b.new_price).slice(0, 6);
      return { sender: 'bot', text: `Looking for budget-friendly options? Try: ${cheap.map(p => p.name).join(', ')}` };
    }
  
    // Localized FAQs
    if (lowerInput.includes('delivery')) {
      return { sender: 'bot', text: 'We deliver all over Nepal 🇳🇵. Your plants usually arrive within 2–3 working days.' };
    }
  
    if (lowerInput.includes('return')) {
      return { sender: 'bot', text: 'You can return a plant within 7 days if it arrives damaged. Just contact our support team!' };
    }
  
    if (lowerInput.includes('hours') || lowerInput.includes('open')) {
      return { sender: 'bot', text: 'Our online store is open 24/7! Customer service is available 9 AM – 6 PM, Sunday to Friday.' };
    }
  
    if (lowerInput.includes('contact')) {
      return { sender: 'bot', text: 'Feel free to reach us at support@plantstore.com or call +977-9800000000.' };
    }
  
    if (lowerInput.includes('location') || lowerInput.includes('store')) {
      return { sender: 'bot', text: 'Our main nursery is in Baneshwor, Kathmandu 🌿. You can visit us or order online for home delivery!' };
    }
  
    if (lowerInput.includes('offer') || lowerInput.includes('discount')) {
      return { sender: 'bot', text: 'We’re running up to 20% discounts on select plants! Check the homepage to grab the deals.' };
    }
  
    if (lowerInput.includes('recommend') || lowerInput.includes('suggest')) {
      return { sender: 'bot', text: 'Let me know your preference — indoor, outdoor, low-maintenance, etc. — and I’ll suggest something perfect!' };
    }
  
    if (lowerInput.includes('season') || lowerInput.includes('winter') || lowerInput.includes('summer')) {
      return { sender: 'bot', text: 'Looking for seasonal plants? Snake Plant and Areca Palm are great for any season in Nepal!' };
    }
  
    return { sender: 'bot', text: "I'm not sure I understood that 🤔. You can ask me about indoor, outdoor, flowering, or budget-friendly plants, or even about delivery and offers." };
  };

  return (
    <div className="chatbot-container">
      <div className={`chatbox ${chatOpen ? 'open' : ''}`}>
        <div className="chat-header" onClick={() => setChatOpen(!chatOpen)}>
          {chatOpen ? 'Close Chat' : 'Chat with us 🌱'}
        </div>
        {chatOpen && (
          <div className="chat-body">
            <div className="chat-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender}`}>{msg.text}</div>
              ))}
            </div>
            <div className="chat-input">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
              />
              <button onClick={handleSend}>Send</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBot;