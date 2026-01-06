import React from "react";
import Container from "../Container";
import { Link } from "react-router";
import logo from "../../../assets/logo-2.png"
import useAuth from "../../../hooks/useAuth";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  const { user } = useAuth();
  return (
    <Container>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <nav>
          {/* <h6 className="footer-title">Columns 1</h6> */}

          {/*<a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a> */}
          {/* <h6 className="footer-title">Column 1</h6> */}
          <Link to="/" className="text-lg font-bold">
            <img src={logo} className="w-20" alt="" />
          </Link>
          <p className="text-base font-medium text-gray-600">
            Compare routes, prices, and schedules in seconds, choose your seat,
            and confirm your ticket securely—anytime, anywhere. Travel made
            fast, easy, and stress-free.
          </p>
        </nav>
        <nav>
          <h6 className="text-lg font-bold text-black">Company</h6>
          <Link to="/" className="link link-hover text-base font-medium text-gray-600">
            Home
          </Link>
          <Link
            to="/all-ticket"
            className="link link-hover text-base font-medium text-gray-600"
          >
            All Tickets
          </Link>
          <Link to="/contact" className="link link-hover text-base font-medium text-gray-600">
            Contact Us
          </Link>
          <Link to="/about" className="link link-hover text-base font-medium text-gray-600">
            About
          </Link>
        </nav>
        <nav>
          <h6 className="text-lg font-bold text-black">Social</h6>

          <a className="link link-hover flex items-center gap-2 text-base text-gray-600">
            <MdEmail />
            <span>{user?.email || "abc123@gmail.com"}</span>
          </a>
          <a className="link link-hover flex items-center gap-2 text-base text-gray-600">
            <FaPhoneAlt />
            <span>111-222-1234</span>
          </a>
          <a className="link link-hover flex items-center gap-2 text-base text-gray-600">
            <FaFacebook />
            <span>www.facebook.com</span>
          </a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="w-80">
            <label>Enter your email address</label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      <p className="bg-black text-white text-center py-5">© 2025 TicketBari.All rights reserved.</p>
    </Container>
  );
};

export default Footer;
