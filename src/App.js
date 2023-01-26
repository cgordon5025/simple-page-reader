import logo from './logo.svg';
import './App.css';
import React, { useCallback } from 'react';
// keepers
// import { useTts } from 'tts-react';
import Webcam from 'react-webcam';
// import {Text}

// import { useRecordWebcam } from 'react-record-webcam';
import { RecordWebcam, useRecordWebcam } from 'react-record-webcam';
// old tried and didn't work
import Say, { SayButton } from 'react-say';

// const OPTIONS = {
//   fileName: `participant_1`,
//   mimeType: "video/mp4",
//   width: 1920,
//   height: 1080, \

// } as const;
// import { TextToSpeech } from 'tts-react';
// import type { TTSHookProps } from 'tts-react';

// type SpeakProps = Pick<TTSHookProps, 'children'>
// const Speak = ({ children }: SpeakProps) => {
//   <>{useTts({ children, autoPlay: true }).ttsChildren}</>
// }
// class WebcamCapture extends React.Component{
//   render(){

//   }
// }

function App() {
  const synth = window.speechSynthesis;
  // console.log(synth.getVoices())
  const voices = synth.getVoices().sort(function (a, b) {
    const aname = a.name.toUpperCase();
    const bname = b.name.toUpperCase();

    if (aname < bname) {
      return -1;
    } else if (aname == bname) {
      return 0;
    } else {
      return +1;
    }
  });
  const phrase = "The quick brown fox jumped over the lazy dogs."
  const tempPhrase = phrase.split(' ')
  console.log(tempPhrase)
  var spanPhrase = document.createElement('p')

  for (let i = 0; i < tempPhrase.length; i++) {
    console.log("running the span section")
    var spanObj = document.createElement('span')
    spanObj.textContent = (tempPhrase[i] + " ")
    spanObj.setAttribute('id', `word_${i}`)
    // spanPhrase.className = "spanPhrase"
    spanPhrase.appendChild(spanObj)
    spanPhrase.append(spanObj);
  }
  // console.log(spanPhrase)
  // document.getElementById('highlightContainer').appendChild(spanPhrase)

  const rate = 1;
  const daniel = voices[14];
  const utterThis = new SpeechSynthesisUtterance(phrase)
  utterThis.rate = rate
  utterThis.voice = daniel
  // var wordIndex = 0
  //trying to get voice word tracking
  const words = document.getElementById('highlightContainer')
  // const words = document.getElementById('highlightContainer').firstChild.children

  const color = () => {
    console.log("doing the highlight")
    // set up as an interval it does not function as I though, brush up on interval skills?
    var highlight = setInterval(function () {
      console.log("reading the words")
      for (let i = 0; i < words.length - 1; i++) {
        console.log(words[i])
        words[i].style.color = "blue"
        console.log(`coloring ${words[i]} blue`)
        if (i == words.length - 1) {
          clearInterval(highlight)
        }
      }
    }, 1000)

  }
  //speak it
  const speak = () => {
    synth.speak(utterThis)
    // color()
  }
  const WebcamComponenet = () => <Webcam />

  const recordWebcam = useRecordWebcam({ frameRate: 60 })

  const saveFile = async () => {
    const blob = await recordWebcam.getRecording();
  }
  const selector = useCallback(voices => [...voices].find(v => v.lang === 'en-GB'), [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p> Hello {voices[14]}</p> */}
        <div id="highlightContainer">

        </div>
        <p> {daniel.name} {daniel.lang}</p>
        <button onClick={speak}> Speak as daniel</button>
        <div>
          {/* <Say text="A quick brown fox jumped over the lazy dogs."
          voice={selector} /> */}
          {/* <SayButton
          onClick={event => console.log(event)}
          pitch={1.2}
          text="A quick brown fox jumped over the lazy dogs."
          voice={selector}> Say Something</SayButton>
        <TextToSpeech
          markTextAsSpoken
          lang='en-GB'
          rate={".9"}>
          <p>The quick brown fox jumped over the lazy dogs</p>
        </TextToSpeech> */}
        </div>
        {/* with languages unable to change the pitch of the voice */}
        {/* be sure to not have a space at the beginning because it will mess with the highlighting  */}

        {/* <Webcam className='d-none' /> */}
        <div>
          <p>Camera status: {recordWebcam.status}</p>
          <button onClick={recordWebcam.open}>Open camera</button>
          <button onClick={recordWebcam.start}>Start recording</button>
          <button onClick={recordWebcam.stop}>Stop recording</button>
          <button onClick={recordWebcam.retake}>Retake recording</button>
          <button onClick={recordWebcam.download}>Download recording</button>
          <button onClick={saveFile}>Save file to server</button>
          <video ref={recordWebcam.webcamRef} autoPlay muted />
          <video ref={recordWebcam.previewRef} autoPlay muted loop />
        </div>
        <recordWebcam />

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
