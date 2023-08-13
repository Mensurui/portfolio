import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Layout from './components/Layout'
import './App.scss'
import Contact from './components/Contact'
import Works from './components/Works'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact/>} />
          <Route path="works" element={<Works/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App