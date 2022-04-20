import Nav from './components/nav/nav.component'
import Hero from './components/hero/hero.component'
import About from './components/about/about.component'
import RvCarousel from './components/rvcarousel/rvcarousel.component'
import Footer from './components/footer/footer.component'
import Amenities from './components/amenities/amenities.component'

function App() {
    return (
        <div>
            <Nav />
            <Hero />
            <About />
            <Amenities />
            <RvCarousel />
            <Footer />
        </div>
    )
}

export default App
