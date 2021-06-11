import { Grid } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import colors from "../../variables/colors";
import Logo from "../Header/Logo";

const Footer: React.FC = () => {
  return (
    <FooterSection container justify="center">
      <Logo />
    </FooterSection>
  );
};

const FooterSection = styled(Grid)`
  background-color: ${colors.darkGrey};
  padding: 20px 0;
`;

export default Footer;
