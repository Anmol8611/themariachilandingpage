import Hero from './components/Hero'
import MenuCard from './components/MenuCard'
import NavBar from './components/NavBar'
import About from './components/About'
import Discount from './components/Discount'
import Offers from './components/Offers'
import Hero2 from './components/Hero2'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <header className='max-w-screen'>
      <NavBar/>
      <Hero/>
      </header>
      <main className='max-w-screen'>
      <MenuCard/>
      <About/>
      <Discount/>
      <Offers/>
      <Hero2/>
      <Subscribe/>
      </main>
      <Footer/>
    </>
  )
}

export default App
