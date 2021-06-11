import {
  MenuItem,
  Select,
  InputLabel,
  Grid,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setSorting } from "../../../state/reducers/actionCreators";

const sortingBy = ["Rating", "Release date", "Named"];

const useStyles = makeStyles(() =>
  createStyles({
    select: {
      minWidth: 155,
      textTransform: "uppercase",
    },
  }),
);

const Sorting: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const sortingMovies = (sort: string) => {
    dispatch(setSorting(sort));
  };

  return (
    <SortingSection>
      <SortLabel id="select-label">Sort by</SortLabel>
      <Select className={classes.select} defaultValue={sortingBy[0]}>
        {sortingBy.map(name => (
          <Item value={name} key={name} onClick={() => sortingMovies(name)}>
            {name}
          </Item>
        ))}
      </Select>
    </SortingSection>
  );
};

const SortLabel = styled(InputLabel)`
  text-transform: uppercase;
  min-width: 80px;
  margin: auto 0;
`;

const Item = styled(MenuItem)`
  text-transform: uppercase;
`;

const SortingSection = styled(Grid)`
  display: flex;
  justify-content: space-between;
  width: 22%;
`;

export default Sorting;
