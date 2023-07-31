import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
function App() {

    const [joke,setjoke] = useState([]);
    
    function getRandomJoke()
    {
        axios.get('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single').then(function (response) {
            setjoke(response.data.joke);
            console.log(response.data.joke);
          })
    }
    
  return (
    <>  
        <div className='box'>
            <h1>Joke of the day</h1>
            <p>{joke}</p>
            <button onClick={getRandomJoke}>Get</button>
        </div>
    </>
  )
}

export default App
