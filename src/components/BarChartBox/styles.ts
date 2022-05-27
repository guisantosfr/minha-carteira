import styled from "styled-components";

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  width: 47.5%;
  min-height: 16rem;

  margin: 1rem 0;

  background-color: ${props => props.theme.color.tertiary};
  color: ${props => props.theme.color.white};

  border-radius: 7px;

  display: flex;
`;

export const LeftSide = styled.aside`
  flex: 1;
  padding: 2rem 0 2rem 1.25rem;

  > h2{
    margin-bottom: 1rem;
    padding-left: 1.25rem;
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;

  height: 8.75rem;
  padding-right: 1rem;
  overflow-y: scroll;

  ::-webkit-scrollbar{
    width: .5rem;
  }

  ::-webkit-scrollbar-thumb{
    background-color: ${props => props.theme.color.secondary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track{
    background-color: ${props => props.theme.color.tertiary};
  }
`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;

  margin-bottom: .5rem;
  padding-left: 1.25rem;

  > div{
    background-color : ${props => props.color};

    width: 2.75rem;
    height: 2.75rem;
    border-radius: 5px;

    font-size: 1rem;
    line-height: 2.5rem;
    text-align: center;
  }

  > span{
    margin-left: .5rem;
  }

`;

export const RightSide = styled.main`
  flex: 1;
  min-height: 10rem;

  display: flex;
  justify-content: center;

  padding-top: 2rem;
`;