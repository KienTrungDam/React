import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from '../../ReduxOPedia/src/app/layout/Header'
import DestinationIndex from './component/DestinationIndex'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <DestinationIndex />
  </StrictMode>,
)
