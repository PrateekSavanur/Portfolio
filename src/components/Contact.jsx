import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Contact() {
  // const USER_ID = import.meta.env.VITE_USER_ID;
  // const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  // const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const form = useRef();

  const [checkInput, setCheckInput] = useState(false);

  const [messageError, setMessageError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kvx2i9t",
        "template_cl8b9s8",
        form.current,
        "2HyGHr1l-6nQz6b3P"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );

    form.current.reset();
  };

  useEffect(() => {
    if (name && email && message) {
      if (countWords(message) >= 150) {
        setMessageError("");
        setCheckInput(true);
      } else {
        if (countWords(message) < 150) {
          setMessageError("Message must be more than 150 words");
        } else {
          setMessageError("");
        }

        setCheckInput(false);
      }
    } else {
      setCheckInput(false);
    }
  }, [email, message, name, checkInput]);

  const countWords = (message) => {
    return message.split(/\s+/).filter((word) => word.trim() !== "").length;
  };

  return (
    <div className="pt-8 bg-slate-300 h-[100vh] px-[30px] sm:px-[100px] md:px-[250px] font-mono">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-slate-300 rounded px-8 pt-6 pb-8 mb-4"
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            className={`shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none `}
            id="user_email"
            type="email"
            name="user_email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="shadow bg-slate-200 appearance-none border rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none"
            id="message"
            name="message"
            placeholder="Your Message"
            rows="6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {messageError && (
            <p className="text-red-400 text-xs italic">{messageError}</p>
          )}
        </div>

        <button
          className={`${
            !checkInput && "bg-gray-400 pointer-events-none"
          } bg-teal-400 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline `}
          disabled={!checkInput}
        >
          Send
        </button>
      </form>
    </div>
  );
}
