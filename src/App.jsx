import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'

function App() {

  return (
    <section>
      <Header></Header>
      <Outlet></Outlet>
    </section>
  )
}

export default App
