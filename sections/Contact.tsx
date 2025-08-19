"use client";
import Image from "next/image";
import { ContactRound, Send, Facebook, Linkedin, Github } from "lucide-react";
import { useState } from "react";

const socialLinksData = [
  {
    icon: Facebook,
    url: "www.facebook/exampleaccount.21",
  },
  {
    icon: Linkedin,
    url: "www.linkedin/sampleagain214",
  },
  {
    icon: Github,
    url: "github.com/repo/samplerepo21",
  },
];

interface FormDataTypes {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormDataTypes>({name: "", email: "", message: ""})

  return (
    <footer className="flex flex-col items-start gap-2.5 lg:pt-6 pt-12 md:pb-[50px] pb-8 lg:px-[144px] px-8 w-full bg-[#52525226] relative">
      <div className="absolute w-full lg:h-[120px] md:h-[100px] h-[80px] lg:top-[-120px] md:top-[-100px] top-[-80px] left-[50%] -translate-x-[50%] scale-y-[-1]">
        <Image
          src="/assets/svg/waves-opacity.svg"
          alt="transparent-svg-1"
          fill
        />
        <Image
          src="/assets/svg/waves-opacity.svg"
          alt="transparent-sv-2"
          fill
        />
      </div>
      <div className="absolute w-full lg:h-[120px] md:h-[100px] h-[80px] top-0 left-[50%] -translate-x-[50%]">
        <Image src="/assets/svg/waves.svg" alt="transparent-svg-1" fill />
        <Image
          src="/assets/svg/waves-opacity.svg"
          alt="transparent-sv-2"
          fill
        />
      </div>
      <div className="inline-flex w-full flex-col items-center justify-center absolute lg:top-[-81px] md:top-[-61px] top-[-41px] left-[50%] -translate-x-[50%]">
        <h2 className="relative w-fit font-semibold text-[#e2e2e2] lg:text-[32px] text-2xl tracking-[0] leading-[30px] whitespace-nowrap">
          Reach Out Today
        </h2>
        <p className="relative w-fit font-light text-[#e2e2e2] lg:text-xl text-xs text-center tracking-[0] lg:leading-[32px] leading-[18px] px-8">
          {
            "I'd love to hear from you! Send me a message using the form below, and I'll be in touch soon."
          }
        </p>
      </div>

      <div className="inline-flex items-center gap-2.5">
        <ContactRound className="md:w-6 w-[18px] md:h-6 h-[18px] stroke-current text-[#16A34A]"  />
        <h2 className="relative w-fit font-semibold text-[#e2e2e2] lg:text-[28px] md:text-2xl text-xl tracking-[0] leading-[normal]">
          Contact
        </h2>
      </div>

      <div className="flex md:flex-row flex-col items-start gap-2.5 px-0 pb-1 lg:pt-6 pt-2 w-full">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col items-start lg:gap-6 gap-2 pl-0 md:pr-5 py-0 lg:flex-1 w-full"
        >
          <label htmlFor="name" className="w-full relative z-50">
            <input
              type="text"
              placeholder="Name"
              id="name"
              required
              onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
              className="peer w-full items-center px-5 py-2.5 bg-[#52525226] rounded border border-solid border-neutral-700 text-neutral-400 lg:text-base text-sm font-semibold outline-0 focus:border-[#e2e2e2] focus:placeholder-transparent"
            />
            <span
            className={`absolute text-neutral-400 py-[1px] font-semibold lg:text-base text-sm rounded px-2 left-3 ${!!formData.name ? "-top-[18px] opacity-100" : "top-[10px] opacity-0  peer-focus:opacity-100 peer-focus:-top-[18px]" } bg-[#525252] peer-focus:border peer-focused:border-[#e2e2e2] transition-all duration-200`}
            >
              Name
            </span>
          </label>

          <label htmlFor="email" className="w-full relative z-50">
            <input
              type="email"
              id="email"
              placeholder="Email"
              required
              onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
              className="peer w-full items-center px-5 py-2.5 bg-[#52525226] rounded border border-solid border-neutral-700 text-neutral-400 lg:text-base text-sm font-semibold outline-0 focus:border-[#e2e2e2] focus:placeholder-transparent"
            />
             <span
            className={`absolute text-neutral-400 py-[1px] font-semibold lg:text-base text-sm rounded px-2 left-3 ${!!formData.email ? "-top-[18px] opacity-100" : "top-[10px] opacity-0  peer-focus:opacity-100 peer-focus:-top-[18px]" } bg-[#525252] peer-focus:border peer-focused:border-[#e2e2e2] transition-all duration-200`}
            >
              Emaill
            </span>
          </label>

          <textarea
            placeholder="Message"
            required
            className="flex items-start gap-2.5 pt-2.5 px-5 max-w-full text-wrap max-h-[160px] h-[160px] w-full bg-[#52525226] rounded border border-solid border-neutral-700 text-neutral-400 lg:text-base text-sm font-semibold outline-0 focus:border-[#e2e2e2]"
          />

          <div className="flex items-center justify-end gap-2.5 w-full rounded">
            <button
              type="submit"
              className="relative z-50 inline-flex items-center justify-center gap-2.5 px-4 py-1.5 bg-green-600 hover:bg-[#085D28] hover:scale-105 transition-all ease-in-out duration-500  rounded-[5px] border border-solid border-green-700 outline-0"
            >
              <Send className="lg:w-5 lg:h-5 w-4 h-4 text-[#e2e2e2]" />
              <div className="text-[#e2e2e2] lg:text-lg text-base relative w-fit mt-[-1.00px] font-semibold tracking-[0] leading-[normal]">
                Send
              </div>
            </button>
          </div>
        </form>

        <div className="flex flex-col items-start gap-3 lg:pl-10 lg:pr-5 py-0">
          <h3 className="relative w-fit font-semibold text-[#e2e2e2] lg:text-[28px] md:text-2xl text-xl tracking-[0] leading-[normal]">
            Socials
          </h3>

          <div className="inline-flex flex-col items-start gap-3 pl-5 pr-0 py-0">
            {socialLinksData.map((social, index) => (
              <div key={index} className="inline-flex items-center gap-3">
                <social.icon className="lg:w-[35px] md:w-7 w-6 lg:h-[35px] md:h-7 h-6 text-[#e2e2e2]" />
                <div className="relative w-fit font-semibold text-[#e2e2e2] lg:text-base text-sm tracking-[0] leading-[normal]">
                  {social.url}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute w-full lg:h-[120px] md:h-[100px] h-[80px] bottom-0 left-[50%] -translate-x-[50%] scale-y-[-1]">
        <Image
          src="/assets/svg/waves-opacity.svg"
          alt="transparent-sv-2"
          fill
        />
      </div>
    </footer>
  );
}
