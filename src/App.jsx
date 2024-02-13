import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoadingLovers from '../components/LoadingLovers.jsx'
import PoemLetter from '../components/PoemLetter.jsx'

function App() {

  const [loading, setLoading] = useState(true);

  const onLoading = () => {
    setTimeout(() => setLoading(false), 3500)
  }

  useEffect(() => {
    onLoading()
  }, []);

  return (
    <div>
      { loading && <LoadingLovers />}
      { !loading && <PoemLetter />}
    </div>
  )
}

export default App
