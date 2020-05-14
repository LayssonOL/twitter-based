import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import GetAppIcon from '@material-ui/icons/GetApp'
import './style.css'

interface Props {
  name: string
}

const SuggestedProfile: React.FC<Props> = (props) => {
  return (
    <Grid container direction="row" justify="center" alignItems='center' className="profileContainer">
      <Grid item xs={3} container direction="row">
        <PersonIcon fontSize="large" />
      </Grid>
      <Grid item xs={9} container direction="row">
        <Grid item xs={12} container direction="row" justify='space-evenly' alignItems='center'>
          <Grid item xs={6}>
            <Typography variant="body2" style={{ fontWeight: 'bold' }}>{props.name}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption">@{props.name}</Typography>
          </Grid>
        </Grid>
        <Grid item container xs={12} direction='row' justify='space-evenly' alignItems='center'>
          <Grid item xs={1}>
            <GetAppIcon style={{ fontSize: 17, color: '#1DA1F2', marginTop: '4px' }} />
          </Grid>
          <Grid item xs={10}>
            <Typography variant='body2' style={{ fontWeight: 'bold' }}>Follow</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SuggestedProfile