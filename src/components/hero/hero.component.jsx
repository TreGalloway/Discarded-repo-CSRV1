import Link from 'react-scroll/modules/components/Link'

import bothrentals2 from '/Users/tre/coastalsoulrv/src/assets/site/bothrentals2.JPEG'

const Hero = () => {
    return (
        <div
            className="min-h-screen hero"
            style={{
                backgroundImage: `url(${bothrentals2})`,
            }}
        >
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="text-center hero-content text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold underline underline-offset-4 decoration-primary">
                        CoastalSoulRV
                    </h1>
                    <p className="mb-5 font-medium">
                        Let the memories with family & friends begin!
                    </p>
                    <button className="btn btn-primary">
                        <Link
                            to="about"
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
export default Hero
