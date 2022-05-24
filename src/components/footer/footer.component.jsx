import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className="p-10 footer bg-neutral text-neutral-content">
            <div>
                <p>
                    CoastalSoulRV
                    <br />
                    Creating memories since 2022
                </p>
            </div>
            <div>
                <span className="footer-title">Contact</span>
                <div className="flex w-full place-content-start">
                    <div
                        className="flex-grow text-lg text-white border-0 btn h-15 card bg-primary rounded-box place-items-center hover:bg-secondary"
                        href="tel:+17135025126"
                    >
                        <div className="grid grid-cols-2">
                            <div>
                                <AiOutlinePhone size={25} />
                            </div>
                            <div className="pr-2">Call</div>
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
        </footer>
    )
}

export default Footer
