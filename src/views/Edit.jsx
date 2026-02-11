import React, {useEffect}from 'react'
import { useState } from 'react'
import axios from 'axios'
import toast,{Toaster}from 'react-hot-toast'
import { useParams } from 'react-router-dom'

function Edit() {
  const [student, setStudent] = useState({
    id: "",
    name: "",
    city: ""
  })
  function handlechange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setStudent(values => ({ ...values, [name]: value }))

  }

  async function buttonhandle() {
   try{
    const response = await axios.put(`${import.meta.env.VITE_API_URL}/students/${userId}`, {
     
      name: student.name,
      city: student.city
    })
    if (response.data.success) {
    //   setStudent({
    //     id: "",
    //     name: "",
    //     age: ""
    //   })
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
   const { userId }=useParams();
const loadstudent=async()=>{
    const response= await axios.get(`${import.meta.env.VITE_API_URL}/students/${userId}`);
    setStudent(response.data.data);

}
useEffect(()=>{
if(userId){
   loadstudent();
}
},[userId])

  return (
    <>
      <div className="text-center font-serif text-4xl font-bold">Edit  Student({userId})</div>
      <div className="bg-blue-50  p-4 flex flex-col justify-center items-center ">

        <input type="text" placeholder="Id" name="id" onChange={handlechange} value={student.id} className="border border-black m-2 w-64 "disabled />
        <input type="text" placeholder="Enter Your name" name="name" value={student.name} className="border border-black m-2 w-64" onChange={handlechange} />

        <input type="text" placeholder="Enter Your city" name="city" value={student.city} className="border border-black m-2 w-64" onChange={handlechange} />

        <button type="button" className="bg-blue-500 font-['Inter'] font-semibold p-2 text-white text-md rounded-md" onClick={buttonhandle}>Add Student</button>

        
        <Toaster/>
      </div>

    </>

  )
}

export default Edit