import styled, { keyframes } from 'styled-components';

interface ILegendProps {
  color: string;
}

const animate = keyframes`
  0%{
    transform: translateX(-100px);
    opacity: 0;
  }
  50%{
    opacity: .3;
  }
  100%{
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  background-color: ${props => props.theme.color.tertiary};
  color: ${props => props.theme.color.white};

  margin: 1rem 0;
  padding: 2rem 1.25rem;
  border-radius: 7px;

  animation: ${animate} .5s;
`;

export const ChartContainer = styled.div`
  height: 22.5rem;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;

  > h2 {
      margin-bottom: 1.5rem;
      padding-left: 1.25rem;
  }

  @media(max-width: 1200px){
    flex-direction: column;
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;
  display: flex;
`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;

  margin-bottom: .75rem;
  margin-left: 1rem;

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

  @media(max-width: 1280px){
    > div{
      width: 2rem;
      height: 2rem;
    }
  }

`;