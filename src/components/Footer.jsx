/** @format */

import Section from "./Section";
import { brainwave } from "../assets";
import { OurLinks, OtherLinks } from "../constants";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Section
      crosses
      className="px-4 sm:px-8 lg:px-12 xl:px-32 2xl:px-56 !py-10 "
      id={"Footer"}
    >
      <div className=" flex flex-col lg:flex-row">
        <div className="absolute top-0 left-10 max-w-full max-h-full">
          <img
            className="w-full h-full"
            src={"/footer-bg.png"}
            width={550}
            height={550}
            alt="Grid"
          />
        </div>
        {/* First Column: Company Logo and Description */}
        <div className="w-full md:w-1/2 lg:w-2/6 lg:mx-4 lg:pr-8">
          <img
            src={brainwave}
            alt="Company Logo"
            className="w-38 h-auto mb-4"
          />
          <p className="body-2 text-n-4 mb-4 font-code">
            At [Your Company Name], we provide world-class IT services tailored
            to meet your business needs. Our expertise in web, mobile, and
            software development ensures seamless digital experiences.
          </p>
        </div>

        {/* Third Column: Company */}
        <div className="w-full md:w-1/8 lg:w-1/6 mt-20 lg:mt-0 lg:mx-4">
          <h6 className="text-lg font-semibold  uppercase h-6 font-code">
            Our Links
          </h6>
          <ul className="text-n-4 mt-4">
            {OurLinks.map((link, index) => (
              <Link key={index} to={link.url} className="cursor-pointer">
                <li className="mt-2 font-code hover:text-n-1">{link.title}</li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Second Column: Services */}
        <div className="w-full lg:w-1/4 mt-20 lg:mt-0 lg:mx-4">
          <h6 className="text-lg font-semibold  uppercase h-6 font-code">
            Services
          </h6>
          <ul className="text-n-4 mt-4">
            <li
              onClick={() => console.log("hello world")}
              className="mt-2 font-code"
            >
              Web Development
            </li>
            <li className="mt-2 font-code">Mobile App Development</li>
            <li className="mt-2 font-code">Custom Software Development</li>
            <li className="mt-2 font-code">UI/UX Design</li>
            <li className="mt-2 font-code">Dedicated Development Team</li>
          </ul>
        </div>

        {/* Fourth Column: Resources */}
        <div className="w-full md:w-1/8 lg:w-1/6 mt-20 lg:mt-0 lg:mx-4">
          <h6 className="text-lg font-semibold  uppercase h-6 font-code">
            Other Links
          </h6>
          <ul className="text-n-4 mt-4">
            <li className="mt-2 font-code">
              <a href="/FAQ" className="hover:text-n-1">
                FAQ
              </a>
            </li>
            <li className="mt-2 font-code hover:text-n-1">
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="mt-2 font-code hover:text-n-1">
              <Link to="/cookies-policy">Cookies Policy</Link>
            </li>
            <li className="mt-2 font-code hover:text-n-1">
              <Link to="/terms&conditions">Terms & Conditions</Link>
            </li>
            <li className="mt-2 font-code hover:text-n-1">
              <Link to="/contact">Support</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-full flex-col items-center text-xs mt-12">
        <p className="caption text-n-4 lg:block font-code">
          © {new Date().getFullYear()}. All rights reserved.{" "}
        </p>
      </div>
    </Section>
  );
};

export default Footer;

//  <li className="mt-2 font-code">Home</li>
//              <li className="mt-2 font-code">About Us</li>
//              <li className="mt-2 font-code">Our Work</li>
//              <li className="mt-2 font-code">Contact Us</li>
// <li className="mt-2 font-code">Blogs</li>
