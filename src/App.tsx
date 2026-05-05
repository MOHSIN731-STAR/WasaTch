
import Navbar from './component/navbar/Navbar'
import Home from './component/home/Home'
// import Hero from './component/herosection/Hero'
import { Route, Routes } from 'react-router-dom'
import Portfolio from './component/Portfolio/Portfolio'
import Market from './component/Market/Market'
import Teams from './component/Our_teams/Teams'
import FlexAble from './component/Flexable/FlexAble'
import Footer from './component/Footer'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Market" element={<Market />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="/FlexAble" element={<FlexAble />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App