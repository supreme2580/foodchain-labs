import Image from "next/image"

const TeamMobile = () => {
    return(
        <div className="flex justify-center">
            <div className="flex space-x-5 items-center overflow-x-scroll team pb-4">
                <div className="text-lg sm:text-xl font-agrandir min-w-[100px] text-ash text-center">Meet the team</div>
                <div className="min-w-[250px] bg-white rounded-xl shadow-sm flex flex-col items-center justify-center p-2 sm:p-4 space-x-1 sm:space-y-2.5 text-ash hover:cursor-pointer">
                    <div>
                        <Image src="/avatar.jpg" width={100} height={100} className="rounded-full" />
                    </div>
                    <h2 className="text-base sm:text-lg max-w-[200px] text-center font-agrandir">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam.
                    </h2>
                    <h1 className="text-base sm:text-lg font-semibold font-agrandir">
                        John Doe
                    </h1>
                </div>
                <div className="min-w-[250px] bg-white rounded-xl shadow-sm flex flex-col items-center justify-center p-2 sm:p-4 space-x-1 sm:space-y-2.5 text-ash hover:cursor-pointer">
                    <div>
                        <Image src="/avatar.jpg" width={100} height={100} className="rounded-full" />
                    </div>
                    <h2 className="text-base sm:text-lg max-w-[200px] text-center font-agrandir">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam.
                    </h2>
                    <h1 className="text-base sm:text-lg font-semibold font-agrandir">
                        John Doe
                    </h1>
                </div>
                <div className="min-w-[250px] bg-white rounded-xl shadow-sm flex flex-col items-center justify-center p-2 sm:p-4 space-x-1 sm:space-y-2.5 text-ash hover:cursor-pointer">
                    <div>
                        <Image src="/avatar.jpg" width={100} height={100} className="rounded-full" />
                    </div>
                    <h2 className="text-base sm:text-lg max-w-[200px] text-center font-agrandir">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam.
                    </h2>
                    <h1 className="text-base sm:text-lg font-semibold font-agrandir">
                        John Doe
                    </h1>
                </div>
                <div className="min-w-[250px] bg-white rounded-xl shadow-sm flex flex-col items-center justify-center p-2 sm:p-4 space-x-1 sm:space-y-2.5 text-ash hover:cursor-pointer">
                    <div>
                        <Image src="/avatar.jpg" width={100} height={100} className="rounded-full" />
                    </div>
                    <h2 className="text-base sm:text-lg max-w-[200px] text-center font-agrandir">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam.
                    </h2>
                    <h1 className="text-base sm:text-lg font-semibold font-agrandir">
                        John Doe
                    </h1>
                </div>
                <div className="min-w-[250px] bg-white rounded-xl shadow-sm flex flex-col items-center justify-center p-2 sm:p-4 space-x-1 sm:space-y-2.5 text-ash hover:cursor-pointer">
                    <div>
                        <Image src="/avatar.jpg" width={100} height={100} className="rounded-full" />
                    </div>
                    <h2 className="text-base sm:text-lg max-w-[200px] text-center font-agrandir">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam.
                    </h2>
                    <h1 className="text-base sm:text-lg font-semibold font-agrandir">
                        John Doe
                    </h1>
                </div>
                <div className="min-w-[250px] bg-white rounded-xl shadow-sm flex flex-col items-center justify-center p-2 sm:p-4 space-x-1 sm:space-y-2.5 text-ash hover:cursor-pointer">
                    <div>
                        <Image src="/avatar.jpg" width={100} height={100} className="rounded-full" />
                    </div>
                    <h2 className="text-base sm:text-lg max-w-[200px] text-center font-agrandir">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam.
                    </h2>
                    <h1 className="text-base sm:text-lg font-semibold font-agrandir">
                        John Doe
                    </h1>
                </div>
            </div>
        </div>
    )
}
export default TeamMobile