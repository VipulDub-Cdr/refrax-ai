"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { img } from "motion/react-client";

export function HoverBorderGradientDemo() {
  return (
    <div className="my-2 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full cursor-pointer text-xl "
        as="button"
        className="bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <span>Get Started</span>
        <AceternityLogo />
      </HoverBorderGradient>
    </div>
  );
}

const AceternityLogo = () => {
  return (
    <img className="h-5 w-6" src="https://img.icons8.com/?size=100&id=7404&format=png&color=000000" alt="" />
  );
};
