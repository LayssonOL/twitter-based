export enum TweetsTypes {
  LOAD_REQUEST = 'tweets/LOAD_REQUEST',
  LOAD_SUCCESS = 'tweets/LOAD_SUCCESS',
  LOAD_FAILURE = 'tweets/LOAD_FAILURE'
}

export interface Tweet {
  id: number
  idUser: number
  userName: string
  body: string
}

export interface TweetsState {
  readonly data: Tweet[]
  readonly loading: boolean
  readonly error: boolean
}