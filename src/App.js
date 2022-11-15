import { useState, createContext } from 'react'
import Details from './components/Details'
import Footer from './components/Footer'
import English from './lang/en.json'
import Spanish from './lang/es.json'
import French from './lang/fr.json'
import Arabic from './lang/ar.json'
import './App.css'

const locale = navigator.language || 'en';

const _lang = (locale === 'es')
  ? Spanish
  : (locale === 'fr')
    ? French
    : (locale === 'ar')
      ? Arabic
      : English;

export const LanguageContext = createContext()

function App() {
  const [lang, setLang] = useState(_lang)
  return (
    <LanguageContext.Provider value={{ lang, English }}>
      <div className="App">
        <header className="App-header">
          <div>
            <button onClick={() => setLang(English)}>🇺🇸</button>
            <button onClick={() => setLang(Spanish)}>🇪🇸</button>
            <button onClick={() => setLang(French)}>🇫🇷</button>
            <button onClick={() => setLang(Arabic)}>🇪🇬</button>
          </div>
          <h1>{lang["app.header"]}</h1>
          <p>{lang["app.subhead"]}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {lang["app.cta"]}
          </a>
          <Details />
          <Footer />
        </header>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
