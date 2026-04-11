import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import About from './src/About.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './src/Shop.tsx'
import Instructions from './src/Instructions.tsx'
import BottleFlipGame from './src/BottleFlipGame.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/bottle" element={<BottleFlipGame />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
