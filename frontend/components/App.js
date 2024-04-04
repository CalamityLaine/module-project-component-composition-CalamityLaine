import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from "./Card"
const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`





function App() {
const [apod, setApod] = useState()

  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
      .then(res => {
        console.log(res.data)
        setApod(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
    }
  // fetchPhoto()
  setApod({
          "date": "2024-04-03",
          "explanation": "What created this unusual celestial firework? The nebula, dubbed Pa 30, appears in the same sky direction now as a bright \"guest star\" did in the year 1181. Although Pa 30's filaments look similar to that created by a nova (for example GK Per), and a planetary nebula (for example NGC 6751), some astronomers now propose that it was created by a rare type of supernova: a thermonuclear Type Iax, and so is (also) named SN 1181.  In this model, the supernova was not the result of the detonation of a ...",
          "hdurl": "https://apod.nasa.gov/apod/image/2404/Pa30_NASA_4350.jpg",
          "media_type": "image",
          "service_version": "v1",
          "title": "Unusual Nebula Pa 30",
          "url": "https://apod.nasa.gov/apod/image/2404/Pa30V_NASA_960.jpg"
      
  })
  }, [])
  if (!apod) return 'Fetching Photo of the day...'
  return (
  <section>
   <Card
    title={apod.title}
    text={apod.explanation}
    imageURL={apod.url}
    date={apod.date}
   />
  </section>
  )
}

export default App
