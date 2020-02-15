import React from 'react'


const List = props => {
  // Empty state
  if (!props.data) {
    return (
      <h5>Awaiting orders ...</h5>
    )
  }
  // Non-empty state
  else {
    return (
      <div>
        {
          props.data.map( user => {
            return (
              <h5 key={user.id}>{user.login}</h5>
            )
          })
        }
      </div>
    )
  }
}


export default List