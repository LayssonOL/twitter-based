import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { Tweet } from '../../store/ducks/tweets/types'
import * as TweetsActions from '../../store/ducks/tweets/actions'
import {ApplicationState} from '../../store'
import { Grid, Typography } from '@material-ui/core'
import TweetComponent from '../Tweet'
import './style.css'

interface StateProps {
  tweets: Tweet[]
}

interface DispatchProps {
  loadRequest(): void
}

type Props = StateProps & DispatchProps

const FeedColumn: React.FC<Props> = (props) => {
  const { tweets, loadRequest } = props

  useEffect(() => {
    loadRequest()
  }, [])

  return (
    <Grid item container direction='row' justify='flex-start' alignItems='center'>
      <Grid item xs={12} container direction='row' justify='flex-start' alignItems='center'>
        <Typography variant='body2' style={{ fontWeight: 'bold', padding: '5px 20px'}}>Tweets</Typography>
        <Typography variant='body2' style={{ fontWeight: 'bold', padding: '5px 10px'}}>Tweets and replies</Typography>
      </Grid>
      <Grid item xs={12} container direction='row' justify='center' alignItems='center'>
        <ul>
          {tweets.map(tweet => {
            const { userName, body } = tweet
            return <TweetComponent userName={userName} body={body} />
          })}
        </ul>
      </Grid>
    </Grid>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(TweetsActions, dispatch)

const mapStateToProps = (state: ApplicationState) => ({
  tweets: state.tweets.data,
})

export default connect(mapStateToProps, mapDispatchToProps)(FeedColumn)