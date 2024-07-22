import React, { useReducer } from 'react'


const initialState = 0

function  reducer (state,action){
    switch (action){
        case "Increament":
            return state + 1
         case "Decreament" :
            return state - 1
            default :
            return state ;    
    }
}

function Counter(){

    const [count,dispatch] = useReducer(reducer , initialState)
  return (
    <>
    <div className='counter'>
    <h1> Count Value:{count}</h1>
    <button onClick={()=> dispatch ("Increament")}>Increament</button>
    <button onClick={()=> dispatch ("Decreament")}>Decreament</button>
    </div>
    </>
  )
}

export default Counter