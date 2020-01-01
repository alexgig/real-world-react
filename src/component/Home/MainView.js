import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import ArticleList from '../ArticleList'
import { fetchArticles } from '../../store'


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
      <button onClick={props.fetchArticles}>Refresh</button>
      <ArticleList articles={props.articles}/>
    </div>
  )
}


const mapState = ( state, ownProps ) => (
  { articles: state.articles
  }
)


const mapDispatch = ( dispatch, ownProps ) => (
  { fetchArticles: () => dispatch(fetchArticles())
  }
)


export default connect
  ( mapState
  , mapDispatch
  )
  (MainView)