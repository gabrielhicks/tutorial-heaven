import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';

export const Logo = styled(Typography)`
  padding-left: 10px;
  font-weight: normal;
  margin: 0;
  font-size: 1.4rem;
`;

export const StyledToolbar = styled(Toolbar)`
  padding-left: 10px;
  img {
    margin-top: 5px;
  }
`;

export const StyledFab = styled(Fab)``;

export const StyledIconButton = styled(IconButton)`
  position: absolute;
  right: 10px;
`;

export const StyledMenu = styled(Menu)``;

export const NavWrapper = styled(React.Fragment)`
  display: flex;
`;
