import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Heading from "../heading/index";
import Paragraph from "../para/index";
import NButton from "../button/index";

const Footer = () => {
  const sections = [
    {
      title: "Get to know us",
      links: ["Careers", "About Amazon", "Investor Relations", "Amazon Devices"]
    },
    {
      title: "Make Money with Us",
      links: ["Sell products on Amazon", "Sell on Amazon Business", "Sell apps", "Become an Affiliate"]
    },
    {
      title: "Amazon Payment Products",
      links: ["Amazon Business Card", "Shop with Points", "Reload Your Balance", "Gift Cards"]
    },
    {
      title: "Let Us Help You",
      links: ["Amazon and COVID-19", "Returns & Replacements", "Customer Service", "Manage Your Content and Devices"]
    }
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaYoutube />, href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {sections.map((section, idx) => (
          <div key={idx}>
            <Heading className="text-white text-lg mb-4">{section.title}</Heading>
            <ul className="space-y-2">
              {section.links.map((link, i) => (
                <li
                  key={i}
                  className="cursor-pointer hover:text-white transition-colors duration-300"
                >
                  <Paragraph className="text-base">{link}</Paragraph>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social Media Section */}
        <div>
          <Heading className="text-white text-lg mb-4">Follow Us</Heading>
          <div className="flex space-x-4 mt-2 text-2xl">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="text-gray-400 hover:text-white transition transform hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 border-t border-gray-700"></div>

      {/* Bottom Footer */}
      <div className="mt-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 text-gray-400 text-sm">
        <Paragraph className="mb-2 md:mb-0">© 2025 Amazon Prime Video. All Rights Reserved.</Paragraph>

        <div className="flex space-x-4">
          <NButton className="bg-gray-700 text-white px-3 py-1 text-sm hover:bg-gray-600">English</NButton>
          <NButton className="bg-gray-700 text-white px-3 py-1 text-sm hover:bg-gray-600">Pakistan</NButton>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
