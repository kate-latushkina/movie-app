import { Grid } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import Categories from "../Categories";
import Posters from "../Posters";
import Sorting from "../Sorting";

const Main: React.FC = () => {
  return (
    <>
      <CategoryContainer>
        <Categories />
        <Sorting />
      </CategoryContainer>
      <PostersCategory>
        <Posters />
      </PostersCategory>
    </>
  );
};

export const CategoryContainer = styled(Grid)`
  display: flex;
  justify-content: space-between;
  padding 0 15%;
`;

export const PostersCategory = styled(Grid)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding 2% 15%;
`;

export default Main;
