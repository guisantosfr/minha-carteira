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

  @media(max-width: 770px){
    > span{
      font-size: .75rem;
    }

    > h1{
      word-wrap: break-word;
      font-size: 1.375rem;

      > strong{
        display: inline-block;
        width: 100%;
        font-size: .875rem;
      }
    }
  }

  @media(max-width: 420px){
    width: 100%;

    > h1 {
      display: flex;

      strong{
        position: initial;
        width: auto;
        font-size: 1.375rem;
      }

      strong::after{
        display: inline-block;
        content: '';
        width: 3px;
      }
  }
  }

`;
