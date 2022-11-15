import { useContext } from "react"
import { LanguageContext } from "../App"

export default function Details(){
  const { lang, English } = useContext(LanguageContext)
  return (
    <section>
      <h3>{lang["details.header"] || English["details.header"]}</h3>
      <p>{lang["details.text"] || English["details.text"]}</p>
    </section>
  )
}