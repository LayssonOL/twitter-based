import React from 'react'
import { Grid, Typography, Card, CardContent, CardActions, TextField, CardHeader } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined'
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined'
import './style.css'

const ProfileColumn: React.FC = () => {
  return (
    <>
      <Grid item container className="profilInfo">
        <Card className="profileCard">
          <CardHeader
            title={
              <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                Twitter
              </Typography>
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
            <TextField label='Tweet to Twitter' variant='outlined'/>
          </CardActions>
        </Card>
      </Grid>
      <Grid item className="followers">
        <Typography variant="h3">Followers</Typography>
      </Grid>
    </>
  )
}

export default ProfileColumn
