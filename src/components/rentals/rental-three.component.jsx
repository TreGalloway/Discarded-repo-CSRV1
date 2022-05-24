import { Link } from 'react-scroll/modules'

const Rental3 = () => {
    return (
        <div class="card w-full bg-base-100 shadow-xl justify-items-center">
            <div className="w-full carousel">
                <div id="slide1" className="relative w-full carousel-item">
                    <img
                        src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2"
                        className="w-full"
                        alt=""
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide2" className="relative w-full carousel-item">
                    <img
                        src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB"
                        className="w-full"
                        alt=""
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide3" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide3" className="relative w-full carousel-item">
                    <img
                        src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6"
                        className="w-full"
                        alt=""
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide4" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide4" className="relative w-full carousel-item">
                    <img
                        src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693"
                        className="w-full"
                        alt=""
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide1" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
            </div>
            <div class="card-body items-center lg:px-60">
                <h2 class="card-title">RV Port/Site</h2>
                <p>
                    The property has all utilities (Water/Electricity/Septic)
                    including a 30 AMP Breaker with two additional 110 plug
                    outlets on the pole. All amenities listed above included
                    with rental. The daily rental rate is $55/day (2-day
                    minimum). The weekly rate is $300/wk. The monthly rental
                    rate is $650 which includes utilities. (Rates are subject to
                    change)
                </p>
                <div class="card-actions pt-4">
                    <button class="btn btn-primary text-white">
                        {' '}
                        <Link
                            to="footer"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            Book Now!
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Rental3
