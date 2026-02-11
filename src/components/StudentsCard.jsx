import React from 'react'
import Delete from '../assets/delete.png'
import Editimage from '../assets/edit.png'
import toast,{Toaster} from 'react-hot-toast'
import axios from 'axios'
import {Link} from 'react-router-dom'
function StudentsCard({id,name,city,loadstudent}) {
  const DeleteRecord=async()=>{
   const response=await axios.delete(`http://localhost:5001/students/${id}`);
    
   if(response.data.success){
    toast.success(response.data.message);
loadstudent();
   }
   else{
    toast.error(response.data.message);
   }
  }
  return (
    <div className="relative">
           <div className="">
            <h2>{id} {name}</h2>
            <h3>{city}</h3>
           </div>
    <img src={Delete} alt="Delete image icon" className="w-5 h-5 absolute top-1 right-5" onClick={DeleteRecord}/>
     
     <Link to={`/edit/${id}`}>
    <img src={Editimage} alt="Delete image icon" className="w-5 h-5 absolute bottom-1 right-5 "/>
    </Link>
    </div>
  )
}

export default StudentsCard