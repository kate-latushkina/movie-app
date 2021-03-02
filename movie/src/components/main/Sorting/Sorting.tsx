import styled from "styled-components";

const Sorting: React.FC = () => {
  return (
    <SortLabel>Sort by</SortLabel>
  )
}

const SortLabel = styled.span`
  text-transform: uppercase;
  width: 35%
`;

export default Sorting;