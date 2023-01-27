import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </QueryClientProvider>
  )
}

export default App
