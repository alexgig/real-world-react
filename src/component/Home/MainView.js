import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import ArticleList from '../ArticleList'
import { actions, fetchArticles } from '../../store'


const MainView = props => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchArticles())
  }, [])
  
  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          <li className="nav-item">
            <a href="" className="nav-link active">Global Feed</a>
          </li>
        </ul>
      </div>
      <button onClick={props.refresh}>Refresh</button>
      <ArticleList articles={props.articles}/>
    </div>
  )
}


const mapState = ( state, ownProps ) => (
  { articles: state.articles
  }
)


const mapDispatch = ( dispatch, ownProps ) => (
  { refresh: actions.articlesList
  }
)


export default connect
  ( mapState
  , mapDispatch
  )
  (MainView)