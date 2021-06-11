import React from "react";
import styled from "styled-components";
import { Box, Grid } from "@material-ui/core";
import AddMovieButton from "../AddMovieButton";
import SearchMovie from "../SearchMovie";
import Logo from "../Logo";
import colors from "../../../variables/colors";

const Header: React.FC = () => {
  return (
    <HeaderColored>
      <Box justifyContent="space-between" display="flex">
        <Logo />
        <AddMovieButton />
      </Box>
      <SearchPanel>
        <Headline>Find your movie</Headline>
        <SearchMovie />
      </SearchPanel>
    </HeaderColored>
  );
};

const Headline = styled.h2`
  text-transform: uppercase;
  font-weight: 100;
  color: ${colors.white};
`;

const SearchPanel = styled(Grid)`
  padding: 0 10%;
`;

export const HeaderColored = styled(Grid)`
  width: 100%;
  background-color: ${colors.darkViolet};
  padding: 20px 15% 100px;
  box-sizing: border-box;
  border-bottom: 10px solid ${colors.lightGrey};
`;

export default Header;
