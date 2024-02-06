import React, { useState } from "react";
import "../styles.css";

const Login = function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Form Validation: Implement basic form validation
  const validateForm = function () {
    if (!email.includes("@") || password.length < 8) {
      // I'll validate both at once for security
      setError("Invalid email or password.");
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      setSuccess(true);
      setError(null);
    } else {
      setSuccess(false);
    }
  };

  return (
    <div class="flex justify-center items-center">
      <form
        class="p-14 border border-solid border-gray-300 rounded-xl"
        onSubmit={handleSubmit}
      >
        <h2 class="text-4xl font-semibold mb-6">Login</h2>
        {error && <p class="text-red-500 mb-6">{error}</p>}
        {success && <p class="text-green-500 mb-6">You have logged in</p>}
        <div class="mb-6">
          <label class="block mb-2">Email:</label>
          <input
            type="email" // This already provides email validation but I've added more above to showcase
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            class="p-2 text-base text-black"
          />
        </div>
        <div className="mb-6">
          <label class="block mb-2">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            class="p-2 text-base text-black"
          />
        </div>
        <button
          class="bg-green-600 text-white w-40 rounded-md cursor-pointer p-1 text-base mt-4"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
