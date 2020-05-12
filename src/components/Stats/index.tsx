import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import SettingsIcon from '@material-ui/icons/Settings'
import GetAppIcon from '@material-ui/icons/GetApp'
import './style.css'

const Stats: React.FC = () => {
  return (
    <>
      <Grid item className="behindProfile" xs={3} direction="row" alignItems="center"></Grid>
      <Grid item container spacing={1} className="centerStats" xs={6} direction="row" alignItems="center">
        <Grid item xs={2}>
          <Typography variant="caption" className="stat">
            TWEETS
          </Typography>
          <Typography>1,755</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="caption" className="stat">
            PHOTOS/VIDEOS
          </Typography>
          <Typography>35</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="caption" className="stat">
            FOLLOWING
          </Typography>
          <Typography>131</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="caption" className="stat">
            FOLLOWERS
          </Typography>
          <Typography>30M</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="caption" className="stat">
            FAVORITES
          </Typography>
          <Typography>26</Typography>
        </Grid>
        <Grid item container xs={2} justify="space-evenly" alignItems="flex-end">
          <Grid item xs={1}>
            <Typography className="moreText">More</Typography>
          </Grid>
          <Grid item xs={1}>
            <KeyboardArrowDownIcon className="arrowDown" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container xs={3} direction="row" justify="space-evenly" alignItems="center">
        <Grid item xs={1}>
          <SettingsIcon className="settingIcon" />
        </Grid>
        <Grid item container xs={2} spacing={3} justify="space-between" alignItems="center">
          <Grid item xs={1}>
            <GetAppIcon style={{ fontSize: 17, color: '#1DA1F2', paddingRight: '0' }} />
          </Grid>
          <Grid item xs={1}>
            <Typography className="followText">Follow</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Stats
