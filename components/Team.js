import Image from "next/image"

const Team = () => {
    return(
        <div className="flex justify-center pl-20">
            <div className="flex space-x-5 items-center overflow-x-scroll team pb-4">
                <div className="text-2xl font-agrandir min-w-[100px] text-ash text-center">Meet the team</div>
                <div className="min-w-[250px] bg-white rounded-xl shadow-lg flex flex-col items-center justify-center p-5 space-y-2.5 text-ash hover:cursor-pointer">
                    <div>
                        <Image src="/avatar.jpg" width={100} height={100} className="rounded-full" />
                    </div>
                    <h2 className="text-lg max-w-[200px] text-center font-agrandir">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam.
                    </h2>
                    <h1 className="text-xl font-semibold font-agrandir">
                        John Doe
                    </h1>
                </div>
                <div className="font-agrandir min-w-[250px] bg-white rounded-xl shadow-lg flex flex-col items-center justify-center p-5 space-y-2.5 text-ash hover:cursor-pointer">
                    <div>
                        <Image src="/avatar.jpg" width={100} height={100} className="rounded-full" />
                    </div>
                    <h2 className="text-lg max-w-[200px] text-center font-agrandir">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam.
                    </h2>
                    <h1 className="text-xl font-semibold font-agrandir">
                        John Doe
                    </h1>
                </div>
                <div className="min-w-[250px] bg-white rounded-xl shadow-lg flex flex-col items-center justify-center p-5 space-y-2.5 text-ash hover:cursor-pointer">
                    <div>
                        <Image src="/avatar.jpg" width={100} height={100} className="rounded-full" />
                    </div>
                    <h2 className="text-lg max-w-[200px] text-center font-agrandir">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam.
                    </h2>
                    <h1 className="text-xl font-semibold font-agrandir">
                        John Doe
                    </h1>
                </div>
                <div className="min-w-[250px] bg-white rounded-xl shadow-lg flex flex-col items-center justify-center p-5 space-y-2.5 text-ash hover:cursor-pointer">
                    <div>
                        <Image src="/avatar.jpg" width={100} height={100} className="rounded-full" />
                    </div>
                    <h2 className="text-lg max-w-[200px] text-center font-agrandir">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam.
                    </h2>
                    <h1 className="text-xl font-semibold font-agrandir">
                        John Doe
                    </h1>
                </div>
                <div className="min-w-[250px] bg-white rounded-xl shadow-lg flex flex-col items-center justify-center p-5 space-y-2.5 text-ash hover:cursor-pointer">
                    <div>
                        <Image src="/avatar.jpg" width={100} height={100} className="rounded-full" />
                    </div>
                    <h2 className="text-lg max-w-[200px] text-center font-agrandir">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam.
                    </h2>
                    <h1 className="text-xl font-semibold font-agrandir">
                        John Doe
                    </h1>
                </div>
            </div>
        </div>
    )
}
export default Team