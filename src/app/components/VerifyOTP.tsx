"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";

export default function VerifyOTP() {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  // console.log("Email:", email);

  if (!email) { 
    // Redirect to the sign-up page if no email is provided
    router.push("/signup");
  }

  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  });

  const handleChange = (index: number, value: string) => {
    if (/^\d+$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }

    if (value && index <= 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      // Send a POST request to the verification endpoint
      
      // join the strings
      const validOtp: string = otp.join("")
      const response = await axios.post(
        "https://akil-backend.onrender.com/verify-email",
        {
          email,
          OTP: validOtp,
        }
      );

      if (response.status === 200) {
        setSuccess("OTP verified successfully!");
        router.push("/signin"); // Redirect to the sign-in page on success
      }
    } catch (error) {
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-custom-rad0 shadow-lg w-80">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Verify Email
        </h2>
        <p className="text-sm text-center text-gray-600 mb-6">
          We&apos;ve sent a verification code to the email address you provided.
          To complete the verification process, please enter the code here.
        </p>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}

        <div className="flex justify-between mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              value={digit}
              maxLength={1}
              onChange={(e) => handleChange(index, e.target.value)}
              className="w-12 h-12 text-center text-2xl border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            />
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mb-4">
          You can request to{" "}
          <span className="text-blue-500 cursor-pointer">Resend code</span> in{" "}
          {`0:${timer < 10 ? `0${timer}` : timer}`}
        </p>

        <button
          onClick={handleSubmit}
          className="w-full bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700 transition ease-in-out duration-350"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
