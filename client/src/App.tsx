import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Header } from './modules/header.tsx';
import { Index } from './pages/index.tsx';

function App() {
 

  return (
    
      <Routes>
        <Route path="/" element={<Header />} >
        <Route index element={<Index />} />
        </Route>
      </Routes>
    
  )
}

export default App
