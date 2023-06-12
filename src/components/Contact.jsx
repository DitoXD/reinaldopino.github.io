import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center p-4"
    >
      <form method="POST" action="https://getform.io/f/fabb62f9-71f6-4051-9340-5ada5c9e982c" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#1abbec]">
            Contact
          </p>
          <p className="py-4">
            Submit the form below or send me an email -
            <span>
              <a className="font-bold" href="mailto:reinaldopino4@gmail.com">
                reinaldopino4@gmail.com
              </a>
            </span>
          </p>
        </div>
        <input className="p-2 bg-[#ccd6f6] text-black" type="text" placeholder="Name" name="name" />
        <input className='my-4 p-2 bg-[#ccd6f6] text-black' type="email" placeholder='Email' name='email' />
        <textarea className="bg-[#ccd6f6] p-2 text-black" name="message" rows="10" placeholder='Message'></textarea>
        <button className="text-white border-2 hover:bg-[#1abbec] hover:border-[#1abbec] px-4 py-3 my-8 mx-auto flex items-center duration-300">Let's Collaborate</button>
      </form>
    </div>
  );
};

export default Contact;
