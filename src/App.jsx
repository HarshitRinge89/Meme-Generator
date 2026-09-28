import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <img/>
      <h1>Meme Generator</h1>
    </header>
    <main>
      <div className="form">
        <label>Top Text
          <input
          type="text"
          placeholder="One does not simply"
          name="topText"
          />
        </label>
        <label>Bottom Text
          <input
          type="text"
          placeholder="Walk into Mordor"
          name="bottomText"
          />
        </label>
        <button>Get a new meme image🖼️</button>
      </div>
      <div className="meme">
        <img src="https://cdn-useast1.kapwing.com/static/templates/one-does-not-simply-meme-template-full-a952427e.webp"/>
        <span className='top'>One does not simply</span>
        <span className='bottom'>Walk into Mordor</span>
      </div>
    </main>
    </>
  )
}

export default App
