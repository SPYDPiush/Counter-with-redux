import React from 'react'

function Container({children}) {
  return (
    <center>
    <div className='container'>
      {children}   
    </div>
    </center>
  )
}

export default Container
