import { Link } from 'react-scroll/modules'

const Rental2 = () => {
    return (
        <div class="card w-full bg-base-100 shadow-xl justify-items-center">
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
