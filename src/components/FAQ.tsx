import React, { useState } from "react";

const faqData = [
  {
    question: "How do I make a payment?",
    answer:
      "You can make payments easily through our secure online portal using credit/debit cards or EFT. We also offer options for recurring payments and will send reminders before your due date.",
  },
  {
    question: "How do I upgrade or change my plan?",
    answer:
      "Upgrading or changing your plan is simple. Just contact our support team or visit your account dashboard online to select a new plan that fits your needs. Changes take effect immediately or on your next billing cycle.",
  },
  {
    question: "What is the installation process like?",
    answer:
      "Our professional technician will schedule a visit to install fiber optic cables and the Optical Network Terminal (ONT) at your home. The process typically takes 2-6 hours and includes testing to ensure optimal connection.",
  },
  {
    question: "Are there any contracts or hidden fees?",
    answer:
      "No contracts and no hidden fees. We offer month-to-month plans with transparent pricing so you can enjoy flexibility and peace of mind.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "Our local support team is available 24/7 via phone, email, or live chat to assist you with any questions or issues.",
  },
  {
    question: "Do you offer a free trial or money-back guarantee?",
    answer:
      "Yes, we offer a 30-day risk-free trial so you can experience our ultra-fast fiber internet with no commitment.",
  },
  {
    question: "What equipment do I need for fiber internet?",
    answer:
      "We provide all necessary equipment including the Optical Network Terminal (ONT) and a compatible Wi-Fi router. Our technician will install and configure everything during your appointment.",
  },
  {
    question: "How do I ensure the best Wi-Fi performance at home?",
    answer:
      "Place your Wi-Fi router in a central, open location away from interference sources. For larger homes, consider mesh Wi-Fi systems or wired connections for optimal coverage.",
  },
  {
    question: "Can I cancel my service anytime?",
    answer:
      "Yes, you can cancel your service at any time without penalties. Just notify our support team and we'll assist with the process.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [question, setQuestion] = useState("");

  const handleAccordion = (idx: number) => {
    setOpenIndex(idx === openIndex ? -1 : idx);
  };

  return (
    <section id="faq" className="bg-white py-12 px-4 md:px-0 mt-4">
      <div className="max-w-6xl mx-auto rounded-xl shadow-md bg-white flex flex-col md:flex-row gap-8 p-8">
        {/* Left Column */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-gray-600 mb-6">
            learn more about our services, plans, and support options. If you have any other questions, feel free to reach out to us!
          </p>
          {/* <div className="bg-gray-50 border rounded-lg p-4">
            <div className="font-medium mb-2 text-gray-800">
              Can’t locate the answers you need?
            </div>
            <div className="text-sm text-gray-500 mb-3">
              We’re here to help with any questions you have!
            </div>
            <input
              type="text"
              placeholder="write here..."
              value={question}
              onChange={e => setQuestion(e.target.value)}
              className="w-full border rounded px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
            <button
              className="bg-indigo-600 text-white px-4 py-2 rounded font-semibold hover:bg-indigo-700 transition"
              disabled={!question.trim()}
            >
              Sent Now
            </button>
          </div> */}
          <div>
            {/* background image */}
            <img
              src="/faq-bg.jpg"
              alt="FAQ Background"
              className="mt-6 w-full h-auto rounded-lg shadow-md"
              style={{ maxWidth: "100%", height: "auto" }}
              />
          </div>
        </div>
        {/* Right Column */}
        <div className="md:w-1/2">
          <div className="space-y-2">
            {faqData.map((item, idx) => (
              <div
                key={item.question}
                className="border rounded-lg bg-white shadow-sm"
              >
                <button
                  className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-900 focus:outline-none"
                  onClick={() => handleAccordion(idx)}
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-content-${idx}`}
                >
                  <span>{item.question}</span>
                  <span className="ml-2">
                    {openIndex === idx ? (
                      <span>&#10005;</span> // X icon
                    ) : (
                      <span>+</span>
                    )}
                  </span>
                </button>
                {openIndex === idx && (
                  <div
                    id={`faq-content-${idx}`}
                    className="px-4 pb-4 text-gray-600 text-sm"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
