import styled from "styled-components";

const Logo: React.FC = () => {
  return (
    <LogoColor>
      <b>netflix</b>
      <span>roulette</span>
    </LogoColor>
  );
};

const LogoColor = styled.div`
  color: #f65261;
`;

export default Logo;
