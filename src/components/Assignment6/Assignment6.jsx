import React, { useState } from "react";
import "./Assignment6.css";

function Assignment6() {
  const [step, setStep] = useState("phoneNumber");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");

  const handlePhoneNumberSubmit = (e) => {
    e.preventDefault();
    // Add validation for phone number if needed
    setStep("otp");
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Add OTP validation if needed
    alert(`Phone Number: ${phoneNumber}, OTP: ${otp}`);
  };

  return (
    <div className="App">
      {step === "phoneNumber" ? (
        <form onSubmit={handlePhoneNumberSubmit}>
          <h2>Enter Phone Number</h2>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
            required
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <form onSubmit={handleOtpSubmit}>
          <h2>Enter OTP</h2>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            required
          />
          <button type="submit">Verify OTP</button>
        </form>
      )}
    </div>
  );
}

export default Assignment6;
