import { Grid } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import Categories from "../Categories/Categories";
import Posters from "../Posters/Posters";
import Sorting from "../Sorting/Sorting";

const Main: React.FC = () => {
  return (
    <>
      <CategoryContainer>
        <Categories />
        <Sorting />
      </CategoryContainer>
      <Posters />
    </>
  );
};

const CategoryContainer = styled(Grid)`
  display: flex;
  justify-content: space-between;
  padding 0 15%;
`;

export default Main;
