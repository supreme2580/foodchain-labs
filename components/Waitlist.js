const Waitlist = () => {
    return(
        <div className="flex justify-center items-center">
            <div className="flex justify-between max-w-2xl items-center space-x-10">
                <div className="text-black font-semibold text-lg font-agrandir">Join Waitlist</div>
                <div className="space-y-2.5">
                    <div className="text-black font-semibold text-lg font-agrandir">Be the first to know when we go live!</div>
                    <div className="flex">
                        <input type="email" placeholder="Your email address" className="bg-white border-white min-w-[300px] p-2 outline-white" />
                        <button className="bg-green px-5 py-3 text-white hover:cursor-pointer font-agrandir">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Waitlist