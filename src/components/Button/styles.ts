import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  margin: .75rem 0;
  padding: .75rem;
  border-radius: 5px;
  font-weight: bold;
  color: ${props => props.theme.color.white};
  background-color: ${props => props.theme.color.warning};

  transition: opacity .3s;

  &:hover{
    opacity: .7;
  }
`;