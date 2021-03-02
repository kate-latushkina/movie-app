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

const LogoColor = styled.div`
  color: ${colors.pink};
`;

export default Logo;
