import { useState, useEffect } from 'react'
import ThemeButton from './Components/ThemeButton'
import  themeProvider  from './Context/Theme'
import Card from './Components/Card'
import './App.css'


function App() {
  const [themeMode, setThemeMode] = useState('light')

  const darkTheme = () => {
    setThemeMode('dark')
  }

  const lightTheme = () => {
    setThemeMode('light')
  }

  //actual change in theme -> logic
  useEffect( () => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])


  return (

    <themeProvider value={{ themeMode, darkTheme, lightTheme }} >
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </themeProvider>

  )
}

export default App
