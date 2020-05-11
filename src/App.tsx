import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Stats from './components/Stats';
import './App.css';

function App() {
  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={12} className="header" justify="center">
          <Typography>Header</Typography>
        </Grid>
        <Grid item container xs={12} className="stats" direction="row" justify="center" alignItems="center">
          <Stats />
        </Grid>
        <Grid
          item
          xs={4}
          className="columnOne"
          direction="column"
          justify="center"
          alignContent="space-between"
          alignItems="center"
        >
          <Typography>Column 1</Typography>
        </Grid>
        <Grid
          item
          xs={4}
          className="columnTwo"
          direction="column"
          justify="center"
          alignContent="space-between"
          alignItems="center"
        >
          <Typography>Column 2</Typography>
        </Grid>
        <Grid
          item
          xs={4}
          className="columnThree"
          direction="column"
          justify="center"
          alignContent="space-between"
          alignItems="center"
        >
          <Typography>Column 3</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
