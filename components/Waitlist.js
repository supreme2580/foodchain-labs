const Waitlist = () => {
    return(
        <div className="flex justify-between max-w-2xl ml-20 mb-20 items-center">
            <div className="text-black font-semibold text-lg">Join Waitlist</div>
            <div className="space-y-2.5">
                <div className="text-black font-semibold text-lg">Be the first to know when we go live!</div>
                <div className="flex">
                    <input type="email" placeholder="Your email address" className="bg-white border-white min-w-[300px] p-2 outline-white" />
                    <button className="bg-green px-5 py-3 text-white hover:cursor-pointer">Subscribe</button>
                </div>
            </div>
        </div>
    )
}
export default Waitlist