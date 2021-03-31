import styled from 'styled-components';
import { Paper } from '@material-ui/core';
import { motion } from 'framer-motion';
import { NavLink as Link } from 'react-router-dom';

const LoginWrapper = styled.div``;

const LoginForm = styled.form`
  p {
    font-size: 2rem;
    padding-bottom: 20px;
    color: rgba(57, 54, 38, 1);
  }
  box-shadow: 8px 8px 8px -6px rgba(0, 0, 0, 0.5);
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25rem;
  width: 25rem;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.5);
  @media screen and (max-width: 900px) {
    height: 18rem;
    width: 18rem;
    p {
      font-size: 1.75rem;
      margin-bottom: 0;
    }
  }
`;

const Or = styled.div`
  display: flex;
  flex-direction: inline;
`;

const Break = styled.div`
  content: '';
  width: 100px;
  background-color: transparent;
  height: 1px;
  margin: auto;
  margin-top: 10px;
  border-top: 1px solid #000000;
  z-index: 1;
`;

const SignUpLink = styled(Link)`
  box-shadow: 0px 8px 8px -6px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  background: rgba(147, 141, 123, 1);
  width: 260px;
  margin: 5%;
  color: #fff;
  font-size: 1.5rem;
  padding: 2%;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: rgba(181, 181, 161, 1);
    color: rgba(57, 54, 38, 1);
  }
  &:active {
    letter-spacing: 0.5px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
  }
  @media screen and (max-width: 900px) {
    width: 150px;
    margin: 4%;
  }
`;

const LoginButton = styled.button`
  box-shadow: 0px 8px 8px -6px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  background: rgba(147, 141, 123, 1);
  width: 275px;
  margin: 5%;
  text-align: left;
  color: #fff;
  font-size: 1.5rem;
  padding: 2%;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: rgba(181, 181, 161, 1);
    color: rgba(57, 54, 38, 1);
  }
  &:active {
    letter-spacing: 0.5px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
  }
  @media screen and (max-width: 900px) {
    width: 162px;
    height: 40px;
    margin: 4%;
  }
`;

const UserInput = styled.input`
  outline: none;
  border: none;
  border-radius: 6px;
  width: 66%;
  margin: 3%;
  padding: 2%;
  outline: none;
  @media screen and (max-width: 768px) {
    width: 60%;
    padding: 2%;
  }
`;

export const MaskDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;

export const PostCard = styled(Paper)`
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: auto;
  max-height: 10vw;
`;

export const PostTitle = styled.h2`
  margin: auto;
  font-size: 1rem;
  max-width: 40vw;
  grid-column: 2;
  margin-top: 0;
  grid-row: 1;
`;

export const PostContent = styled.p`
  margin: auto;
  font-size: 12px;
  font-weight: 400;
  max-width: 40vw;
  margin-top: 0;
  grid-column: 2;
  grid-row: 2;
`;

export const PostImage = styled.img`
  width: 45px;
  border-radius: 10px;
  grid-column: 1;
  grid-row: 1;
`;

export const MyForm = styled(motion.div)`
  background-color: white;
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

export {
  LoginForm,
  LoginButton,
  UserInput,
  LoginWrapper,
  SignUpLink,
  Break,
  Or,
};
