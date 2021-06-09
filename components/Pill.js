import styled from "styled-components";

const CatWrap = styled.span`
  background-color: ${({ theme }) => theme.colors.primaryTwo};
  padding: 5px 10px;
  font-family: Avenir, sans-serif;
  font-size: 0.65rem;
  /* text-transform: uppercase; */
  /* font-weight: 800; */
  border-radius: 25px;
`;

const Pill = ({ category, i }) => {
  return <CatWrap>{category}</CatWrap>;
};

export default Pill;
