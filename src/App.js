import React,{useState, useEffect} from 'react'
import ClockSmall from './ClockSmall';
import './index.css';


function App() {
  const [dhour, setdhour]=useState();
  const [dmin, setdmin]=useState();
const [dsec, setdsec]=useState();
const [dClockState, setdClockState]=useState();
const [dhour2, setdhour2]=useState();
const [dmin2, setdmin2]=useState();
const [dsec2, setdsec2]=useState();
const [dClockState2, setdClockState2]=useState();
const [dhour3, setdhour3]=useState();
const [dmin3, setdmin3]=useState();
const [dsec3, setdsec3]=useState();
const [dClockState3, setdClockState3]=useState();
const [dhour4,setdhour4]=useState();
const [dmin4, setdmin4]=useState();
const [dsec4, setdsec4]=useState();
const [dClockState4, setdClockState4]=useState();

useEffect(()=>{
setInterval(()=>{
   const date=new Date();
   

   setdhour(date.getHours());
    setdsec(date.getSeconds()); 
    setdmin(date.getMinutes());
    const newyork=new Date().toLocaleString('en-US', { timeZone: 'America/New_york', timeStyle:'medium', hourCycle:'h24' });
    const toronto=new Date().toLocaleString('en-US', { timeZone: 'America/Toronto', timeStyle:'medium', hourCycle:'h24' });
    const london=new Date().toLocaleString('en-US', { timeZone: 'Europe/London', timeStyle:'medium', hourCycle:'h24' });
    setdhour2(newyork.split(":", 1));
    setdhour3(toronto.split(":", 1));
    setdhour4(london.split(":", 1));
    setdClockState( new Date().toLocaleTimeString());
    setdClockState2(new Date().toLocaleString('en-US', { timeZone: 'America/New_york', timeStyle:'medium', hourCycle:'h12' }))
    setdClockState3(new Date().toLocaleString('en-US', { timeZone: 'America/Toronto', timeStyle:'medium', hourCycle:'h12' }))
    setdClockState4(new Date().toLocaleString('en-US', { timeZone: 'Europe/London', timeStyle:'medium', hourCycle:'h12' }))
},1000);
},[]);
  return (
    <div className="container">
      <div className="time-container">
      <ClockSmall hourt={dhour} mint={dmin} sect={dsec} time={'Local Time'} digital={dClockState}/>
      <ClockSmall hourt={dhour2} mint={dmin} sect={dsec} time={'New York'} digital={dClockState2}/>
      <ClockSmall hourt={dhour3} mint={dmin} sect={dsec} time={'Toronto'} digital={dClockState3}/>
      <ClockSmall hourt={dhour4} mint={dmin} sect={dsec} time={'London'} digital={dClockState4}/>
         
       </div>
      
      
    </div>
  );
}

export default App;
