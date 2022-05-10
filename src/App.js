import Nav from './components/nav/nav.component'
import Hero from './components/hero/hero.component'
import About from './components/about/about.component'
import Footer from './components/footer/footer.component'
import Amenities from './components/amenities/amenities.component'
import Rentals from './components/rentals/rentals.component'
import Cleaning from './components/cleaning/cleaning.component'

function App() {
    return (
        <div className="divide-y">
            <div id="nav">
                <Nav />
            </div>
            <div id="hero">
                <Hero />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="amenities">
                <Amenities />
            </div>
            <div id="rentals">
                <Rentals />
            </div>
            <div id="cleaning">
                <Cleaning />
            </div>
            <div id="footer">
                <Footer />
            </div>
        </div>
    )
}

export default App
