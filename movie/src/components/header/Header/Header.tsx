import React from "react";
import AddMovie from "../AddMovie/AddMovie";
import SearchMovie from "../SearchMovie/SearchMovie";
import styled from "styled-components";
import { Box, Container } from "@material-ui/core";
import Logo from "../Logo/Logo";

const Header: React.FC = () => {
  return (
    <HeaderSection>
      <Container maxWidth="lg">
        <Box justifyContent="space-between" display="flex">
          <Logo />
          <AddMovie />
        </Box>
        <Container maxWidth="md">
          <Headline>Find your movie</Headline>
          <SearchMovie />
        </Container>
      </Container>
    </HeaderSection>
  );
};

const Headline = styled.h2`
  text-transform: uppercase;
  font-weight: 100;
  color: white;
`;

const HeaderSection = styled.div`
  width: 100%;
  background-color: #593158;
  padding: 20px 0 100px;
  border-bottom: 10px solid #555555;
`;

export default Header;
