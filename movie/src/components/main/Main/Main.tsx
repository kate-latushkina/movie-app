import { Container } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import Categories from "../Categories/Categories";
import Sorting from "../Sorting/Sorting";

const Main: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <CategorySection>
        <Categories />
        <Sorting />
      </CategorySection>
    </Container>
  );
};

const CategorySection = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
`;

export default Main;
