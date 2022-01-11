import "./styles.css";
import Noteslist from "./components/Noteslist";
import { useState } from "react";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

function Keepnotes() {
  const [notes, setNotes] = useState([]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const [searchtext, setSearchText] = useState("");

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div id="div" className="container">
      <Header />
      <Search handleSearchNote={setSearchText} />
      <Noteslist
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchtext)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default Keepnotes;
