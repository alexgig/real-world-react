import React from 'react'


const Banner = (props) => {
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">
          {props.appName.toLowerCase()}
        </h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
  )
}


export default Banner