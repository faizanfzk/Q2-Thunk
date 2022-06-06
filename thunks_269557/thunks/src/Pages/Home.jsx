import { useState,useEffect } from "react"
import axios from"axios"

export const Home=()=>{
const [loading,setLoading]=useState(false)
const [error,setError]=useState(false)
const [data,setData]=useState([])

useEffect(()=>{
    setLoading(true)
    axios({
        url:"https://reqres.in/api/login",
        method:"POST",
 
    })
    .then(res=>{
        setLoading(false)
        setData(res.data)
    })
    .catch(err=>{
        setError(true);
        setLoading(false)
    })
},[])

    return(
        <div>
    
            <input type="text" placeholder="enter your email" />
        <input type="password" placeholder="enter password" />
        <button onClick={()=>{
            alert("Success")
        }} >Submit</button>
        </div>
    )
}