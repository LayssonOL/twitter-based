import { createStore, Store } from 'redux'
import { TweetsState } from './ducks/tweets/types'
import rootReducer from './ducks/rootReducer'

export interface ApplicationState {
  tweets: TweetsState
}

const store: Store<ApplicationState> = createStore(rootReducer)

export default store