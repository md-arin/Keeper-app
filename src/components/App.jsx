import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(props) {

  const [notes, setNotes] = useState([])

  function addNote(newNote){
    setNotes((prevValues)=>{
      return [...prevValues, newNote]
    })
  }

function deleteNotes(id) {
    setNotes((prevValue) => {
        return prevValue.filter((notes, index) => {
            return index !== id;
        })
    })
}
  return (
    <div>
      <Header />
      <CreateArea 
      onAdd={addNote}  
      />
    {notes.map((noteItems, index)=>{
      return (
        <Note
        key={index} 
        id={index} 
        title={noteItems.title} 
        content={noteItems.content}
        onClicked={deleteNotes}

        />
      )
    })}
      
      <Footer />
    </div>
  );
}

export default App;
