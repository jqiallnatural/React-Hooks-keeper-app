import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";

import Header from "./header";
import Footer from "./footer";
import { Note } from "./note";
import CreateSticky from "./createSticky";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  };
  html {
    font-family: "Montserrat", sans-serif;
  };
  body {
    background: #eee;
    padding: 0 16px;
  }
`;

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  // Using filter to end up with an array that contains everything from previous notes other than index matches with the id of the notes that are to be deleted
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteitem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <GlobalStyle />
      <Header />
      <CreateSticky onAdd={addNote} />
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
};

export default App;
