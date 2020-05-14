import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import './style.css'

interface Props {
  userName: string,
  body: string
}

const TweetComponent: React.FC<Props> = (props) => {
  return (
    <li>
      <Grid item xs={12} container direction="row">
        <Typography>{props.userName}</Typography>
        <Typography>{props.body}</Typography>
      </Grid>
    </li>
  )
}

export default TweetComponent