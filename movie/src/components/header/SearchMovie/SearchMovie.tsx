import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import './SearchMovie.scss'

const SearchMovie: React.FC = () => {
  return (
    <SearchPanel>
      <Input className="search-panel_input" placeholder="What do you want to watch?"/>
      <Button variant="contained" color="secondary" className="search-panel_button">Search</Button>
    </SearchPanel>
  );
};

const SearchPanel = styled.div`
  width: 100%;
  height: 40px;
`;

const Input = styled.input`
  width 70%;
  margin-right: 15px;
  height: 100%;
  border-radius: 2px;
  border: none;
`;


export default SearchMovie;
