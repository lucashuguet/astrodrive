import React, { useCallback } from "react";
import { useDropzone } from 'react-dropzone';
import upload from "./funcs";


function dragactive() {
  const root = document.getElementsByClassName("dropzone")[0]
  root.classList.add("green")
  
  return <h1>Drop Here</h1>
}
  
function dragnotactive() {
  try {
    const root = document.getElementsByClassName("dropzone")[0]
    root.classList.remove("green")
  } catch {}
}

export default function DropZone(props) {
  
  const onDrop = useCallback(acceptedFiles => {
    upload(acceptedFiles)
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, noClick: true})

  if (isDragActive) {
    dragactive()
  } else {
    dragnotactive()
  }

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      {props.children}
    </div>
  )
}