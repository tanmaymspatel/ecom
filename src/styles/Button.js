import { NavLink } from "react-router-dom";

export function Button({ btnName }) {
  return (
    <button className="text-white text-3xl bg-indigo-600 hover:bg-indigo-500 hover:shadow-lg hover:scale-95  active:scale-95 py-10 px-12 uppercase text-center cursor-pointer transition-all">
      {btnName}
    </button>
  );
}

// import styled from "styled-components";

// export const Button = styled.button`
//   text-decoration: none;
//   max-width: auto;
//   background-color: rgb(98 84 243);
//   color: rgb(255 255 255);
//   padding: 1.4rem 2.4rem;
//   border: none;
//   text-transform: uppercase;
//   text-align: center;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   -webkit-transition: all 0.3s ease 0s;
//   -moz-transition: all 0.3s ease 0s;
//   -o-transition: all 0.3s ease 0s;

//   &:hover,
//   &:active {
//     box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
//     box-shadow: ${({ theme }) => theme.colors.shadowSupport};
//     transform: scale(0.96);
//   }

//   a {
//     text-decoration: none;
//     color: rgb(255 255 255);
//     font-size: 1.8rem;
//   }
// `;
