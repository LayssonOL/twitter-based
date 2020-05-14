import { Reducer } from 'redux'
import { TweetsState, TweetsTypes } from './types'

const INITIAL_STATE: TweetsState = {
  data: [
    { id: 1, idUser: 1, userName: 'João', body: 'Testando o corpo do primeiro Twitter'}
  ],
  loading: false,
  error: false
}

const reducer: Reducer<TweetsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TweetsTypes.LOAD_REQUEST:
      return { ...state, loading: true}
    case TweetsTypes.LOAD_SUCCESS:
      return { ...state, error: false, loading: false, data: action.payload}
    case TweetsTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: []}
    default:
      return state
  }
}

export default reducer