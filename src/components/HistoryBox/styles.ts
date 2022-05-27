import styled from 'styled-components';

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  background-color: ${props => props.theme.color.tertiary};
  color: ${props => props.theme.color.white};

  margin: 1rem 0;
  padding: 2rem 1.25rem;
  border-radius: 7px;
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
`;

export const LegendContainer = styled.ul`
  list-style: none;
  display: flex;
  padding-right: 1.25rem;
`;

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;

  margin-bottom: .5rem;
  margin-left: .5rem;

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