import React, { useState } from 'react';

export default function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const responses = {
        "hello": "Hi there! How can I help you today?",
        "hi": "Hello! How can I assist you?",
        "what services do you offer?": "We offer livestreaming, digital marketing, event management, and media production services.",
        "how can i contact you?": "You can contact us via our contact page or email us at contact@zarcuit.com.",
        "thank you": "You're welcome! If you have any other questions, feel free to ask.",
        "thanks": "You're welcome! How else can I assist you?",
        "what is your name?": "I am your friendly chatbot here to assist you with your queries.",
        "who are you?": "I am a chatbot created to help you with information about our services.",
        "what is livestreaming?": "Livestreaming is broadcasting live video content over the internet.",
        "what is digital marketing?": "Digital marketing involves promoting products or services using digital channels like social media, search engines, and email.",
        "what is event management?": "Event management involves planning, organizing, and executing events such as conferences, concerts, and weddings.",
        "what is media production?": "Media production involves creating content such as videos, graphics, and audio for various platforms.",
        "how do i book a service?": "You can book a service by visiting our website and filling out the contact form or by emailing us at contact@zarcuit.com.",
        "do you offer support?": "Yes, we offer support for all our services. You can reach out to us via our contact page.",
        "where are you located?": "We are located in [Your Location]. You can find more details on our contact page.",
        "what are your working hours?": "Our working hours are from 9 AM to 6 PM, Monday to Friday.",
        "how much do your services cost?": "The cost of our services varies depending on the requirements. Please contact us for a detailed quote.",
        "can you help with social media?": "Yes, we offer social media management and marketing services.",
        "do you provide analytics?": "Yes, we provide detailed analytics for all our services to help you measure performance.",
        "how can i get a quote?": "You can get a quote by contacting us through our website or emailing us at contact@zarcuit.com.",
        "what payment methods do you accept?": "We accept various payment methods including credit cards, PayPal, and bank transfers.",
        "do you offer custom packages?": "Yes, we offer custom packages tailored to your specific needs.",
        "can i see some examples of your work?": "Yes, you can view examples of our work on our portfolio page on our website.",
        "how long have you been in business?": "We have been in business for over [X] years, providing top-notch services to our clients.",
        "do you offer training?": "Yes, we offer training sessions for our services. Please contact us for more details.",
        "what is your refund policy?": "Our refund policy is detailed on our website. Please refer to it for more information.",
        "how do i cancel a service?": "You can cancel a service by contacting us through our website or emailing us at contact@zarcuit.com.",
        "do you have a mobile app?": "Currently, we do not have a mobile app, but our website is mobile-friendly.",
        "can i reschedule a service?": "Yes, you can reschedule a service by contacting us in advance.",
        "do you offer discounts?": "We offer discounts on bulk bookings and for returning customers. Please contact us for more details.",
    };

    const handleSend = () => {
        if (input.trim()) {
            const userMessage = { text: input, sender: 'user' };
            setMessages([...messages, userMessage]);
            setInput('');

            const responseText = responses[input.toLowerCase()] || "Sorry, I don't understand that. Can you please rephrase?";
            const botMessage = { text: responseText, sender: 'bot' };
            setMessages(prevMessages => [...prevMessages, botMessage]);
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
