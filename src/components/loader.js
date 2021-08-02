import React from 'react';
import { Container, Grid } from '@material-ui/core';

export default function Loader() {
  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: 'calc(100vh - 48px)' }}
      >
        <div className="lds-hourglass"></div>
      </Grid>
    </Container>
  );
}
