import {
  MenuItem,
  Select,
  InputLabel,
  Grid,
  Theme,
  createStyles,
  makeStyles
} from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const sortingBy = ["Release date", "Named", "Age"];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    select: {
      minWidth: 155,
      textTransform: "uppercase",
    },
  }),
);

const Sorting: React.FC = () => {
  const classes = useStyles();

  return (
    <SortingSection >
      <SortLabel id="select-label">Sort by</SortLabel>
      <Select
        className={classes.select}
        defaultValue={sortingBy[0]}
      >
        {sortingBy.map((name, index) => (
          <Item value={name} key={index} >{name}</Item>
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