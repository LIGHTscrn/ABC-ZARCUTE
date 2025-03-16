import React, { useState } from 'react';
import axios from 'axios';

export default function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
        if (input.trim()) {
            const userMessage = { text: input, sender: 'user' };
            setMessages([...messages, userMessage]);
            setInput('');

            try {
                const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
                    prompt: input,
                    max_tokens: 150,
                    n: 1,
                    stop: null,
                    temperature: 0.7,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
                    },
                });

                const botMessage = { text: response.data.choices[0].text.trim(), sender: 'bot' };
                setMessages(prevMessages => [...prevMessages, botMessage]);
            } catch (error) {
                console.error('Error fetching response from OpenAI:', error);
                const errorMessage = { text: 'Sorry, something went wrong. Please try again later.', sender: 'bot' };
                setMessages(prevMessages => [...prevMessages, errorMessage]);
            }
        }
    };

    return (
        <div className="fixed bottom-4 right-4 w-80 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
            <div className="h-64 overflow-y-auto">
                {messages.map((message, index) => (
                    <div key={index} className={`my-2 p-2 rounded ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 dark:bg-gray-700 text-black dark:text-white'}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="flex mt-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 p-2 border rounded-l-lg dark:bg-gray-700 dark:text-white"
                />
                <button onClick={handleSend} className="p-2 bg-blue-500 text-white rounded-r-lg">Send</button>
            </div>
        </div>
    );
}