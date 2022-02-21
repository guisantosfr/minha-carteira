import styled from "styled-components";

interface ITagProps {
  color: string;
}

export const Container = styled.li`
  background-color: ${props => props.theme.color.tertiary};

  list-style: none;
  border-radius: 10px;
  margin: .625rem;
  padding: .75rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  transition: all .3s;

  position: relative;

  &:hover {
    opacity: .7;
    transform: translateX(10px);
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding-left: .625rem;
  }

  > div span{
    font-weight: 500;
    font-size: 1.25rem;
  }
`;

export const Tag = styled.div<ITagProps>`
  width: .875rem;
  height: 60%;

  background-color: ${props => props.color};

  position: absolute;
  left: 0;
`;
