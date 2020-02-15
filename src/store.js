import { configureStore, createSlice } from '@reduxjs/toolkit'
import api from './api'


// Slice


const initialState =
  { users: null
  }


const reducers =
  { fetchUsersSuccess: ( state, action ) => {
      return ({ ...state, users : action.payload })
    }
  , fetchUsersError: ( state, action ) => {
      console.error(action.payload)
      return state
    }
  , resetUsers: ( state, action ) => {
      return { ...state, users: null }
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


const fetchUsers = (payload) => async (dispatch) => {
  try {
    const data = await api.Users.all()
    dispatch(actions.fetchUsersSuccess(data))
  }
  catch (error) {
    dispatch(actions.fetchUsersError(error.message))
  }
}


export const actions =
  { ...slice.actions
  , fetchUsers
  }


// Store


export const store =
  configureStore(
    { reducer: slice.reducer
    }
  )
