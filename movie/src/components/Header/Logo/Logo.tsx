import React from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import colors from "../../../variables/colors";

const Logo: React.FC = () => {
  return (
    <LogoColor>
      <b>netflix</b>
      <span>roulette</span>
    </LogoColor>
  );
};

const LogoColor = styled(Grid)`
  color: ${colors.pink};
`;

export default Logo;
