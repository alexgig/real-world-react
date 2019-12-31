import React from 'react'
import { connect } from 'react-redux'
import Banner from './Banner'
import MainView from './MainView'
import { actions } from '../../store'


const mapState = ( state, ownProps ) => (
  { appName: state.appName
  }
)


const mapDispatch = ( dispatch, ownProps ) => (
  { articlesList: actions.articlesList
  }
)


const Home = props => {
  return (
    <div className="home-page">
      <Banner appName={props.appName}/>
      <div className="container page">
        <div className="row">
          <MainView />
          <div className="col-md-3">
            <div className="sidebar">
              <p>Popular Tags</p>
            </div>
          </div>
        </div>
      </div>
    </div>    
  )
}


export default connect
  ( mapState
  , mapDispatch
  )
  (Home)