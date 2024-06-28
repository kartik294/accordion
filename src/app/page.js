"use client";

import Image from "next/image";
import React, { useState } from "react";

const Faq = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleAccordion = (faqNumber) => {
    switch (faqNumber) {
      case 1:
        setIsOpen1(!isOpen1);
        setIsOpen2(false);
        setIsOpen3(false);
        break;
      case 2:
        setIsOpen1(false);
        setIsOpen2(!isOpen2);
        setIsOpen3(false);
        break;
      case 3:
        setIsOpen1(false);
        setIsOpen2(false);
        setIsOpen3(!isOpen3);
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full mx-auto flex flex-col items-center justify-start bg-pink-400">
      <div className="relative w-full">
        <Image
          width={1350}
          height={170}
          src="/rectangle.jpg"
          alt="rectangular background"
          className="object-cover w-full h-56 md:h-100"
        />
        
      </div>
      <div className="absolute block mx-8  px-8 md:px-20 pb-10 rounded-xl bg-white mt-24 shadow-lg">
        <div className="flex justify-start pt-10 mb-10 gap-x-4  ">
          <Image
            src="/star.svg"
            alt="star svg image"
            width={100}
            height={100}
            className="w-10 text-purple-900"
          />
          <span className=" left-1/2   text-purple-950 text-3xl font-bold   ">
          FAQs
        </span>
        </div>

        {/* FAQ Section 1 */}
        <div className="flex justify-between  mb-4 md:mb-6">
          <p className="font-bold text-lg md:text-xl text-purple-900">
            What is Frontend Mentor and how does it help me?{" "}
          </p>

         <div> 
          <button
            onClick={() => toggleAccordion(1)}
            className={`text-white rounded-full w-7 h-7  ${
              isOpen1 ? "bg-neutral-950" : "bg-purple-950"
            }`}
          >
            {isOpen1 ? "-" : "+"}
          </button></div>
        </div>
        
          {isOpen1 && (
            <p className="text-purple-900 flex justify-between flex-wrap mt-2 md:text-base">
              Frontend Mentor offers invaluable real-world{" "}
              <br className="hidden md:inline" /> web development challenges,
              sharpening my <br className="hidden md:inline" /> HTML, CSS, and
              JavaScript skills.
            </p>
          )}
        

        {/* FAQ Section 2 */}
        <div className="flex justify-between  mb-4 md:mb-6">
          <p className="font-bold text-lg md:text-xl text-purple-900">
            Is Frontend Mentor Free?{" "}
          </p>

          <div>
            <button
            onClick={() => toggleAccordion(2)}
            className={`text-white rounded-full w-7 h-7  ${
              isOpen2 ? "bg-neutral-950" : "bg-purple-950"
            }`}
          >
            {isOpen2 ? "-" : "+"}
          </button>
          </div>
        </div>

        <div>
          {isOpen2 && (
            <p className="text-purple-900 mt-2 md:text-base">
              Yes, it is free and it's helpful.
            </p>
          )}
        </div>

        {/* FAQ Section 3 */}
        <div className="flex mb-4 md:mb-6">
          <div className="flex justify-between">
            <p className="font-bold text-lg md:text-xl text-purple-900">
              Can I use Frontend Mentor projects in building my portfolio?{" "}
            </p>

           <div>
             <button
              onClick={() => toggleAccordion(3)}
            className={`text-white rounded-full w-7 h-7  ${
              isOpen3 ? "bg-neutral-950" : "bg-purple-950"
            }`}
            >
              {isOpen3 ? "-" : "+"}
            </button>
           </div>
          </div>
        </div>

        <div>
          {isOpen3 && (
            <p className="text-purple-900 mt-2 md:text-base">
              Yes, you can use it in building your portfolio.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
