import React, { useEffect, useState } from 'react'
import './App.css'
import { convertToObjectArray } from './utils'
import { Navbar } from './components/common/navbar'
import { Header } from './components/common/header'
import { Footer } from './components/common/footer'

function App() {
  const [menu, setMenu] = useState()

  const loadDataMenu = async () => {
    const data = await fetch('https://services-ten.vercel.app/menu')
    const menu = await data.json()

    setMenu(menu)
  }

  useEffect(() => {
    loadDataMenu()
  }, [])
  
  return (
    <div>
      <header>
        <Header />
        <div className="nav-area">
          {menu && <Navbar data={convertToObjectArray(menu.data.list[0])} />}
        </div>
      </header>
      <Footer />
    </div>
  )
}

export default App
