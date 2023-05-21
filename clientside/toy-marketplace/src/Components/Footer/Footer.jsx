/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaFacebook,
  FaMailBulk,
  FaInstagram,
  FaWhatsapp,
  FaCopyright,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content text-lg font-semibold gap-10">
        <div>
          <img src="../Assests/logo.webp" alt="" />
          <p>
            Toy Man Industries Ltd.
            <br />
            Providing reliable Toys since 1992
            <br />
            <FaCopyright /> Copyrighted Since 2000
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Toys</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Address & Contact</span>
          <a className="link link-hover">Phone : +8801896085259</a>
          <a className="link link-hover">Office : Feni,Chittagong,Bangladesh</a>
          <a className="link link-hover">Show Room : Mohipal,Feni,Bangladesh</a>
        </div>
        <div>
          <span className="footer-title">Our Social Media</span>
          <div className="flex gap-6">
            <div>
              <a className="link link-hover text-5xl">
                <FaFacebook />
              </a>
            </div>
            <div>
              <a className="link link-hover text-5xl">
                <FaInstagram />
              </a>
            </div>
            <div>
              <a className="link link-hover text-5xl">
                <FaMailBulk />
              </a>
            </div>
            <div>
              <a className="link link-hover text-5xl">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
