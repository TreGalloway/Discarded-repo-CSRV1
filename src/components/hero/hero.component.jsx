import image from '../../assets/woods.jpeg'

const Hero = () => {
    return (
        <div
            class="hero min-h-screen"
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold underline underline-offset-4 decoration-primary">
                        CoastalSoulRV
                    </h1>
                    <p class="mb-5 font-medium">
                        Let the memories with family & friends begin!
                    </p>
                    <button class="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    )
}
export default Hero
