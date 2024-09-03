import React from 'react';
import { useState } from 'react';

function CreateArea(props:any){

  const [title,setTitle] = useState("")
  const [content, setContent] = useState("");

  function handleChange1(event:any){
    const name = event.target.value;
    setTitle(name);
  }

  
  function handleChange2(event:any){
    
    const name = event.target.value;
    setContent(name)
  
  }

  function submitNote(event:any){
    props.onAdd({title,content});
    event.preventDefault();
  }
  
  
  
  return (
    <div className='mt-5 ml-80 p-5'>
      <form className='border-2 shadow-xl max-w-md p-4 rounded'>
        <input
        onChange={handleChange1}
        className='w-full border-none p-1 outline-none resize-none'
        type='text' placeholder='Title'
        />
        <textarea
        onChange={handleChange2}
        className='w-full border-none p-1 outline-none resize-none'
        name='content'
        placeholder='Take a Note...'
        />
        <button
          onClick={submitNote}
          className='absolute bg-yellow-500 rounded-full text-white -ml-1 mt-14 border-none w-10 h-10 shadow-lg cursor-pointer outline-none'
        >Add</button>
      </form>
    </div>
  )
}

export default CreateArea;