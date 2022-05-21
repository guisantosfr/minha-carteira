import styled from 'styled-components';

interface IContainerProps {
  color: string;
}

export const Container = styled.div<IContainerProps>`
  width: 30%;
  height: 10rem;

  margin: 1rem 0;
  padding: 1rem 2rem;

  background-color: ${props => props.color};
  color: ${props => props.theme.color.white};

  border-radius: 7px;

  position: relative;
  overflow: hidden;

  > img{
    height: 110%;
    position: absolute;
    top: -10px;
    right: -30px;

    opacity: .3;
  }

  > span{
    font-size: 1.125rem;
    font-weight: 500;
  }

  > small{
    font-size: .75rem;
    position: absolute;
    bottom: 10px;
  }
`;
