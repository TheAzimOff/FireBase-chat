import { Box, Button, Container, Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import { context } from '../index';
import firebase from 'firebase';

export default function Login() {
  const [auth] = useContext(context);
  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
  };
  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: 'calc(100vh - 48px)' }}
      >
        <Grid
          style={{ width: 400, background: 'lightgray' }}
          container
          alignItems="center"
          justifyContent="center"
        >
          <Box p={5}>
            <Button onClick={login} variant="outlined">
              Login with Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
