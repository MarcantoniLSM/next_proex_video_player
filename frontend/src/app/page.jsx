'use client'
import Navbar from '../components/Navbar/Navbar'
import FormCadastro from '../components/FormCadastro/FormCadastro'
import {useState} from 'react'
import Spotify from '../components/Spotify/Spotify'

export default function Home() {
  const [screen,setScreen] = useState(0)

  const handleScreemMain = () =>{
    setScreen(1)
  }

  return (
    <main className='main'>

      {(screen == 0)?<FormCadastro handleScreen={handleScreemMain}/>:null}
      {(screen == 1)?<Navbar/>:null}
      {(screen == 1)?<Spotify/>:null}

    </main>
  )
}
