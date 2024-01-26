import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const USER_ID = import.meta.env.VITE_USER_ID;
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const form = useRef();

  const [checkInput, setCheckInput] = useState(false);
  const [emailError, setEmailError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    form.current.reset();
  };

  // Function to handle input change
  const handleInputChange = () => {
    const nameInput = form.current.user_name.value;
    const emailInput = form.current.user_email.value;
    const messageInput = form.current.message.value;

    // Check if all inputs are filled
    if (nameInput && emailInput && messageInput) {
      // Check if email is valid
      if (validateEmail(emailInput)) {
        // Check if message contains at least 150 words
        if (countWords(messageInput) >= 150) {
          setEmailError("");
          setCheckInput(true);
        } else {
          setEmailError("Message should contain at least 150 words.");
          setCheckInput(false);
        }
      } else {
        setEmailError("Please enter a valid email address.");
        setCheckInput(false);
      }
    } else {
      setEmailError("");
      setCheckInput(false);
    }
  };

  // Function to count words in the message
  const countWords = (message) => {
    return message.split(/\s+/).filter((word) => word.trim() !== "").length;
  };

  // Function to validate email format using regular expression
  const validateEmail = (email) => {
    // Regular expression for email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="pt-8 bg-slate-300 h-[100vh] px-[30px] sm:px-[100px] md:px-[250px] font-mono">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-slate-300 rounded px-8 pt-6 pb-8 mb-4"
        onChange={handleInputChange} // Call handleInputChange on input change
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="user_name"
          >
            Name
          </label>
          <input
            className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none"
            id="user_name"
            type="text"
            name="user_name"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="user_email"
          >
            Email
          </label>
          <input
            className={`shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none ${
              emailError && "border-red-500"
            }`}
            id="user_email"
            type="email"
            name="user_email"
            placeholder="Your Email"
          />
          {emailError && (
            <p className="text-red-500 text-xs italic">{emailError}</p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="message"
          >
            Message [min 150 words]
          </label>
          <textarea
            className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none"
            id="message"
            name="message"
            placeholder="Your Message"
            rows="6"
          />
        </div>

        <button
          className={`bg-teal-400 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline ${
            !checkInput && "bg-gray-400 pointer-events-none"
          }`}
          disabled={!checkInput}
        >
          Send
        </button>
      </form>
    </div>
  );
}
