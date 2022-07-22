import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return(
        <div>
            <div className="w-full bg-zinc-300 h-14"></div>
            <div className="px-5 flex items-center justify-between -mt-7">
                <div className="flex-0">
                    <Image src="/vercel.svg" width={100} height={50} />
                </div>
                <div className="flex justify-center flex-1">
                    <div className="p-1.5 bg-orange-300 rounded-lg max-w-lg">
                        <div className="flex justify-center items-center space-x-5">
                            <Link href="/">
                                <a><div className="bg-lime-500 py-1.5 rounded-lg text-white px-5 hover:cursor-pointer">Home</div></a>
                            </Link>
                                <a><div className="py-1.5 px-5 hover:cursor-pointer hover:bg-lime-500 hover:text-white rounded-lg">Partners</div></a>
                            <Link href="/">
                                <a><div className="py-1.5 px-5 hover:cursor-pointer hover:bg-lime-500 hover:text-white rounded-lg">About Us</div></a>
                            </Link>
                            <Link href="/">
                                <a><div className="py-1.5 px-5 hover:cursor-pointer hover:bg-lime-500 hover:text-white rounded-lg">Contact</div></a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar