import { listAll, ref, getDownloadURL } from "firebase/storage"
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import folder from "../img/folder.svg"
import fetchicon from "./fetchicon";
import { storage } from "./storage";


async function fetchfirebase(path) {
    console.log("Fetch Firebase Function Called")
    const listRef = ref(storage, path);
    const getfiles = await listAll(listRef)
        .then((res) => {
            // console.log(res)
            return res
        }).catch((error) => {
            console.log(error)
            return "error"
        });
        
    const data = []
    getfiles.prefixes.forEach((item) => {
        data.push({
            name: ("/" + item._location.path_).replace(path + "/", "").replace("/", ""),
            path: item._location.path_,
            type: "folder",
            icon: folder,
            link: item._location.path_
        })
    })
        
    getfiles.items.forEach((item) => {
        const icon = fetchicon(item._location.path_)
        data.push({
            name: ("/" + item._location.path_).replace(path + "/", "").replace("/", ""),
            path: item._location.path_,
            type: "file",
            ext: icon[0],
            icon: icon[1],
            link: "#"
        })
    })

    return data
}

async function download(path, type) {
    if (type === "file") {
        console.log("Download Called")
        await getDownloadURL(ref(storage, path))
            .then((res) => {
                // console.log(res)
                let element = document.createElement("a")
                element.setAttribute("href", res)
                element.style.display = 'none'
                document.body.appendChild(element)
                
                element.click()
                // return res
            }).catch((error) => {
                console.log(error)
                return "error"
            });
    }
}


export default function FetchFiles() {
    const [itemlist, setItemlist] = useState(<div className="center"><h1>Loading...</h1></div>)

    const location = useLocation()

    useEffect(() => {
        fetchfirebase(window.location.pathname).then((data) => {        
            // console.log(data)

            if (data === "error") {
                console.log("An Error Occured")
            }

            try {
                setItemlist(data.map(function(item, i) {
                    return <li key={i} id={item.type}><Link to={item.link} onClick={() => {download(item.path, item.type)}}><img src={item.icon} className="icon" alt="file-icon"></img><p>{item.name}</p></Link></li>
                }))
            } catch (e) {
                console.log(e)
            }
        })
        
        // console.log(itemlist)
    }, [location])

    return (
        <ul className="files">
            {itemlist}
        </ul>
    )
}