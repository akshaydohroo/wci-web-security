import { useRef } from "react";
import styled from "styled-components";
import Card2 from "./Card2";

const list = [
  <Card2 />,
  <Card2 />,
  <Card2 />,
  <Card2 />,
  <Card2 />,
  <Card2 />,
  <Card2 />,
  <Card2 />,
  <Card2 />,
  <Card2 />,
  <Card2 />,
  <Card2 />,
];

const Cards2 = () => {
  const ref = useRef();
  return (
    <Main>
      <Container ref={ref}>
        {list.map((card) => {
          return card;
        })}
      </Container>
      <Navigator>
        <Arrow
          onClick={() => {
            ref.current.scrollBy({
              left: -100,
              behavior: "smooth",
            });
          }}
        >
          Back
        </Arrow>
        <Arrow
          onClick={() => {
            ref.current.scrollBy({
              left: 100,
              behavior: "smooth",
            });
          }}
        >
          Next
        </Arrow>
      </Navigator>
    </Main>
  );
};

export default Cards2;
const Main = styled.div`
  overflow: hidden;
  scroll-behavior: smooth;
  width: 100%;
`;
const Arrow = styled.p`
  padding: 1rem;
  transition-duration: 200ms;
  font-weight: 600;
  &:hover {
    color: #da0808;
    cursor: pointer;
    transform: scale(1.1);
  }
`;
const Container = styled.div`
  margin: auto;
  width: 95%;
  max-width: 1000px;
  display: flex;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Navigator = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  justify-self: flex-end;
`;
