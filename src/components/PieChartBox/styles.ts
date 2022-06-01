import styled from "styled-components";

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  width: 47.5%;
  height: 15rem;

  margin: 1.25rem 0;
  padding: 1.25rem;

  background-color: ${props => props.theme.color.tertiary};
  color: ${props => props.theme.color.white};

  border-radius: 7px;
  display: flex;

  @media(max-width: 770px){
    display: flex;
    width: 100%;
  }
`;

export const LeftSide = styled.aside`
  padding: 1rem 0 1rem 1.25rem;

  > h2{
    margin-bottom: 1.25rem;
  }

  @media(max-width: 1345px){
    padding: 0 1rem .5rem;
    margin-bottom: .5rem;

    > h2{
      margin-top: 1rem;
    }

  }

  @media(max-width: 420px){
    padding: 1rem;
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

  @media(max-width: 1345px){
    display: flex;
    flex-direction: column;
  }
`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;

  margin-bottom: .5rem;

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

  @media(max-width: 1345px){
    font-size: .875rem;
    margin: .25rem 0;

    > div{
      width: 50px;
      height: 45px;
      line-height: 45px;
    }

    > span{
      margin-left: .5rem;
    }
  }

`;

export const RightSize = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;

  @media(max-width: 500px){
    width: 80%;
  }
`;
