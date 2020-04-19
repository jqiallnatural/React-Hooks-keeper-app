import React from "react";
import { createGlobalStyle } from "styled-components";

import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import notes from "../data";

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

const App = () => (
    <div>
      <GlobalStyle />
      <Header />
      {notes.map((noteItem) => 
          <Note
            key={noteItem.key}
            title={noteItem.title}
            content={noteItem.content}
          />
      )}
      <Footer />
    </div>
)

export default App;
