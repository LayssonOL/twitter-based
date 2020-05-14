import { action } from 'typesafe-actions'
import { TweetsTypes, Tweet } from './types'

export const loadRequest = () => action(TweetsTypes.LOAD_REQUEST)

export const loadSuccess = (data: Tweet[]) => action(TweetsTypes.LOAD_SUCCESS, { data })

export const loadFailure = () => action(TweetsTypes.LOAD_FAILURE)