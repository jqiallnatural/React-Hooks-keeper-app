import React from "react";
import styled from "styled-components";

const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  border-radius: 7px;
  box-shadow: 0 2px 5px #ccc;
  padding: 10px;
  width: 240px;
  margin: 16px;
`;

const NoteHeader = styled.input`
  font-size: 1.1em;
  margin-bottom: 6px;
`;

const Paragraph = styled.input`
  font-size: 1.1em;
  margin-bottom: 10px;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const Note = (props) => {
  const handleClick = () => {
    props.onDelete(props.id)
  }
  return (
    <NoteContainer>
      <NoteHeader placeholder={props.title}></NoteHeader>
      <Paragraph placeholder={props.content}></Paragraph>
      <button onClick = {handleClick} >delete</button>
    </NoteContainer>
  );
}

export {Note, NoteHeader, Paragraph} ;
