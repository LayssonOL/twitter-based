import React from 'react'
import { Grid, Typography, Card, CardHeader, CardContent, CardActions } from '@material-ui/core'
import './style.css'

const SuggestionsColumn: React.FC = () => {
  return (
    <>
      <Grid item xs={12}>
        <Card elevation={0} className="profileCard">
          <CardHeader
            title={
              <>
                <Grid container direction="row" justify="flex-start" alignItems="baseline">
                  <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                    Who to follow
                  </Typography>
                  <Typography variant="caption" style={{ paddingLeft: '10px', fontWeight: 'bold' }}>
                    Refresh
                  </Typography>
                  <Typography variant="caption" style={{ paddingLeft: '10px', fontWeight: 'bold' }}>
                    View all
                  </Typography>
                </Grid>
              </>
            }
            className="cardHeader"
          ></CardHeader>
          <CardContent className="cardContent"></CardContent>
          <CardActions>
            <Typography variant="body2">Popular accounts</Typography>
            <Typography variant="body2">Find Trends</Typography>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card elevation={0} className="profileCard">
          <CardHeader
            title={
              <>
                <Grid container direction="row" justify="flex-start" alignItems="baseline">
                  <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                    United States
                  </Typography>
                  <Typography variant="body1" style={{ paddingLeft: '10px', fontWeight: 'bold' }}>
                    Trends
                  </Typography>
                  <Typography variant="caption" style={{ paddingLeft: '10px', fontWeight: 'bold' }}>
                    Change
                  </Typography>
                </Grid>
              </>
            }
            className="cardHeader"
          ></CardHeader>
          <CardContent className="cardContent"></CardContent>
          <CardActions>
            <Typography variant="body2">Popular accounts</Typography>
            <Typography variant="body2">Find Trends</Typography>
          </CardActions>
        </Card>
      </Grid>
    </>
  )
}

export default SuggestionsColumn

