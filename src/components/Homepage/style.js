import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomeWrapper = styled.div`
  ${'' /* background-color: black; */}
  background-color: transparent;
`;

export const IconGrid = styled(Grid)`
  background-color: transparent;
  img {
    max-width: 200px;
  }
  position: relative;
  top: 5vh;
  z-index: 5;
  left: 15vw;
  transform: translate(-15%, -25%);
  margin-top: 25vh;
`;

export const Icon = styled(Link)`
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;

export const HomeMobileText = styled.h2`
  position: fixed;
  margin: auto;
  width: 50vw;
  word-wrap: break;
  font-weight: 100;
  text-align: right;
  font-size: 4rem;
  top: 15vh;
  opacity: 0.7;
  right: 10vw;
  z-index: 1;
  @media only screen and (max-width: 500px) {
    font-size: 2.8rem;
  }
`;
