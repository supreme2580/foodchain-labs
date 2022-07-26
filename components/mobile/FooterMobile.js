import Image from "next/image"
import Link from "next/link"

const FooterMobile = () => {
    return(
        <div className="py-3 space-y-3 text-center">
            <div className="flex justify-center">
                <Image src="/logo.png" width={100} height={100} />
            </div>
            <div className="flex flex-col">
                <div className="text-lg text-black font-agrandir">
                    Lorem ipsum dolor sit amet. Aut voluptatem earum eos iure veniam qui totam minima eum obcaecati necessitatibus qui ipsam omnis ut dolorem autem ab distinctio vero. A ipsum quia 33 saepe omnis aut dicta perspiciatis in internos quae. Eos iste eveniet et velit
                </div>
                <div className="flex-1">
                    <div class="grid grid-rows-2 grid-flow-col gap-2 w-full font-agrandir text-black text-lg text-center">
                        <Link href="/"><a><div>About Us</div></a></Link>
                        <Link href="/"><a><div>Contact Us</div></a></Link>
                        <Link href="/"><a><div>Social Impact</div></a></Link>
                        <Link href="/"><a><div>Learn Crypto</div></a></Link>
                        <Link href="/"><a><div>Blog</div></a></Link>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <Image src="/facebook.png" width={40} height={40} />
                    </div>
                    <div>
                        <Image src="/twitter.png" width={40} height={40} />
                    </div>
                    <div>
                        <Image src="/linkedIn.png" width={40} height={40} />
                    </div>
                </div>
            </div>
            <div className="w-full h-[2px] bg-black"></div>
            <div className="text-lg text-black font-agrandir text-center">Copyright © 2022 Foodchain Labs | Powered by Foodchain Labs</div>
        </div>
    )
}
export default FooterMobile