import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="pt-8">
        <div className="contact-short max-w-[60vw] m-auto bg-slate-100 py-20 px-40 rounded-3xl translate-y-[50%]">
          <div className=" flex justify-between items-center ">
            <div>
              <h3 className="text-4xl">Ready to get started?</h3>
              <h3 className="text-4xl">Talk to us today</h3>
            </div>

            <div>
              <NavLink to="/contact">
                <Button btnName={"Get Started"} />
              </NavLink>
            </div>
          </div>
        </div>
        {/* footer section */}

        <footer className="bg-blue-950 pt-56 pb-28 text-white">
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3 className="text-4xl mb-12">Ecom Store</h3>
              <p className="text-white text-3xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
            <div className="footer-subscribe">
              <h3 className="text-4xl mb-12">
                Subscribe to get important updates
              </h3>
              <form action="#" className="flex flex-col gap-5">
                <input
                  type="email"
                  name="email"
                  placeholder="YOUR E-MAIL"
                  className="text-black text-2xl px-12 py-8"
                />

                <input type="submit" value="subscribe" />
              </form>
            </div>
            <div className="footer-social">
              <h3 className="text-4xl mb-12">Follow Us</h3>
              <div className="footer-social--icons flex gap-8">
                <div>
                  <FaDiscord className="icons footer-icon" />
                </div>
                <div>
                  <FaInstagram className="icons footer-icon" />
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                    target="_blank"
                  >
                    <FaYoutube className="icons footer-icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3 className="text-4xl mb-12">Call Us</h3>
              <h3 className="text-3xl">+91 12345678978</h3>
            </div>
          </div>

          <div className="footer-bottom--section mt-40">
            <hr />
            <div className="container flex justify-between items-center pt-12">
              <p className="text-4xl text-white">
                @{new Date().getFullYear()} ThapaTechnical. All Rights Reserved
              </p>
              <div>
                <p className="text-4xl text-white">PRIVACY POLICY</p>
                <p className="text-4xl text-white">TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;
