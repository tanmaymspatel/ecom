import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ name }) => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-4xl text-indigo-600 uppercase">Welcome to </p>
            <h1 className="font-bold"> {name} </h1>
            <p className="py-6 text-3xl leading-10 text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              atque temporibus veniam doloribus libero ad error omnis voluptates
              animi! Suscipit sapiente.
            </p>
            <NavLink to={"/products"}>
              <Button btnName={"show now"} />
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image flex items-center justify-center w-full h-auto">
            <figure className="relative after:content-[''] after:absolute after:block after:w-[60%] after:h-[80%] after:bg-indigo-500 after:-top-20 after:-right-20 after:-z-10">
              <img
                src="images/hero.jpg"
                alt="hero-section"
                className="img-style w-full h-auto"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
