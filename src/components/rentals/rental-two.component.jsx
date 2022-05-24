import { Link } from 'react-scroll/modules'

import outside1 from '/Users/tre/coastalsoulrv/src/assets/rental2/outside 1.JPEG'
import outside2 from '/Users/tre/coastalsoulrv/src/assets/rental2/outside 2.JPG'

import inside1 from '/Users/tre/coastalsoulrv/src/assets/rental2/inside 1.JPEG'
import inside2 from '/Users/tre/coastalsoulrv/src/assets/rental2/inside 2.JPEG'
import inside3 from '/Users/tre/coastalsoulrv/src/assets/rental2/inside 3.JPEG'
import inside4 from '/Users/tre/coastalsoulrv/src/assets/rental2/inside 4.JPEG'

const Rental2 = () => {
    return (
        <div class="card w-full bg-base-100 shadow-xl justify-items-center">
            <div className="w-full carousel">
                <div id="slide1-b" className="relative w-full carousel-item">
                    <img src={outside1} className="w-full" alt="" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide6-b" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide2-b" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide2-b" className="relative w-full carousel-item">
                    <img src={outside2} className="w-full" alt="" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1-b" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide3-b" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide3-b" className="relative w-full carousel-item">
                    <img src={inside1} className="w-full" alt="" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2-b" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide4-b" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide4-b" className="relative w-full carousel-item">
                    <img src={inside2} className="w-full" alt="" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3-b" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide5-b" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide5-b" className="relative w-full carousel-item">
                    <img src={inside3} className="w-full" alt="" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4-b" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide6-b" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide6-b" className="relative w-full carousel-item">
                    <img src={inside4} className="w-full" alt="" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5-b" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide1-b" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
            </div>
            <div class="card-body items-center lg:px-60">
                <h2 class="card-title">Coastal Soul II (Lodging)</h2>
                <p>
                    27’ Skyline Layton RV/Trailer with living area, private
                    sleeping areas, sofa, appliances. Sleeps 6 guests. The daily
                    rental rate is $150/day (2-day minimum). The weekly rental
                    rate is $550. The monthly rental rate is $800. All rates
                    include utilities. (Rates are based on 2 adult guests per
                    site and are subject to change)
                </p>
                <div class="card-actions pt-4">
                    <button class="btn btn-primary text-white">
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

export default Rental2
