import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import Stats from './components/Stats';
import DefaultCoverPicture from './imgs/default_cover_picture.png';
// import CoverPicture from './imgs/cover_picture.png';
import ProfilePicture from './imgs/twitter_icon.jpg';
import ProfileColumn from './components/Profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12} sm={12} lg={12} className="header" justify="center">
          <img alt="Cover" className="coverPicture" src={DefaultCoverPicture} />
          <Paper className='profilePaper'>
            <img alt='Profile' className='profilePicture' src={ProfilePicture} />
          </Paper>
        </Grid>
        <Grid
          item
          container
          xs={12}
          sm={12}
          lg={12}
          className="stats"
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Stats />
        </Grid>
        <Grid item container xs={3} className="columnOne" direction="column" justify="center" alignItems="center">
          <ProfileColumn />
        </Grid>
        <Grid
          item
          xs={6}
          className="columnTwo"
          direction="column"
          justify="center"
          alignContent="center"
          alignItems="center"
        >
          <Typography>Column 2</Typography>
        </Grid>
        <Grid
          item
          xs={3}
          className="columnThree"
          direction="column"
          justify="center"
          alignContent="center"
          alignItems="center"
        >
          <Typography>Column 3</Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default App;
