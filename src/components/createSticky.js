import React, {useState} from 'react'
import styled from "styled-components";

import { NoteHeader, Paragraph } from './note'

const NoteContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  border-radius: 7px;
  box-shadow: 0 2px 5px #ccc;
  padding: 10px;
  width: 300px;
  margin: 16px;
`;

function CreateSticky(props) {

  const [note, setNote] = useState({
    title: '',
    content: ''
  })

  const handleChange = (event) => {
    const {name, value} = event.target
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  // The button click will re-render the page, therefore, preventDefault is used here
  const submitNote = (event) => {
    props.onAdd(note)
    setNote({
      title: '',
      content: ''
    })
    event.preventDefault()
  }

  return (
    <NoteContainer>
        <NoteHeader name='title' value={note.title} onChange = {handleChange} placeholder='Title' />
        <Paragraph name ='content' value={note.content} onChange = {handleChange} placeholder='Take a note...' rows='3'/>
        <button onClick = {submitNote}>Add</button>
    </NoteContainer>
  )
}

export default CreateSticky