import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './app/layout/Header'
import { store } from './redux/store'
import { Provider } from "react-redux"
import Counter from './app/component/Counter'
import DestinationList from './app/component/DestinationList'
import DestinationFact from './app/component/DestinationFact'
import Reset from './app/component/Reset'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <Reset />
      <Header />
      <Counter />
      <div className="p-4 border text-center">
        <h4 className="text-success pb-4">Destination List</h4>
        <DestinationList />
        <DestinationFact />
      </div>
    </Provider>
)
