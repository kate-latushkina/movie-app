import { Container } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import colors from "../../variables/colors";
import Logo from "../header/Logo/Logo";

const Footer: React.FC = () => {
  return (
    <FooterSection>
      <Container maxWidth="sm">
        <Logo />
      </Container>
    </FooterSection>
  );
};

const FooterSection = styled.div`
  width: 100%;
  background-color: ${colors.darkGrey};
  text-align: center;
  padding: 20px 0;
`;

export default Footer;
