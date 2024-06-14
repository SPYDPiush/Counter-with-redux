import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

function Counteroperator() {

  // const [addnum,setAddnum] = useState()
  // const [subnum,setSubnum] = useState()

  // here we are done through useRef 

  const addnum = useRef()
  const subnum = useRef()

  const dispatch  =  useDispatch()

  const addCounter = () => {

    dispatch({type:"INCRECMENT"})
    
  }

  const subCounter = () => {
    dispatch({type:"DECREMENT"})
  }

  const addNum = () => {

    if(addnum.current.value == ""){
      alert("Enter Number please")
      return
    }
   !isNaN(addnum.current.value)?dispatch({type:'ADD_NUM',payload:{
    addnum:addnum.current.value
  }}):alert("Only Enter Number Please")

  addnum.current.value=""
    
  }

  const subNum = () => {

    if(subnum.current.value == ""){
      alert("Enter Number please")
      return
    }

    !isNaN(subnum.current.value)?dispatch({type:'SUB_NUM',payload:{
      subnum:subnum.current.value
    }}):alert("Only Enter Number Please")

    subnum.current.value=""

  }

  return (
    <div className='outeroper'>
      <div className='operator'>
        <div className='norop' onClick={addCounter}>
          +1
        </div>
        <div className='norop' onClick={subCounter}>
          -1
        </div>
        <div className='inpop'>
          {/* <input type="text" value={addnum} onChange={(e) => setAddnum(e.target.value)}/> */}
          <input type='text' ref={addnum} />
          <div className='btn' onClick={addNum}>
          Add
          </div>
        </div>
        <div className='inpop'>
          {/* <input type='text' value={subnum} onChange={(e) => setSubnum(e.target.value)}/> */}
          <input type='text' ref={subnum} />
          <div className='btn' onClick={subNum}>
          Sub
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default Counteroperator
