"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { FaInstagram, FaTiktok, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
const people = [
  {
    id: 1,
    name: "Instagram",
    designation: "",
    image: <FaInstagram />,
    link: "https://www.instagram.com/juan.czrz",
  },
  {
    id: 2,
    name: "Tiktok",
    designation: "",
    image: <FaTiktok />,
    link: "https://www.tiktok.com/@juan.czrz",
  },
  {
    id: 3,
    name: "Github",
    designation: "",
    image: <FaGithub />,
    link: "https://github.com/juancazarezg"
  },
  {
    id: 4,
    name: "Twitter",
    designation: "",
    image: <FaTwitter />,
    link: "https://twitter.com/juaneltemible",
  },
  {
    id: 5,
    name: "Linkedin",
    designation: "",
    image: <FaLinkedin />,
    link: "https://www.linkedin.com/in/juancazarez",
  }
];

export function RedesSociales() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
