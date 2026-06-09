import { useState } from "react";
import "../styles/LeadForm.css";

function LeadForm() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ fullName, phoneNumber });
  };
  return <div className="form">
    <div className="one">
      <h1 className="doyou">Do you have Teeth Gap or Crooked Teeth?</h1>
      <div className="radio-group">
        <label>
          <input type="radio" name="options" value="option1"/> Yes
        </label>
        <label>
          <input type="radio" name="options" value="option2"/> No
        </label>
      </div>
    </div>
    <div className="two">
      <div className="first">
        <form className="lead-form">
          <input type="text" name="fullName" placeholder="Ajay Kumar" className="name"/>
          <input type="tel" name="phoneNumber" placeholder="+91 Mobile Number*" className="phone" />
          <button type="submit" className="submit-btn">
            Book a Free Scan
          </button>
        </form>
      </div>
      <div className="second">
         <input type="checkbox"></input>
         <p className="hereby">I hereby consent to recieve calls / messages from Whistle and its partners and override DND settings.</p>
      </div>
    </div>
  </div>
}

export default LeadForm;