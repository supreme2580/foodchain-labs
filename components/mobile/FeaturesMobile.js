import Image from "next/image"
import Link from "next/link"

const FeaturesMobile = () => {
    return(
        <div>
            <h3 className="w-full text-3xl font-semibold text-center text-ash">Features</h3>
            <div className="flex flex-col items-center justify-center w-full mt-4 space-y-4">
                <div className="w-[300px] h-[335px] bg-white px-4 py-8 space-y-2.5 shadow-lg shadow-ash">
                    <div>
                        <Image src="/avatar.jpg" width={50} height={50} className="rounded-full" />
                    </div>
                    <h4 className="text-2xl font-semibold text-ash">Digital Farmers Market</h4>
                    <p className="text-base font-normal text-dark">The web3 based indexed farm produce data is collected by foodchain community</p>
                    <div className="w-36">
                        <Link href="/">
                            <a>
                                <button className="bg-green w-36 flex items-center space-x-2 justify-center p-1.5 shadow-green shadow-lg">
                                    <p className="text-white">Learn more</p>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="#fff">
                                            <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </button>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="w-[300px] h-[370px] bg-green px-4 py-8 space-y-2.5 shadow-lg shadow-ash">
                    <div>
                        <Image src="/avatar.jpg" width={50} height={50} className="rounded-full" />
                    </div>
                    <h4 className="text-2xl font-semibold text-white">Foundation of Agricultural Knowledge</h4>
                    <p className="text-base font-normal text-white">The web3 based indexed farm produce data is collected by foodchain community</p>
                    <div className="w-36">
                        <Link href="/">
                            <a>
                                <button className="bg-white w-36 flex items-center space-x-2 justify-center p-1.5 shadow-lg shadow-ash">
                                    <p className="font-semibold text-ash">Learn more</p>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="#51493D">
                                            <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </button>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="w-[300px] h-[335px] bg-white px-4 py-8 space-y-2.5 shadow-lg shadow-ash">
                    <div>
                        <Image src="/avatar.jpg" width={50} height={50} className="rounded-full" />
                    </div>
                    <h4 className="text-2xl font-semibold text-ash">Digital Farmers Market</h4>
                    <p className="text-base font-normal text-dark">The web3 based indexed farm produce data is collected by foodchain community</p>
                    <div className="w-36">
                        <Link href="/">
                            <a>
                                <button className="bg-green w-36 flex items-center space-x-2 justify-center p-1.5 shadow-green shadow-lg">
                                    <p className="text-white">Learn more</p>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="#fff">
                                            <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FeaturesMobile