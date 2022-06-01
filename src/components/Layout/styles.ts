import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 15rem auto;
  grid-template-rows: 5rem auto;
  grid-template-areas: 'AS MH' 'AS CT';

  height: 100vh;
  min-width: 315px;

  @media(max-width: 600px){
    grid-template-columns: 100%;
    grid-template-rows: 5rem auto;
    grid-template-areas: 'MH' 'CT';
  }
`;
