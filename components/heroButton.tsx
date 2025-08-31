"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Image from "next/image";

export function HoverBorderGradientDemo() {
  return (
    <div className="my-2 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full cursor-pointer text-xl "
        as="button"
        className="bg-white text-black font-semibold dark:text-white flex items-center space-x-2"
      >
        <span>Get Started</span>
        {/* <AceternityLogo /> */}
      </HoverBorderGradient>
    </div>
  );
}

// const AceternityLogo = () => {
//   return (
//     <Image width={1000} height={1000} src="/heroButtonLogo.png" alt="heroImage"/>
//   );
// };
