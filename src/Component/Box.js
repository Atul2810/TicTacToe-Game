import React, { useState } from 'react'
import './Box.css'
import Square from './Square'
function Box() {
  const [state ,setState]=useState(Array(9).fill(null));
  const [isXTurn,setIsXTurn]=useState(true);
  function handleClick(index){
   let copyState=[...state];
   if(copyState[index]!==null)return;
   copyState[index]=isXTurn ? "X" : "o";
   setState(copyState);
   setIsXTurn(!isXTurn);
  }
  let draw=true;
  const checkwinner=()=>{
    const isWinner=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]
    for(let i=0; i<isWinner.length; i++){
      const [a,b,c]=isWinner[i];
      if(state[a]!==null && state[a]===state[b] && state[b]===state[c]){
        return state[a];
      }
      if(state[a]===null || state[b]===null || state[c]===null)draw=false;
    }
    return false;
  }
  const winner=checkwinner();
  const ResetBoard=()=>{
    setState(Array(9).fill(null));
  }
  return (
    <div className='box'>
      {winner ? (<>
        <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
        <span style={{fontSize:"30px"}}>{winner} Player is Won</span> 
      <button onClick={ResetBoard} className="btn-style">Play Again</button>
        </div>
      </>):
      (draw ? (<>
      <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
      <h1>Match Draw</h1>
      <button onClick={ResetBoard} className="btn-style">Play Again</button>
      </div>
      </>):(<>
       <div className="board-row">
        <Square onClick={()=>handleClick(0)} val={state[0]}/>
        <Square onClick={()=>handleClick(1)} val={state[1]}/>
        <Square onClick={()=>handleClick(2)} val={state[2]}/>
       </div>
       <div className="board-row">
       <Square onClick={()=>handleClick(3)} val={state[3]}/>
       <Square onClick={()=>handleClick(4)} val={state[4]}/>
       <Square onClick={()=>handleClick(5)} val={state[5]}/>
       </div>
       <div className="board-row">
       <Square onClick={()=>handleClick(6)} val={state[6]}/>
       <Square onClick={()=>handleClick(7)} val={state[7]}/>
       <Square onClick={()=>handleClick(8)} val={state[8]}/>
       </div>
       </>
      )
      )
      }
    </div>
  )
}

export default Box
