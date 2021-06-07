import React, { Dispatch } from "react";
import styled from "styled-components";
import { Box, createStyles, Grid, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import AddMovieButton from "../AddMovieButton";
import SearchMovie from "../SearchMovie";
import Logo from "../Logo";
import colors from "../../../variables/colors";
import MovieDetails from "../MovieDetails";
import searchImage from "../../../img/search-solid.svg";
import { selectIsShowMovieDetails } from "../../../state/reducers/selectors";
import { setIsShowMovieDetails } from "../../../state/reducers/actionCreators";
import { isShowMovieDetailsActions } from "../../../state/actions/isShowMovieDetailsAction";

const useStyles = makeStyles(() =>
  createStyles({
    searchImage: {
      height: "25px",
      width: "25px",
      cursor: "pointer",
    },
  }),
);

const Header: React.FC = () => {
  const isShowMovieDetails = useSelector(selectIsShowMovieDetails);
  const classes = useStyles();
  const isShowMovieDispatch = useDispatch<
    Dispatch<isShowMovieDetailsActions>
  >();

  const handlerSearch = () => {
    isShowMovieDispatch(setIsShowMovieDetails(false));
  };

  return (
    <>
      {!isShowMovieDetails ? (
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
      ) : (
        <MovieInfoColored>
          <Box justifyContent="space-between" display="flex">
            <Logo />
            <img
              src={searchImage}
              alt="search_image"
              className={classes.searchImage}
              onClick={handlerSearch}
              role="presentation"
            />
          </Box>
          <MovieDetails />
        </MovieInfoColored>
      )}
    </>
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

const MovieInfoColored = styled(Grid)`
  width: 100%;
  background-color: ${colors.darkViolet};
  padding: 20px 15% 100px;
  box-sizing: border-box;
  border-bottom: 10px solid ${colors.lightGrey};
`;

export default Header;
