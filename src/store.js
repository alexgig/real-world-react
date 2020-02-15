import { configureStore, createSlice } from '@reduxjs/toolkit'
import api from './api'
import * as R from 'ramda'


// Slice


const initialState =
  { users: null
  }


const reducers =
  { fetchUsersSuccess: ( state, action ) => {
      return R.merge(state, { users : action.payload})
    }
  , fetchUsersError: ( state, action ) => {
      console.error(action.payload)
      return state
    }
  , resetUsers: ( state, action ) => {
      return R.merge(state, { users: null })
    }
  }


const slice =
  createSlice(
    { name: 'app'
    , initialState
    , reducers
    }
  )


// Action creators


export const actions =
    slice.actions


export const fetchUsers = (payload) => async (dispatch) => {
  try {
    const data = await api.Users.all()
    dispatch(actions.fetchUsersSuccess(data))
  }
  catch (error) {
    dispatch(actions.fetchUsersError(error.message))
  }
}
  

// Store


export const store =
  configureStore(
    { reducer: slice.reducer
    }
  )
