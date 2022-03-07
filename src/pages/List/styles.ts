import styled from "styled-components";

export const Container = styled.div`

`;

export const Content = styled.div`

`;

export const Filters = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  margin-bottom: 2rem;

  .tag-filter{
    font-size: 1.125rem;
    font-weight: 500;
    background: none;
    color: ${props => props.theme.color.white};
    margin: 0 1.25rem;
    transition: opacity .3s;
    opacity: .4;

    &:hover{
      opacity: .7;
    }
  }

  .tag-filter-recurrent::after{
      content: '';
      display: block;
      width: 3.5rem;
      margin: 0 auto;
      border-bottom: 10px solid ${props => props.theme.color.success};
  }

  .tag-filter-eventual::after{
      content: '';
      display: block;
      width: 3.5rem;
      margin: 0 auto;
      border-bottom: 10px solid ${props => props.theme.color.warning};
  }

  .tag-active{
    opacity: 1;
  }
`;
