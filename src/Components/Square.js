import React from 'react'

export default function Square(props) {
    const styleDefault = {
        backgroundColor: 'white',
    }
    const styleX = {
        backgroundColor: '#fc0320',
        color: 'white' 
    }
    const styleO = {
        backgroundColor: '#03fc13',
        color: 'white'
    }
  return (
    <>
        <button style={props.value==='x'? styleX : props.value==='o' ? styleO : styleDefault} onClick={()=>{
            props.changeValue(props.index)
        }} >{props.value}</button>
        {props.index===2||props.index===5? <br/ >:''}
    </>
  )
}
