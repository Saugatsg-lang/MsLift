"use client";
import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        form.reset();
      } else {
        setStatus({ type: "error", message: result.message || "Failed to send message." });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "Failed to send message." });
    } finally {
      setLoading(false);
    }
  };

  // Auto-hide with fade out after 3 seconds
  useEffect(() => {
    if (status) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 2500); // start fade at 2.5s
      const remove = setTimeout(() => setStatus(null), 3000); // fully remove at 3s
      return () => {
        clearTimeout(timer);
        clearTimeout(remove);
      };
    }
  }, [status]);

  return (
    <section id="contact" className="bg-white text-gray-800">
      {/* Page Title */}
      <div className="bg-gray-100 py-16 text-center">
        <h1 className="text-5xl font-bold">
          <span className="text-black">CONTACT</span>{' '}
              <span className="text-[#4169E1]">US</span>
          </h1>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Visit Office */}
          <div
            className="group flex flex-col items-left justify-left h-56 p-6 shadow-lg rounded-2xl border 
                      transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            style={{
              background:
                "linear-gradient(to right, rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.3))",
              color: "white",
            }}
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 mb-4">
              <FaMapMarkerAlt className="text-2xl text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Visit Our Office</h3>
            <p className="text-left">Ganapur-06,Banke, Nepalgunj, Nepal</p>
          </div>

          {/* Make a Call */}
<div
  className="group flex flex-col items-left justify-left h-56 p-6 shadow-lg rounded-2xl border 
            transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
  style={{
    background:
      "linear-gradient(to right, rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.3))",
    color: "white",
  }}
>
  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 mb-4">
    <FaPhoneAlt className="text-2xl text-white" />
  </div>
  <h3 className="text-lg font-semibold mb-2">Make a Call</h3>
  <a href="tel:+9779858037010" className="hover:underline">+977-9858037010</a>
  <a href="tel:+9779858033010" className="hover:underline">+977-9858033010</a>
  <a href="tel:+9779704588741" className="hover:underline">+977-9704588741</a>
</div>

{/* Send Email */}
<div
  className="group flex flex-col items-left justify-left h-56 p-6 shadow-lg rounded-2xl border 
            transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
  style={{
    background:
      "linear-gradient(to right, rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.3))",
    color: "white",
  }}
>
  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 mb-4">
    <FaEnvelope className="text-2xl text-white" />
  </div>
  <h3 className="text-lg font-semibold mb-2">Send Email</h3>
  <a
    href="mailto:ms.elevators080@gmail.com"
    className="hover:underline"
  >
    ms.elevators080@gmail.com
  </a>
</div>

        </div>

        {/* Map + Form */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[500px]">
  {/* Google Map */}
  <div className="w-full h-full">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3547.067809525394!2d81.6600944!3d28.1202725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3998672c8ef8441b%3A0xa9a1d0d52327d89!2sMS%20Elevators!5e0!3m2!1sen!2snp!4v1693383740000!5m2!1sen!2snp"
      width="100%"
      height="100%"
      className="rounded-xl shadow-lg"
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  {/* Contact Form */}
  <div className="shadow-lg rounded-2xl p-8 border bg-white h-full">
    <h3 className="text-2xl font-bold mb-6 text-center text-blue-900">Drop Your Message</h3>
            {status && (
              <div
                className={`mb-4 p-3 rounded-lg text-center font-medium transition-opacity duration-500 ${
                  visible ? "opacity-100" : "opacity-0"
                } ${
                  status.type === "success"
                    ? "bg-green-100 text-green-700 border border-green-300"
                    : "bg-red-100 text-red-700 border border-red-300"
                }`}
              >
                {status.message}
              </div>
            )}
            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full p-3 border rounded-lg"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full p-3 border rounded-lg"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Enter your message..."
                className="w-full p-3 border rounded-lg"
                required
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                className={`w-full text-white bg-blue-900 hover:bg-blue-800 font-semibold py-3 rounded-lg transition-all duration-300 ${
                  loading ? "bg-gray-400" : ""
                }`}
              >
                {loading ? "Sending..." : "SEND MESSAGE"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
