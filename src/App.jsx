import { useState,useEffect } from 'react'

function App() {
  const [meme, setMeme] = useState({
    topText:"One does not simply",
    bottomText:"Walk into Mordor",
    imageUrl:"https://cdn-useast1.kapwing.com/static/templates/one-does-not-simply-meme-template-full-a952427e.webp"
  })
  const[allMemes,setAllMemes] =useState([])
  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res =>res.json())
    .then(data => setAllMemes(data.data.memes))
  },[])
  function getMemeImage(){
    const randomNumber=Math.floor(Math.random()*allMemes.length);
    const newMemeurl=allMemes[randomNumber].url
    setMeme(prevMeme=>({
      ...prevMeme,
      imageUrl:newMemeurl
    }))
    console.log("h");
  }
  function handleChange(event){
    const {value,name} =event.currentTarget
    setMeme(prevMeme=>({
      ...prevMeme,
      [name]:value,
    }))
  }
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
          onChange={handleChange}
          value={meme.topText}
          />
        </label>
        <label>Bottom Text
          <input
          type="text"
          placeholder="Walk into Mordor"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
          />
        </label>
        <button onClick={getMemeImage}>Get a new meme image🖼️</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl}/>
        <span className='top'>{meme.topText}</span>
        <span className='bottom'>{meme.bottomText}</span>
      </div>
    </main>
    <footer><h4>Note:-Some Memes might not support the text styling format,However the purpose of this project is to learn React.</h4></footer>
    </>
  )
}

export default App
