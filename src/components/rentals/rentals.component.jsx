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
            <Rental1 />
            <Rental2 />
            <Rental3 />
        </div>
    )
}

export default Rentals
