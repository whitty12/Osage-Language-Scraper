import axios from "axios"
import {load} from "cheerio"
import { html } from "cheerio/dist/commonjs/static"

async function scrapeSite() {
    // perform an HTTP GET request to the target page
    const response = await axios.get("https://www.osageculture.com/language/dictionary/osage-english")
    // get the HTML from the server response
    // and log it
    const html = response.data
    //console.log(html)

    const $ = load(html)

    // select the main parts of each entry
    const letterElement = $("div.letter").first()
    const mainHeadWordElement = $("span.mainheadword").first()
    const pronunciationElement = $("span.pronunciation").first()
    const partOfSpeechElement = $("span.partofspeech").first()
    const definitionElement = $("span.definitionorgloss").first()

    //console.log(letHeadElement)

    const letter = $(letterElement).find("span").first().text()
    const word = $(mainHeadWordElement).find("a").first().text()
    //const pronunciation = $(pronunciationElement).find("span")
    //const partOfSpeech = $(partOfSpeechElement).find("span").text()
    //const definition = $(definitionElement).find("span").first().text()

    console.log(letter)
    console.log(word)
    //console.log(pronunciation)
    //console.log(partOfSpeech)

    //console.log(definition)
  }
  
  scrapeSite()

