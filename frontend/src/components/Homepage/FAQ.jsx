import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const faqs = [
  {
    question: "What livestreaming services do you offer?",
    answer: (
    <ul className="list-disc pl-5">
      <li>We provide high-quality livestreaming for events, conferences, and esports tournaments.</li>
      <li>Multi-platform streaming to YouTube, Facebook, Twitch, and custom RTMP servers.</li>
      <li>Professional production with overlays, graphics, and real-time engagement tools.</li>
    </ul>
    ),
  },
  {
    question: "How can digital marketing help my brand?",
    answer: "We offer social media management, SEO, paid ads, and influencer collaborations to boost brand visibility and engagement."
  },
  {
    question: "Do you provide full-scale event management?",
    answer: "Yes, we handle everything from planning, venue selection, logistics, and technical support to execution."
  },
  {
    question: "Can you produce content for my brand?",
    answer: "Absolutely! We create promotional videos, social media content, ads, and high-quality productions tailored to your brand’s needs."
  },
  {
    question: "What esports services do you provide?",
    answer: (
    <ul className="list-disc pl-5">
      <li>Esports tournament organization and management.</li>
      <li>Live streaming and broadcasting with real-time commentary.</li>
      <li>Player and team branding, marketing, and sponsorship assistance.</li>
    </ul>
    ),
  },
  {
    question: "Do you provide analytics for livestreamed events?",
    answer: "Yes, we offer detailed audience insights, engagement metrics, and viewer demographics to help optimize future events."
  },
  {
    question: "How do I get started with your services?",
    answer: "Simply reach out via our contact page, and our team will guide you through the process based on your requirements."
  },
  {
    question: "Can you manage social media campaigns?",
    answer: "Yes, we create and execute social media strategies, ad campaigns, and influencer partnerships to maximize reach."
  },
  {
    question: "What kind of equipment do you use for production?",
    answer: "We use high-end cameras, professional audio setups, and advanced editing tools to ensure top-tier content quality."
  },
  {
    question: "Do you offer custom packages for businesses?",
    answer: "Yes, we provide tailored packages based on your specific needs in livestreaming, media production, and digital marketing."
  },
  ];
  

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
  setOpenIndex(openIndex === index ? null : index);
  };

  return (
  <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 min-h-screen">
    <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-black dark:text-white">Frequently Asked Questions</h1>
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 shadow-md rounded-lg">
    {faqs.map((faq, index) => (
      <div key={index} className="mb-4 border-b border-gray-200 dark:border-gray-700">
      <button
        onClick={() => toggleFAQ(index)}
        className="w-full flex justify-between items-center p-4 text-left font-medium bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm sm:text-base text-black dark:text-white"
      >
        {faq.question}
        {openIndex === index ? <FaMinus className="text-black dark:text-white" /> : <FaPlus className="text-black dark:text-white" />}
      </button>
      {openIndex === index && <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-black dark:text-white text-sm sm:text-base">{faq.answer}</div>}
      </div>
    ))}
    </div>
  </div>
  );
}