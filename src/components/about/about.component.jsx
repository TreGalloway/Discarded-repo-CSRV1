import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'

const About = () => {
    return (
        <div className="items-center card max-w bg-base-100" id="about">
            <div className="items-center card-body">
                <h2 className="text-3xl underline card-title decoration-primary">
                    About Us
                </h2>
                <p className="font-medium lg:px-20">
                    “Coastal Soul” is a semi-private property that affords you a
                    relaxing, pleasant time in Crystal Beach, TX. Located on the
                    Bolivar Peninsula adjacent to one of the Bird Sanctuaries,
                    this property sits just a few short walking steps from the
                    sandy shores of Crystal Beach and local restaurants, shops
                    and bars. The property has a large, spacious custom
                    deck/patio for relaxing and watching gorgeous sunsets. There
                    is also great fishing in the area with bait shops and local
                    boat ramps just minutes away. Let the memories with family &
                    friends begin.
                    <a
                        className="font-bold underline decoration-primary"
                        href="tel:(713) 502-5126"
                    >
                        Call today to reserve your spot!
                    </a>
                </p>

                <div className="justify-end card-actions"></div>
                <div className="flex w-7/12 place-content-center">
                    <div
                        className="flex-grow text-lg text-white border-0 btn h-15 card bg-primary rounded-box place-items-center"
                        href="tel:(713)502-5126"
                    >
                        <div className="grid grid-cols-2">
                            <div>
                                <AiOutlinePhone size={25} />
                            </div>
                            <div>Call</div>
                        </div>
                    </div>
                    <div className="divider divider-horizontal">OR</div>
                    <div className="flex-grow text-lg text-white border-0 btn h-15 card bg-primary rounded-box place-items-center">
                        <button
                            onClick={() =>
                                (window.location = 'mailto:feliciafish@att.net')
                            }
                        >
                            <div className="grid grid-cols-2">
                                <div>
                                    <AiOutlineMail size={25} />
                                </div>
                                <div>Email</div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
