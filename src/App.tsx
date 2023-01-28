import { Route, Routes } from 'react-router-dom'
import DummyPage from './pages/DummyPage'
import HomePage from './pages/HomePage'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dummy" element={<DummyPage />} />
      </Routes>
    </div>
  )
}

export default App
