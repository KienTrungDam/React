import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header.jsx'
import Counter from './Counter.jsx'
import MoviePage from './MovieComponent/MoviePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <div className="p-2 m-2 row text-center">
      <Counter />
      <MoviePage />
    </div>
  </StrictMode>,
)
