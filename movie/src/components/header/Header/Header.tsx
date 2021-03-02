import React from "react";
import AddMovieButton from "../AddMovieButton/AddMovieButton";
import SearchMovie from "../SearchMovie/SearchMovie";
import styled from "styled-components";
import { Box, Container } from "@material-ui/core";
import Logo from "../Logo/Logo";
import colors from "../../../variables/colors";

const Header: React.FC = () => {
  return (
    <HeaderSection>
      <Container maxWidth="lg">
        <Box justifyContent="space-between" display="flex">
          <Logo />
          <AddMovieButton />
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
  color: ${colors.white};
`;

const HeaderSection = styled.div`
  width: 100%;
  background-color: ${colors.darkViolet};
  padding: 20px 0 100px;
  border-bottom: 10px solid ${colors.lightGrey};
`;

export default Header;
