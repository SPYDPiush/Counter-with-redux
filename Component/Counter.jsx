import React from 'react'
import { useSelector } from 'react-redux'

function Counter() {

  const counter = useSelector(store => store.counter)

  return (
    <div className='counter'>
      Counter is : {counter}
    </div>
  )
}

export default Counter
