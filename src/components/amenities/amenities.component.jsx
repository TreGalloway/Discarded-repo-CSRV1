import welcomesign2 from '/Users/tre/coastalsoulrv/src/assets/amenities/welcomesign2.JPEG'
import privatedock1 from '/Users/tre/coastalsoulrv/src/assets/amenities/privatedock1.JPEG'
import bath1 from '/Users/tre/coastalsoulrv/src/assets/amenities/bath1.JPG'
import surfboard2 from '/Users/tre/coastalsoulrv/src/assets/amenities/surf board 2.JPEG'
import benchandgrill2 from '/Users/tre/coastalsoulrv/src/assets/amenities/bench and grill 2.JPEG'
import campfire1 from '/Users/tre/coastalsoulrv/src/assets/amenities/campfire 1.JPEG'

const Amenities = () => {
    return (
        <div className="w-full shadow-xl card bg-base-100 justify-items-center ">
            <div className="carousel rounded-box">
                <div className="carousel-item ">
                    <img
                        className="object-contain h-96 sm:object-scale-down md:object-scale-down w-max"
                        src={welcomesign2}
                        alt="welcome"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        className="object-contain h-96 sm:object-scale-down md:object-scale-down w-max"
                        src={privatedock1}
                        alt="dock1"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        className="object-contain h-96 sm:object-scale-down md:object-scale-down w-max"
                        src={surfboard2}
                        alt="surfboard2"
                    />
                </div>
                <div className="carousel-item ">
                    <img
                        className="object-contain h-96 sm:object-scale-down md:object-scale-down w-max"
                        src={benchandgrill2}
                        alt="benchandgrill2"
                    />
                </div>
                <div className="carousel-item ">
                    <img
                        className="object-contain h-96 sm:object-scale-down md:object-scale-down w-max"
                        src={campfire1}
                        alt="campfire1"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        className="object-contain h-96 sm:object-scale-down md:object-scale-down w-max"
                        src={bath1}
                        alt="bath1"
                    />
                </div>
            </div>
            <div className="items-center card-body lg:px-60">
                <h2 className="text-3xl underline card-title decoration-primary">
                    Amenities
                </h2>
                <p className="text-lg lg:px-20">
                    Custom Deck/Picnic tables/BBQ Pit/Fire Pit/Sand Box/Great
                    Landscaping
                </p>
                <p className="text-lg lg:px-20">
                    Yamaha Golf Cart (*$75/day…Based on availability)
                </p>
            </div>
        </div>
    )
}

export default Amenities
