import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-3">
          <div className="services">
            <div className="flex flex-col justify-center items-center gap-4">
              <TbTruckDelivery className="icon" />
              <h3 className="text-4xl">Super Fast and Free Delivery</h3>
            </div>
          </div>

          <div className="services shadow-none bg-transparent justify-between gap-[6rem]">
            <div className="services-colum-2 rounded-3xl bg-slate-100 flex items-center justify-center w-full h-full ">
              <div className="flex items-center justify-center gap-4">
                <MdSecurity className="icon " />
                <h3 className="text-4xl">Non-contact Shipping</h3>
              </div>
            </div>
            <div className="services-colum-2 rounded-3xl bg-slate-100 flex items-center justify-center w-full h-full">
              <div className="flex items-center justify-center gap-4">
                <GiReceiveMoney className="icon " />
                <h3 className="text-4xl">Money-back Guaranteed</h3>
              </div>
            </div>
          </div>

          <div className="services">
            <div className="flex flex-col justify-center items-center gap-4">
              <RiSecurePaymentLine className="icon " />
              <h3 className="text-4xl">Super Secure Payment System</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .grid {
    gap: 4.8rem;
  }

  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: ${({ theme }) => theme.colors.bg};
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  .services-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;

    .services-colum-2 {
      background: ${({ theme }) => theme.colors.bg};
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }

  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
  }

  .icon {
    /* font-size: rem; */
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }
`;
export default Services;
