import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function LoginForm() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", input);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      {/* Header */}
      <header className="bg-black px-6 py-5 ">
        <img src="/kindpng_1462157.png" alt="Uber Logo" className="w-15 mx-8" />
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          {/* Title */}
          <h1 className="text-[32px] font-semibold leading-tight mb-8">
            What's your phone number or email?
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Input */}
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter phone number or email"
              className="w-full px-4 py-4 text-base rounded-lg font-semibold bg-gray-100 border border-gray-200 focus:bg-white focus:border-black focus:shadow-[0_0_0_1px_black] outline-none transition"
            />

            {/* Continue Button (Pure Black) */}
            <button
              type="submit"
              disabled={!input}
              className="w-full py-4 bg-black cursor-pointer rounded-lg text-white font-medium hover:bg-black/80 transition"
            >
              Continue
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-1 border-t border-black"></div>
            <span className="mx-4 text-sm text-gray-500">or</span>
            <div className="flex-1 border-t border-black"></div>
          </div>

          {/* Social Buttons */}
          <div className="space-y-3">
            {/* Google */}
            <button className="w-full py-4 rounded-lg cursor-pointer bg-gray-100 border border-gray-200 flex items-center justify-center gap-3 hover:bg-gray-200 transition">
              <FcGoogle className="text-xl" />
              <span className="font-medium text-black">
                Continue with Google
              </span>
            </button>

            {/* Apple */}
            <button className="w-full py-4 rounded-lg cursor-pointer bg-gray-100 border border-gray-200 flex items-center justify-center gap-3 hover:bg-gray-200 transition">
              <FaApple className="text-xl text-black" />
              <span className="font-medium text-black">
                Continue with Apple
              </span>
            </button>
          </div>

          {/* Footer Text */}
          <p className="mt-10 text-xs text-gray-600 leading-relaxed">
            By continuing, you agree to calls, including by autodialler,
            WhatsApp or texts from Uber and its affiliates.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-6 text-xs text-gray-600 flex gap-6">
        <a href="#" className="hover:text-black">
          Privacy
        </a>
        <a href="#" className="hover:text-black">
          Accessibility
        </a>
        <a href="#" className="hover:text-black">
          Terms
        </a>
      </footer>
    </div>
  );
}
