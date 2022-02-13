import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import upload from "./funcs"

function selectfile() {
    const selector = document.getElementById("file-selector")
    selector.click()
}
    
function onchange() {
    const selector = document.getElementById("file-selector")
    const files = []
      
    for (let i in selector.files) {
        const file = selector.files[i]
        if (typeof(file) === "object") {
            files.push(file)
        }
    }

    console.log(files)

    upload(files)

    setTimeout(() => { window.location.reload() }, 500)
}
    
export default function Header() {
    const [indicator, setIndicator] = useState("")

    const location = useLocation()

    useEffect(() => {
        const temp = []

        window.location.pathname.split("/").forEach((item, n) => {
            if (item !== "") {
                let path = []
                for (let i = 0; i < n; i++ ){
                    path.push(window.location.pathname.split("/")[i])
                }
                path.shift()
                path = path.join("/")
                if (path === "") {
                    path = "/" + item
                } else {
                    path = "/" + path + "/" + item
                }
                temp.push(
                    <span key={n}>
                        { n !== 1 ? <span>/</span> : <></> }
                        <span>
                            <Link to={path}>{item}</Link>
                        </span>
                    </span>
                )
            }
        })

        // temp.shift()

        setIndicator(temp)
        
    }, [location])

    return(
        <nav>
            <div className="logo">
                <h4><Link to="/">AstroDrive</Link></h4><p className="location"><span>:/</span>{indicator}</p>
            </div>
            <ul className="links">
                <li><Link to="/">Home</Link></li>
                <li>
                    <Link to="#" onClick={selectfile} className="upload">Upload</Link>
                    <input multiple type="file" id="file-selector" onChange={onchange}></input>
                </li>
                <li><Link to="#">About</Link></li>
                <li><Link to="#">Logout</Link></li>
            </ul>
        </nav>
    )
}