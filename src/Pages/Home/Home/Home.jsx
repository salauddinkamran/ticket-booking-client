import React from "react";
import Container from "../../Shared/Container";
import Banner from "../Banner/Banner";
import Tickets from "./Tickets/Tickets";

const Home = () => {
  return (
    <Container>
      <Banner></Banner>
      <Tickets></Tickets>
    </Container>
  );
};

export default Home;
