import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title:'',
    content:''
  });


  function submitNote(event){
    props.onAdd(note);
    setNote({
      title:'',
      content:''
    });
    event.preventDefault();
  }

  function handleChange(event){
    const{name, value} = event.target;
    setNote(prevValue=>{
      return{
        ...prevValue,
        [name]:value
      }
    })
  }
  return (
    <div>
      <form className="create-note">
        <input 
        onChange={handleChange} 
        value={note.title} 
        name="title" 
        placeholder="Title" 

        />
        <textarea 
        onChange={handleChange} 
        value={note.content} 
        name="content" 
        placeholder="Take a note..." 
        rows="3" 

        />
        <button 
         onClick={submitNote}
         type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
