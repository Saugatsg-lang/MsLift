"use client";
import { useState } from "react";
import { toast } from "sonner"; //  popup notifications

const Career = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/career", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (result.success) {
        toast.success("🎉 Submitted Successfully!", {
          description: "We will get back to you soon.",
          duration: 3000, // disappears after 3 sec
          position: "top-center",
        });
        form.reset();
      } else {
        toast.error("❌ Failed to send. Try again later.", {
          duration: 3000,
          position: "top-center",
        });
      }
    } catch (err) {
      toast.error("⚠️ Something went wrong. Please try again.", {
        duration: 3000,
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="career" className="bg-white p-6 font-sans">
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        {/* LEFT COLUMN - TEXT CONTENT */}
        <div className="md:w-1/2">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold text-center mb-10">
              <span style={{ color: "#1E90FF" }}>MAKE CAREER</span>{" "}
              <span style={{ color: "#000" }}>WITH US!</span>
            </h2>

            <p className="mb-4">
              If you have the talent, drive, and ambition to grow, there's plenty
              of room to rise with us. At MS ELEVATORS, we’re not just lifting
              buildings, we’re elevating careers.
            </p>
            <p className="mb-4 font-semibold">Email us your resume:</p>
            <p>ms.elevators080@gmail.com</p>
          </div>

          {/* CURRENT OPENING */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">CURRENT OPENING</h2>
            <div className="border-2 border-gray-300 p-4">
              <h3 className="text-xl font-bold mb-2">Available Soon</h3>
              <div className="flex justify-between">
                <span>10/12th Pass</span>
                <span>Fresher/Experienced</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - FORM */}
        <div className="md:w-1/2">
          <h2
            className="text-2xl font-semibold mb-6 inline-block"
            style={{
              color: "#000",
              borderBottom: "3px solid #1E90FF",
              paddingBottom: "4px",
            }}
          >
            JOIN OUR <span style={{ color: "#1E90FF" }}>TEAM</span>
          </h2>

          <form
            onSubmit={handleSubmit}
            className="bg-gray-100 p-6 rounded-lg"
          >
            <div className="mb-4">
              <label className="block mb-1 text-black">Your Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-black">Your Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-black">Your Mobile No.</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-black">Subject</label>
              <input
                type="text"
                name="subject"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-black">Upload Your CV</label>
              <input
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx"
                required
                className="w-full p-2 border border-gray-300 rounded bg-white"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-1 text-black">
                Your Message (optional)
              </label>
              <textarea
                name="message"
                className="w-full p-2 border border-gray-300 rounded h-24"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center bg-blue-900 text-white py-2 px-6 rounded-md w-full transition-all duration-300 hover:bg-blue-700"
            >
              {loading ? (
                <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Career;
