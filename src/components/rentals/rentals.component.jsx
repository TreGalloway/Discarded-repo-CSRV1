import Rental1 from './rental-one.component'
import Rental3 from './rental-three.component'
import Rental2 from './rental-two.component'

const Rentals = () => {
    return (
        <div className="justify-items-center">
            <div className="items-center card max-w bg-base-100">
                <div className="items-center card-body">
                    <h2 className="text-3xl underline card-title decoration-primary">
                        Rental Options
                    </h2>

                    <div className="justify-end card-actions"></div>
                </div>
            </div>
            <div className="px-2 lg:px-10 pb-7">
                <Rental1 />
            </div>

            <div className="px-2 lg:px-10 pb-7">
                <Rental2 />
            </div>
            <div
                className="px-2 lg:px-10 pb-7"
            >
                <Rental3 />
            </div>
        </div>
    )
}

export default Rentals
