import React from 'react';
import ReactDOM from 'react-dom';
import './ClockSmall.css'; 








function ClockSmall(props){
  const hourTime =props.hourt;
  const minTime =props.mint;
  const secTime =props.sect;
  const secHand= secTime * 6
  const minHand =( minTime + secTime / 60) * 6;
  const hourHand=((hourTime % 12) +  minTime/ 60 + secTime / 3600) * 30;
  const hStyle = {
    transform: `rotate(${hourHand}deg)`
  }
 const mStyle = {
    transform: `rotate(${minHand}deg)`
  }
  const sStyle = {
    transform: `rotate(${secHand}deg)`
  }
  

 
  const nums=[1,2,3,4,5,6,7,8,9,10,11,12];
  const numsList=nums.map((num)=>
  <li>{num}</li>
    );
  return(
  
 <div className="clock">
      
     <h2 class="input-h">{props.time}</h2>
   
    <div className='clockface2'>
       <div className='nums'><ul>{numsList}</ul></div>
        <div className='dot2'></div>
       <div style={sStyle}className='sec2'></div>
        <div style={mStyle}className='min2'></div>
         <div style={hStyle} className='hour2'></div>
             </div>
     <div className="input-clock">
       
     <h2> {props.digital}</h2>
     </div>
</div>
  );
}
export default ClockSmall