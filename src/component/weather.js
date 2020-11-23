import React ,{ useEffect, useState } from 'react'


const Weather = () => {
    const [Temperature , setTemperature] = useState({ f: 0, c: 0 })
    const [Message,setMessage] = useState(null)


    const handlechangeC = e =>{   
        setTemperature({
            c: e.target.value,
            f: (+e.target.value * 9 / 5 + 32)
          })
    }

    const handlechangeF = e =>{
        setTemperature({
            f: e.target.value,
            c: ((+e.target.value - 32) * 5 / 9)
          })
      }  

    useEffect(()=>{
        if (Temperature.c>=100){
            setMessage('The Water Would Boil')
        }else{
            setMessage('The Water Would Not Boil')
        }
    },[Temperature])

    return (
        <div>
            <input name='Celsius'  data-testid='Celsius' placeholder='Enter Temperature in  Celsius' value={Temperature.c} onChange={handlechangeC}/>
            <br></br>
            <input name='Fahrenheit' data-testid='Fahrenheit' placeholder='Enter Temperature in Fahrenheit' value={Temperature.f} onChange={handlechangeF}/>
            <br></br>
            <h1 data-testid='h1t'>{Message}</h1>          
        </div>
    )
}

export default Weather
