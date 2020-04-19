import React from "react";
import styled from "styled-components";

const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 7px;
  box-shadow: 0 2px 5px #ccc;
  padding: 10px;
  width: 240px;
  margin: 16px;
`

const NoteHeader = styled.h1`
  font-size: 1.1em;
  margin-bottom: 6px;
`

const Paragraph = styled.p`
  font-size: 1.1em;
  margin-bottom: 10px;
  white-space: pre-wrap;
  word-wrap: break-word;
`

function Note(props) {
  return(
    <NoteContainer>
      <NoteHeader>{props.title}</NoteHeader>
      <Paragraph>{props.content}</Paragraph>
    </NoteContainer>
  )
}

export default Note