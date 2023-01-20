import logo from './logo.svg';
import './App.css';
// import { TextToSpeech } from 'text-to-speech-js';
import React, { useCallback } from 'react';
// keepers
// import { useTts } from 'tts-react';
// import Webcam from 'react-webcam';

// const WebcamComponenet = () => <Webcam />
import { useRecordWebcam } from 'react-record-webcam';

// old tried and didn't work
// import Say from 'react-say';

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
  const recordWebcam = useRecordWebcam({ frameRate: 60 })

  const saveFile = async () => {
    const blob = await recordWebcam.getRecording();
  }
  // console.log(TextToSpeech.talk("hello"))
  // TextToSpeech.talk("Hello World")
  // const selector = useCallback(voices => [...voices].find(v => v.lang === 'en-GB'), [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Say text="A quick brown fox jumped over the lazy dogs."
          voice={selector} /> */}
        {/* <TextToSpeech
          markTextAsSpoken
          lang='en-GB'>
          <p> Hello World</p>
        </TextToSpeech> */}
        {/* <Webcam className='d-none' /> */}
        <div>
          <p>Camera status: {recordWebcam.status}</p>
          <button onClick={recordWebcam.open}>Open camera</button>
          <button onClick={recordWebcam.start}>Start recording</button>
          <button onClick={recordWebcam.stop}>Stop recording</button>
          <button onClick={recordWebcam.retake}>Retake recording</button>
          <button onClick={recordWebcam.download}>Download recording</button>
          <button onClick={saveFile}>Save file to server</button>
          <video style={{ display: "none" }} ref={recordWebcam.webcamRef} autoPlay muted />
          <video style={{ display: "none" }} ref={recordWebcam.previewRef} autoPlay muted loop />
        </div>

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
