import { Link } from 'react-scroll/modules'

const Rental1 = () => {
    return (
        <div className="w-full shadow-xl card bg-base-100 justify-items-center ">
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
            <div className="items-center card-body lg:px-60">
                <h2 className="card-title">Coastal Soul I (Lodging)</h2>
                <p>
                    27’ Coachman Catalina SBX RV/Trailer with super slide out
                    living area, private sleeping areas, sofa, appliances.
                    Sleeps 6 guests. The daily rental rate is $150/day (2-day
                    minimum). The weekly rental rate is $550. The monthly rental
                    rate is $800. All rates include utilities. (Rates are based
                    on 2 adult guests per site and are subject to change)
                </p>
                <div className="pt-4 card-actions">
                    <button className="text-white btn btn-primary">
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

export default Rental1
