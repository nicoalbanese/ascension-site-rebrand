import styled from "styled-components";

const CatWrap = styled.span`
  background-color: ${({ theme }) => theme.colors.primaryTwo};
  padding: 5px 10px;
  font-size: 0.6rem;
  /* text-transform: uppercase; */
  /* font-weight: 800; */
  border-radius: 25px;
`;

const Pill = ({ category, i }) => {
  return <CatWrap key={category.id}>{category}</CatWrap>;
};

export default Pill;
