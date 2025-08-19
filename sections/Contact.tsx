"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import {
  ContactRound,
  Send,
  Facebook,
  Linkedin,
  Github,
} from "lucide-react";

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

export default function Contact() {
  return (
    <footer className="flex flex-col items-start gap-2.5 pt-6 pb-[50px] px-40 w-full bg-[#52525226] relative">
      <div className="absolute w-full h-[120px] top-[-120px] left-[50%] -translate-x-[50%] scale-y-[-1]">
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
      <div className="absolute w-full h-[120px] top-0 left-[50%] -translate-x-[50%]">
        <Image
          src="/assets/svg/waves.svg"
          alt="transparent-svg-1"
          fill
        />
        <Image
          src="/assets/svg/waves-opacity.svg"
          alt="transparent-sv-2"
          fill
        />
      </div>
      <div className="inline-flex w-full flex-col items-center justify-center absolute top-[-81px] left-[50%] -translate-x-[50%]">
        <h2 className="relative w-fit font-semibold text-[#e2e2e2] text-[32px] tracking-[0] leading-[30px] whitespace-nowrap">
          Reach Out Today
        </h2>
        <p className="relative w-fit font-light text-[#e2e2e2] text-xl tracking-[0] leading-[42px] whitespace-nowrap">
          {
            "I'd love to hear from you! Send me a message using the form below, and I'll be in touch soon."
          }
        </p>
      </div>

      <div className="inline-flex items-center gap-2.5">
        <ContactRound className="w-[26px] h-[26px] text-[#16A34A]" />
        <h2 className="relative w-fit font-semibold text-[#e2e2e2] text-[28px] tracking-[0] leading-[normal]">
          Contact
        </h2>
      </div>

      <div className="flex items-start gap-2.5 px-0 py-1 w-full">
        <div className="flex flex-col items-start gap-3 pl-0 pr-5 py-0 flex-1 grow">
          <Input
            placeholder="Name"
            className="relative z-50 items-center px-5 py-2.5 bg-[#52525226] rounded border border-solid border-neutral-700 text-neutral-400 text-base font-semibold"
          />

          <Input
            placeholder="Email"
            className="items-center px-5 py-2.5 bg-[#52525226] rounded border border-solid border-neutral-700 text-neutral-400 text-base font-semibold"
          />

          <textarea
            placeholder="Message"
            className="flex items-start gap-2.5 pt-2.5 px-5 max-w-full text-wrap max-h-[160px] h-[160px] w-full bg-[#52525226] rounded border border-solid border-neutral-700 text-neutral-400 text-base font-semibold"
          />

          <div className="flex items-center justify-end gap-2.5 w-full rounded">
            <button className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 bg-green-600 rounded-[5px] border border-solid border-green-700">
              <Send className="w-5 h-5 text-[#e2e2e2]" />
              <div className="text-[#e2e2e2] text-lg relative w-fit mt-[-1.00px] font-semibold tracking-[0] leading-[normal]">
                Send
              </div>
            </button>
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 px-10 py-0 flex-1 self-stretch grow">
          <h3 className="relative w-fit font-semibold text-[#e2e2e2] text-2xl tracking-[0] leading-[normal]">
            Socials
          </h3>

          <div className="inline-flex flex-col items-start gap-3 pl-5 pr-0 py-0">
            {socialLinksData.map((social, index) => (
              <div key={index} className="inline-flex items-center gap-3">
                <social.icon className="w-[35px] h-[35px] text-[#e2e2e2]" />
                <div className="relative w-fit font-semibold text-[#e2e2e2] text-base tracking-[0] leading-[normal]">
                  {social.url}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute w-full h-[120px] bottom-0 left-[50%] -translate-x-[50%] scale-y-[-1]">
        <Image
          src="/assets/svg/waves-opacity.svg"
          alt="transparent-sv-2"
          fill
        />
      </div>
    </footer>
  );
}
