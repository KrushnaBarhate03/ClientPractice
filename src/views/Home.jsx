import React from 'react'
import {useState,useEffect} from 'react'
import{Link} from 'react-router-dom'
import StudentCards from '../components/StudentsCard.jsx'
import axios from 'axios'
import AddIcon from '../assets/add.png'
function Home() {
  const[student,setStudent]=useState([])

const loadstudent= async()=>{
  const response=await axios.get(`${import.meta.env.VITE_API_URL}/students`);
  setStudent(response.data.data);
}
useEffect(()=>{
loadstudent()
},[])
  return (
    <div>
      
       {student.map((stud,i)=>{
        const {id,name,city}=stud;
       return(
        <div key={i} className=" p-2 border border-black mt-4 rounded-sm m-2 bg-white shadow-lg">
        <StudentCards id={id} name={name} city={city} loadstudent={loadstudent}/>
        </div>
       )
        
       })}
      <Link to="/add">
      <img src={AddIcon} alt="Add user Icon " className="w-15 h-15 fixed bottom-5 right-5"/>
      </Link>
     
    </div>

    
  )
}

export default Home