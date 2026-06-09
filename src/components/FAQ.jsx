import { useState } from "react";
import faqData from "../data/faqData";
import "../styles/FAQ.css";

function FAQ() {

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(
      openIndex === index ? null : index
    );
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title"> <span className="got">Got Questions?</span> We've got answers </h2>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div className="faq-item" key={faq.id} >
            <div className="faq-question"
              onClick={() =>
                handleToggle(index)
              }>
              <h3>{faq.question}</h3>
              <span>{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
export default FAQ;