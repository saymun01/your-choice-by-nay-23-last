import React from "react";
import QrYcWa from "../../assets/your choice whatsapp qr.jpg";
import WhatsappSadaLogo from "../../assets/Whatsapp_white_logo-removebg-preview.png";
import MassengerLogo from "../../assets/massenger_icon-removebg-preview.png";

const About = () => {
  return (
    <div className="pt-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="pb-10">
        <div>
          <p className="font-semibold text-[#F90] text-2xl text-center">
            <span className="text-red-600 text-3xl">*</span>Note: আপনার যেকোনো
            সমস্যার জন্য হোয়াটসঅ্যাপ অথবা মেসেঞ্জারের মাধ্যমে যোগাযোগ <br />
            করুন।
          </p>
        </div>
        <div className="grid justify-items-center mt-10">
          <img className="w-72 rounded-lg" src={QrYcWa} />
        </div>
        <div className="font-semibold text-[#F90] text-xl text-center mt-2">
          <p className="">
            Scan this Qr Code or, <br />
            Click the 'Masege WhatsApp'
          </p>
        </div>
        <div className="grid justify-items-center mt-2">
          <a href="https://wa.link/g8cia4" target="_blank" rel="noopener noreferrer">
            <button className="bg-[#25d366] text-white p-4 rounded-3xl   text-xl flex">
              WhatsApp <img className="w-8 ml-2" src={WhatsappSadaLogo} />
            </button>
          </a>
        </div>

        <div className="font-semibold text-[#F90] text-xl text-center mt-10">
          <p>You Can also Masege Facebook Page Messenger</p>
        </div>
        <div className="grid justify-items-center mt-2">
          <a href="https://www.facebook.com/profile.php?id=100091368524080&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <button className="bg-[#0695FF] text-white p-4 rounded-3xl   text-xl flex">
              Messenger <img className="w-8 ml-2" src={MassengerLogo} />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
