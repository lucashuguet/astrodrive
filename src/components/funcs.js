import { ref, uploadBytes } from "firebase/storage";
import { storage } from "./storage";

export default function upload(files) {
  console.log("Upload Function Called")
  console.log(files)

  files.forEach((file, i) => {
    if (file == null) {
      return;
    }

    let reference = window.location.pathname

    if (file.path == null) {
      reference += file.name
    } else {
      reference += file.path
    }

    const storageRef = ref(storage, `${reference}`)
    console.log("Uploading", file.name)
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Uploaded " + file.name)
      if (i === 0) {
        setTimeout(() => { window.location.reload() }, 1000)
      }
    })
  })
}