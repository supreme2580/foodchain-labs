import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return(
        <div className="pt-10 space-y-10">
            <div className="flex justify-center flex-1">
                <div className="bg-[#ECE0CD] rounded-lg max-w-lg border-white border-2">
                    <div className="flex justify-center items-center space-x-5 font-syne">
                        <Link href="/">
                            <a><div className="bg-green py-2 rounded-lg text-white px-5 hover:cursor-pointer">Home</div></a>
                        </Link>
                            <a><div className="py-2 px-5 hover:cursor-pointer hover:bg-green hover:text-white rounded-lg text-ash">Partners</div></a>
                        <Link href="/">
                            <a><div className="py-2 px-5 hover:cursor-pointer hover:bg-green hover:text-white rounded-lg text-ash">About Us</div></a>
                        </Link>
                        <Link href="/">
                            <a><div className="py-2 px-5 hover:cursor-pointer hover:bg-green hover:text-white rounded-lg text-ash">Contact</div></a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <Image src="/image.png" width={100} height={100} />
            </div>
        </div>
    )
}
export default Navbar