import React from 'react'
import { connect } from 'react-redux'
import List from '../List'
import { actions, fetchUsers } from '../../store'


const MainView = props => {
  return (
    <div>
      <button onClick={props.fetchUsers}>Gather troops ...</button>
      <button onClick={props.resetUsers}>Clear out!</button>
      <List data={props.users}/>
    </div>
  )
}


const mapState = ( state, ownProps ) => (
  { users: state.users
  }
)


const mapDispatch = ( dispatch, ownProps ) => (
  { fetchUsers: () => dispatch(fetchUsers())
  , resetUsers: () => dispatch(actions.resetUsers())
  }
)


export default connect
  ( mapState
  , mapDispatch
  )
  (MainView)