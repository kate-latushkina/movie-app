import React from "react";
import { Box, createStyles, Grid, makeStyles } from "@material-ui/core";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import searchImage from "../../img/search-solid.svg";
import Logo from "../../components/Header/Logo";
import colors from "../../variables/colors";
import MovieDetails from "../../components/Header/MovieDetails";

const useStyles = makeStyles(() =>
  createStyles({
    searchImage: {
      height: "25px",
      width: "25px",
      cursor: "pointer",
    },
  }),
);

const DetailsPage: React.FC = () => {
  const classes = useStyles();

  return (
    <MovieInfoColored>
      <Box justifyContent="space-between" display="flex">
        <Logo />
        <NavLink to="/home">
          <img
            src={searchImage}
            alt="search_image"
            className={classes.searchImage}
            role="presentation"
          />
        </NavLink>
      </Box>
      <MovieDetails />
    </MovieInfoColored>
  );
};

const MovieInfoColored = styled(Grid)`
  width: 100%;
  background-color: ${colors.darkViolet};
  padding: 20px 15% 100px;
  box-sizing: border-box;
  border-bottom: 10px solid ${colors.lightGrey};
`;

export default DetailsPage;
