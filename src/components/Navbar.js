import { AppBar, Button, Grid, Toolbar } from '@material-ui/core';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../util/const';
import { useAuthState } from 'react-firebase-hooks/auth';
import { context } from '..';

const Navbar = () => {
  const [auth] = useContext(context);
  const [user] = useAuthState(auth);
  return (
    <AppBar position="static">
      <Toolbar variant="dense" style={{ background: '#1d1d1d' }}>
        <h2 className="brand">ChAt</h2>
        <Grid container justifyContent="flex-end">
          {user ? (
            <Button onClick={() => auth.signOut()} color="inherit">
              exit
            </Button>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <Button color="inherit">LOGIN</Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
