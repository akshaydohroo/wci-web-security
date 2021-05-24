import styled, { css } from "styled-components";
import { RiLockPasswordLine } from "react-icons/ri";
import { GiEarthAfricaEurope, GiCyberEye } from "react-icons/gi";
// import { GrTransaction, GrCircleInformation } from "react-icons/gr";
import { FaExchangeAlt } from "react-icons/fa";
import { BsAppIndicator } from "react-icons/bs";
import { BiInfoCircle } from "react-icons/bi";
import { MdWebAsset, MdSecurity } from "react-icons/md";

const Main = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  width: 90%;
  max-width: 1300px;
  margin: auto;
`;
const CardItem = styled.div`
  display: flex;
  position: relative;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid black;    */
  border-radius: 10px;
  margin: 1rem;
  padding-top: 3rem;
  box-shadow: 0 0 40px 0 rgb(0 0 0 / 10%);
  border: 3px solid transparent;
  box-sizing: border-box;
  height: 17rem;
  width: 14rem;
  &:hover {
    color: dodgerblue;
    /* box-shadow:0 0 40px 0 #ff14912d ; */
    border: 3px solid dodgerblue;
    /* font-weight: 600; */
  }
`;
const Image = styled.div`
  position: absolute;
  top: 5rem;
`;
const Text = styled.p`
  font-weight: 600;
  text-transform: uppercase;
  padding: 1rem;
  width: 10rem;
  text-align: left;
  position: absolute;
  top: 8rem;
  text-align: center;
`;

const data = [
  {
    text: `Basics of Internet`,
    icon: <MdWebAsset className="" size={40} />,
  },
  {
    text: `Internet Security`,
    icon: <MdSecurity className="" size={40} />,
  },
  {
    text: `Passwords`,
    icon: <RiLockPasswordLine className="" size={40} />,
  },
  {
    text: `Surfing browser`,
    icon: <GiEarthAfricaEurope className="" size={40} />,
  },
  {
    text: `Using Applications`,
    icon: <BsAppIndicator className="" size={40} />,
  },
  {
    text: `Secure Financial Transactions`,
    icon: <FaExchangeAlt className="" size={40} />,
  },
  {
    text: `Information`,
    icon: <BiInfoCircle className="" size={40} />,
  },
  {
    text: `Digital Harms`,
    icon: <GiCyberEye className="" size={40} />,
  },
];
const Card = () => {
  return (
    <>
      <p className="h3 text-center text-uppercase mx-auto">Know more by categories</p>
      <Main>
        {data.map((item) => (
          <CardItem>
            <Image>{item.icon}</Image>

            <Text>{item.text}</Text>
          </CardItem>
        ))}
      </Main>
    </>
  );
};

export default Card;
