import aep from "../img/aep.svg"
import ai from "../img/ai.svg"
import doc from "../img/doc.svg"
import fla from "../img/fla.svg"
import html from "../img/html.svg"
import indd from "../img/indd.svg"
import mp3 from "../img/mp3.svg"
import pdf from "../img/pdf.svg"
import png from "../img/png.svg"
import psd from "../img/psd.svg"
import xlm from "../img/xlm.svg"
import zip from "../img/zip.svg"
import video from "../img/video.svg"
import image from "../img/image.svg"
import font from "../img/font.svg"
import file from "../img/file.svg"

export default function fetchicon(name) {
    const splited = name.split(".")
    const ext = splited[1]
    // console.log(ext)
    let icon

    switch (ext) {
        case "aep":
            icon = aep
            break
        case "ai":
            icon = ai
            break
        case "doc":
            icon = doc
            break
        case "fla":
            icon = fla
            break
        case "html":
            icon = html
            break
        case "indd":
            icon = indd
            break
        case "mp3":
            icon = mp3
            break
        case "pdf":
            icon = pdf
            break
        case  "png":
            icon = png
            break
        case "psd":
            icon = psd
            break
        case "xlm":
            icon = xlm
            break
        case "zip":
            icon = zip
            break
        case "mp4":
            icon = video
            break
        case "mkv":
            icon = video
            break
        case "webm":
            icon = video
            break
        case "avi":
            icon = video
            break
        case "jpg":
            icon = image
            break
        case "jpeg":
            icon = image
            break
        case "gif":
            icon = image
            break
        case "bmp":
            icon = image
            break
        case "hdr":
            icon = image
            break
        case "exr":
            icon = image
            break
        case "ttf":
            icon = font
            break
        default:
            icon = file
            break
    }

    return [ext, icon]
}