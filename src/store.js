import { configureStore, createSlice } from '@reduxjs/toolkit'
import api from './api'
import * as R from 'ramda'


const initialState =
  { appName: 'conduit'
  , articles: null
  }


const reducers =
  { fetchArticlesSuccess: ( state, action ) => {
    console.log(action)
    return R.merge(state, { articles : action.payload})
  }
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


export const fetchArticles = () => async (dispatch) => {
  const data = await api.Articles.all()
  dispatch(actions.fetchArticlesSuccess(data.articles))
}
  

export const store =
  configureStore(
    { reducer: slice.reducer
    }
  )
