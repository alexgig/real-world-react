import { configureStore, createSlice } from '@reduxjs/toolkit'


const initialState =
  { appName: 'conduit'
  , articles: null
  }


const reducers =
  {
  }


const slice =
  createSlice(
    { name: 'app'
    , initialState
    , reducers
    }
  )

export const actions =
    slice.actions


export const store =
  configureStore(
    { reducer: slice.reducer
    }
  )
