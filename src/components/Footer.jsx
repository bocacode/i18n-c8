import { useContext } from "react"
import { LanguageContext } from "../App"

export default function Footer(){
  const { lang, English } = useContext(LanguageContext)
  return (
    <footer>
      <p>{lang["footer.text"] || English["footer.text"]}</p>
    </footer>
  )
}