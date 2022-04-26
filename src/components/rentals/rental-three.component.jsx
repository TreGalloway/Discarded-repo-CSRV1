import { Link } from 'react-scroll/modules'

const Rental3 = () => {
    return (
        <div class="card w-full bg-base-100 shadow-xl justify-items-center">
            <figure>
                <div class="carousel carousel-center max-w- p-2 space-x-2 bg-neutral rounded-box">
                    <div class="carousel-item">
                        <img
                            src="https://api.lorem.space/image/furniture?w=250&h=180&hash=8B7BCDC2"
                            class="rounded-box"
                            alt=""
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            src="https://api.lorem.space/image/furniture?w=250&h=180&hash=500B67FB"
                            class="rounded-box"
                            alt=""
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            src="https://api.lorem.space/image/furniture?w=250&h=180&hash=A89D0DE6"
                            class="rounded-box"
                            alt=""
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            src="https://api.lorem.space/image/furniture?w=250&h=180&hash=225E6693"
                            class="rounded-box"
                            alt=""
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            src="https://api.lorem.space/image/furniture?w=250&h=180&hash=9D9539E7"
                            class="rounded-box"
                            alt=""
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            src="https://api.lorem.space/image/furniture?w=250&h=180&hash=BDC01094"
                            class="rounded-box"
                            alt=""
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            src="https://api.lorem.space/image/furniture?w=250&h=180&hash=7F5AE56A"
                            class="rounded-box"
                            alt=""
                        />
                    </div>
                </div>
            </figure>
            <div class="card-body items-center lg:px-60">
                <h2 class="card-title">RV Port/Site</h2>
                <p>
                    Property has all utilities (Water/Electricity/Septic)
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
