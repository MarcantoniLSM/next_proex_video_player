'use client'
import Navbar from '../components/Navbar/Navbar'
import VideoBar from '../components/VideoBar/VideoBar'
import FormCadastro from '../components/FormCadastro/FormCadastro'
import {useState} from 'react'

export default function Home() {
  const [screen,setScreen] = useState(1)

  const handleScreemMain = () =>{
    setScreen(1)
  }

  return (
    <main className='main'>

      {(screen == 0)?<FormCadastro handleScreen={handleScreemMain}/>:null}
      {(screen == 1)?<Navbar/>:null}
      {(screen == 1)?<VideoBar/>:null}

    </main>
  )
}
