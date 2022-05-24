import { Link } from 'react-scroll/modules'
import outside1 from '/Users/tre/coastalsoulrv/src/assets/rental1/outside 1.JPEG'
import outside2 from '/Users/tre/coastalsoulrv/src/assets/rental1/outside 2.JPEG'
import outside3 from '/Users/tre/coastalsoulrv/src/assets/rental1/outside 3.JPG'

import inside1 from '/Users/tre/coastalsoulrv/src/assets/rental1/inside 1.JPEG'
import inside2 from '/Users/tre/coastalsoulrv/src/assets/rental1/inside 2.JPEG'
import inside3 from '/Users/tre/coastalsoulrv/src/assets/rental1/inside 3.JPEG'
import inside4 from '/Users/tre/coastalsoulrv/src/assets/rental1/inside 4.JPEG'
import inside5 from '/Users/tre/coastalsoulrv/src/assets/rental1/inside 5.JPEG'
import inside6 from '/Users/tre/coastalsoulrv/src/assets/rental1/inside 6.JPEG'
import inside7 from '/Users/tre/coastalsoulrv/src/assets/rental1/inside 7.JPEG'
import inside8 from '/Users/tre/coastalsoulrv/src/assets/rental1/inside 8.JPEG'
import inside9 from '/Users/tre/coastalsoulrv/src/assets/rental1/inside 9.JPEG'

const Rental1 = () => {
    return (
        <div className="w-full shadow-xl card bg-base-100 justify-items-center ">
            <div className="w-full carousel">
                <div id="slide1" className="relative w-full carousel-item">
                    <img
                        src={outside1}
                        className="object-contain w-full lg:object-scale-down"
                        alt=""
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide12" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide2" className="relative w-full carousel-item">
                    <img src={outside2} className="w-full" alt="" />
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
                    <img src={outside3} className="w-full" alt="" />
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
                    <img src={inside1} className="w-full" alt="" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide5" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide5" className="relative w-full carousel-item">
                    <img src={inside2} className="w-full" alt="" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide6" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                    <div id="slide6" className="relative w-full carousel-item">
                        <img src={inside3} className="w-full" alt="" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide5" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide7" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide7" className="relative w-full carousel-item">
                        <img src={inside4} className="w-full" alt="" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide6" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide8" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide8" className="relative w-full carousel-item">
                        <img src={inside5} className="w-full" alt="" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide7" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide9" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide9" className="relative w-full carousel-item">
                        <img src={inside6} className="w-full" alt="" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide8" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide10" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide10" className="relative w-full carousel-item">
                        <img src={inside7} className="w-full" alt="" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide9" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide11" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide11" className="relative w-full carousel-item">
                        <img src={inside8} className="w-full" alt="" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide10" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide12" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div id="slide12" className="relative w-full carousel-item">
                        <img src={inside9} className="w-full" alt="" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide11" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide1" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
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
