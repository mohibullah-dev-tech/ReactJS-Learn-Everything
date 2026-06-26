import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import NetflixSeries from './components/NetflixSeries.jsx'
// import seriesData from "./api/seriesData.json"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* < NetflixSeries /> */}
  </StrictMode>,
)
