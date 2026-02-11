import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import toast,{Toaster}from 'react-hot-toast'
function Add() {
  const [student, setStudent] = useState({
    id: "",
    name: "",
    age: ""
  })
  function handlechange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setStudent(values => ({ ...values, [name]: value }))

  }

  async function buttonhandle() {
   try{
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/students`, {
      id: student.id,
      name: student.name,
      age: student.age
    })
    if (response.data.success) {
      setStudent({
        id: "",
        name: "",
        city: ""
      })
      toast.success(response.data.message)
    }
    else {
      toast.error(response.data.message);
    }
  }
  catch(e){
    toast.error(e.response.data.messsage)
  }

  }


  return (
    <>
      <div className="text-center font-serif text-4xl font-bold">Add Student</div>
      <div className="bg-blue-50  p-4 flex flex-col justify-center items-center ">

        <input type="text" placeholder="Id" name="id" onChange={handlechange} value={student.id} className="border border-black m-2 w-64 " />
        <input type="text" placeholder="Enter Your name" name="name" value={student.name} className="border border-black m-2 w-64" onChange={handlechange} />

        <input type="text" placeholder="Enter Your city" name="city" value={student.city} className="border border-black m-2 w-64" onChange={handlechange} />

        <button type="button" className="bg-blue-500 font-['Inter'] font-semibold p-2 text-white text-md rounded-md" onClick={buttonhandle}>Add Student</button>

        <h3>{student.id}</h3>
        <h3>{student.name}</h3>
        <h3>{student.city}</h3>
        <Toaster/>
      </div>

    </>

  )
}

export default Add