import { useEffect, useState } from "react";
import "../styles/WhyWhistle.css";
import featuresData from "../data/featuresData.js";

function WhyWhistle() {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      setTimeout(() => {
        setFeatures(featuresData);
        setLoading(false);
      }, 1000);
    } catch (err) {
      setError("Unable to load features.");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <section className="why-whistle">
        <h2 className="loading">Loading Features...</h2>
      </section>
    );
  }

  if (error) {
    return (
      <section className="why-whistle">
        <h2 className="error">{error}</h2>
      </section>
    );
  }

  return (
    <section className="why-whistle">
      <div className="whistle-heading">
        <h2 className="section-title">Why Choose Whistle?</h2>
      </div>

      <div className="cards-container">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <img
              src={feature.image}
              alt={feature.title}
              className="feature-image"
            />

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyWhistle;