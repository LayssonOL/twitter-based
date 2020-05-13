import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import GetAppIcon from '@material-ui/icons/GetApp'
import PersonIcon from '@material-ui/icons/Person';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import './style.css'

const Followers: React.FC = () => {
  return (
    <>
      <Grid item container xs={12} direction="row" justify="flex-start" alignItems="center">
        <GetAppIcon style={{ fontSize: 17, color: 'black', paddingRight: '5px', left: '10px' }} />
        <Typography variant="body2">22 followers you now</Typography>
      </Grid>
      <Grid item container className='followersPicsGrid' xs={12} direction="row" justify="flex-start" alignItems="center">
        <Grid item container xs={12} justify='space-between' alignItems='flex-start'>
          <PersonIcon fontSize='large'/>
          <PersonIcon fontSize='large'/>
          <PersonIcon fontSize='large'/>
          <PersonIcon fontSize='large'/>
          <PersonIcon fontSize='large'/>
        </Grid>
        <Grid item container xs={12} justify='space-between' alignItems='flex-start'>
          <PersonIcon fontSize='large'/>
          <PersonIcon fontSize='large'/>
          <PersonIcon fontSize='large'/>
          <PersonIcon fontSize='large'/>
          <PersonIcon fontSize='large'/>
        </Grid>
      </Grid>
      <Grid item container xs={12} direction="row" justify="flex-start" alignItems="center">
        <PhotoCameraIcon style={{ fontSize: 17, color: 'black', paddingRight: '5px', left: '10px' }} />
        <Typography variant="body2">35 Photos and videos</Typography>
      </Grid>
    </>
  )
}

export default Followers