import logo from './logo.svg';
import './App.css';
// import { TextToSpeech } from 'text-to-speech-js';
import React, { useCallback } from 'react';
import Say from 'react-say';
import { useTts } from 'tts-react';
import { TextToSpeech } from 'tts-react';
// import type { TTSHookProps } from 'tts-react';

// type SpeakProps = Pick<TTSHookProps, 'children'>
// const Speak = ({ children }: SpeakProps) => {
//   <>{useTts({ children, autoPlay: true }).ttsChildren}</>
// }
function App() {
  // console.log(TextToSpeech.talk("hello"))
  // TextToSpeech.talk("Hello World")
  // const selector = useCallback(voices => [...voices].find(v => v.lang === 'en-GB'), [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Say text="A quick brown fox jumped over the lazy dogs."
          voice={selector} /> */}
        <TextToSpeech
          markTextAsSpoken
          lang='en-GB'>
          <p> Hello World</p>
        </TextToSpeech>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
