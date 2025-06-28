import { useState, useEffect } from 'react'
import './App.css'
import { FaMoon, FaSun } from 'react-icons/fa'

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 text-base-content transition-colors duration-300">
        {/* Toggle Button */}
        <button
          onClick={toggleTheme}
          className="absolute top-4 right-4 p-2 rounded-full bg-base-300 hover:bg-base-200 dark:hover:bg-neutral"
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>

        {/* Main Heading */}
        <h1 className="font-black text-3xl">Tanim Portfolio</h1>
        <p className="text-lg mt-2">Welcome to my website!</p>
      </div>
    </>
  )
}

export default App
