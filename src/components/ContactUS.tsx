import React from "react";

export default function ContactUs() {
  return (
    <div className="bg-black p-6 sm:p-8">
      <div className="my-7">
        <h2 className="text-5xl sm:text-1xl text-white font-bold leading-[70.44px] tracking-normal text-center">
          Get Your Pipeline Rich With <span className="block text-[#00D11F]">Qualified Deals</span>
        </h2>
        <p className="text-gray-400 text-center mt-2 max-w-4xl mx-auto text-[16px] sm:text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, risus eget auctor laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, risus eget auctor laoreet.
        </p>
      </div>
      <div className="max-w-6xl mx-auto border border-[#00D11F] rounded-xl flex flex-col sm:flex-row overflow-hidden">
        <div className="relative w-full sm:w-1/2 p-6 sm:p-12 bg-cover bg-center text-white border-r border-[#00D11F]" style={{ backgroundImage: "url('/image/ContactUS.jpg')" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-[#006A10] to-[#006A10] opacity-80"></div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Contact <span className="text-[#00D11F]">Information</span>
            </h2>
            <p className="mt-4 sm:mt-6">Say something to start a live chat!</p>
            <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              <li className="flex items-center gap-2 sm:gap-3">
                <i className="fas fa-phone-alt text-[#00D11F]"></i>
                +1 (555) 555 1212
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <i className="fas fa-globe text-[#00D11F]"></i>
                www.rivio.io
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <i className="fas fa-envelope text-[#00D11F]"></i>
                example@rivio.io
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <i className="fas fa-map-marker-alt text-[#00D11F]"></i>
                132 Dartmouth Street Boston, MA 02156
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full sm:w-1/2 bg-[#0e2311] p-6 sm:p-10 border-l border-[#00D11F]">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Send Us a <span className="text-[#00D11F]">Message</span>
          </h2>
          <form className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 sm:p-4 bg-[#006A1033] border border-[#00D11F] text-white rounded-lg"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 sm:p-4 bg-[#006A1033] border border-[#00D11F] text-white rounded-lg"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 sm:p-4 bg-[#006A1033] border border-[#00D11F] text-white rounded-lg"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 sm:p-4 bg-[#006A1033] border border-[#00D11F] text-white rounded-lg"
              />
            </div>
            <textarea
              placeholder="Write your message..."
              className="w-full p-3 sm:p-4 bg-[#006A1033] border border-[#00D11F] text-white rounded-lg"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 sm:py-4 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
