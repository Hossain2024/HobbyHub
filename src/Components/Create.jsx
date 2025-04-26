import React from "react";
import './Create.css'
import { supabase } from "../Client";
import  { useState } from 'react';
import Card from "./Card";

const Create = () => {
    const [formData, setformData] = useState({
        Title:'',
        content:'',
        URL:' '
    })

    const createPost = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Post')
          .insert({Title: formData.Title, Content:formData.content, URL: formData.URL})
          .select();
        window.location = "/";
    }
 return (
   <div className="form-container">
   <form onSubmit={createPost}>
    <input 
    className="input-title"
    type="text"
    placeholder="Enter title"
    value={FormData.Title}
    onChange={(e) => setformData({...formData, Title:e.target.value})}
    required
   />
   <textarea
   className="input-content"
   type="text"
   placeholder="Enter content"
   value={FormData.content}
   onChange={(e) => setformData({...formData, content:e.target.value})}
   />
   
   <input
   className="input-URL"
   type = "text"
   placeholder="URL (optional)"
   value = {FormData.URL}
   onChange={(e)=> setformData({...formData, URL:e.target.value})}/>

  <div className="button">
  <button type= "submit">Post</button>
  </div>
  
   </form>

   </div>
 )
}

export default Create;
