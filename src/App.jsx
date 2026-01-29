import {Routes,Route} from 'react-router-dom'
import Hero from './pages/Hero'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollToTop from "./components/ScrollTop";
import Events from './pages/Events'
import Infra from './pages/Infra';
const App = () => {
  return (
    <div className="bg-[url('/school.jpg')] bg-cover bg-center min-h-screen pt-20">
    <Nav/>
<ScrollToTop />
    <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/Infrastructure' element={<Infra/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App