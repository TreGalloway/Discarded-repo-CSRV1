import { Link } from 'react-scroll/modules'

const Rental1 = () => {
    return (
        <div className="w-full shadow-xl card bg-base-100 justify-items-center ">
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
