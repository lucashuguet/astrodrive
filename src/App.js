import React from 'react'
import FetchFiles from './components/fetchfiles';
import DropZone from './components/dropzone';
import Header from './components/header';
import "./css/App.css"

export default function App() {
  return (
    <div className="App">
      <Header/>
      <DropZone>
        <FetchFiles/>
      </DropZone>
    </div>
  );
}