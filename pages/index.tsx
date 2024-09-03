import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from './NavBar'
import CreateArea from './CreateArea'
import { useState } from 'react';
import Note from './Note'


const Home: NextPage = () => {

  const [notes, setNotes] = useState<string[]>([])

  function addNote(newnote:any){
    setNotes((preNotes)=>{
      return [...preNotes,newnote]
    })

    }
  function deleteNote(id:any){
    setNotes(preNotes=>{
      return preNotes.filter((noteItem,index)=>{
        return index !== id;
      })
    })
  }

  
    
    

  return (
    <div>
      <Head>
        <title>Notes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar text='Notes' />
      <CreateArea onAdd={addNote} />

    
     {notes.map((noteItem:any,index)=>{ return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}  />
 })}

      
    </div>
  )
}

export default Home;