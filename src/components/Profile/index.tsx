import React from 'react'
import { Grid, Typography, Card, CardContent, CardActions, TextField, CardHeader } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined'
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined'
import OfficialAccountPicture from '../../imgs/official_account_icon.jpeg'
import Followers from '../Followers'
import './style.css'

const ProfileColumn: React.FC = () => {
  return (
    <>
      <Grid item container className="profilInfo">
        <Card elevation={0} className="profileCard">
          <CardHeader
            title={
              <>
                <Grid container direction="row" alignItems="center">
                  <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                    Twitter
                  </Typography>
                  <img alt="OfficialIcon" className="officialAccPicture" src={OfficialAccountPicture} />
                </Grid>
              </>
            }
            subheader={<Typography variant="body2">@Twitter</Typography>}
            className="cardHeader"
          ></CardHeader>
          <CardContent className="cardContent">
            <Grid item container xs={12} direction="row">
              <Typography className="profileTtitle" color="textSecondary" gutterBottom>
                Your official source for news, updates, and tops from Twitter, Inc.
              </Typography>
            </Grid>
            <Grid item container xs={12}>
              <LocationOnOutlinedIcon />
              <Typography variant="body1">San Francisco, CA</Typography>
            </Grid>
            <Grid item container xs={12}>
              <LinkOutlinedIcon />
              <Typography className="" color="textSecondary">
                blog.twitter.com
              </Typography>
            </Grid>
            <Grid item container xs={12}>
              <WatchLaterOutlinedIcon />
              <Typography variant="body2" component="p">
                Joined February 2007
              </Typography>
            </Grid>
          </CardContent>
          <CardActions>
            <TextField fullWidth className="inputTweet" label="Tweet to Twitter" variant="outlined" />
          </CardActions>
        </Card>
      </Grid>
      <Grid item container direction="row" justify="center" className="followers">
        <Followers />
      </Grid>
    </>
  )
}

export default ProfileColumn
