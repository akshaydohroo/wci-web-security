import React from "react";
import styled from "styled-components";

const Card2 = () => {
  const ref = React.createRef();

  const handleClick = () =>
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  
  return (
    <Container ref={ref} onClick={handleClick}>
      <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
    </Container>
  );
};

export default Card2;

const Container = styled.div`
  margin: 1rem;
  overflow: hidden;
  border-radius: 15px;
  height: 15rem;
  width: 15rem;
  background: #000;
  transition-duration: 200ms;
  flex-shrink: 0;
  &:hover {
    transform: scale(1.1);
  }
`;
const Image = styled.img`
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
