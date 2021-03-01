import { Container } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
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
  background-color: #424242;
  text-align: center;
  padding: 20px 0;
`;

export default Footer;
