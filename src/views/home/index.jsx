import React, { memo, useEffect, useState } from 'react'

import YCRequest from '@/services'
  

  const Home = memo(() => {

    const [ highScore, setHighScore ] = useState({})
    useEffect(() => {
      YCRequest.get({url: "/home/highscore"}).then(res => {
        console.log(res);
        setHighScore(res)
      })
    },[])

  return (
    <div>
      Home
      <h2>{highScore.title}</h2>
      <h2>{highScore.subtitle}</h2>
      <ul>
        {
          highScore.list?.map((item) => {
            return <li key={item.id}>{item.name}</li>
          })
        }
      </ul>
    </div>
  )
})

export default Home