const WaitlistMobile = () => {
    return(
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-between max-w-2xl items-center">
                <div className="text-black font-semibold text-lg font-agrandir">Join Waitlist</div>
                <div className="space-y-2.5">
                    <div className="text-black font-semibold text-lg font-agrandir">Be the first to know when we go live!</div>
                    <div className="flex flex-col space-y-2.5">
                        <input type="email" placeholder="Your email address" className="bg-white border-white min-w-[150px] p-2 outline-white rounded-lg" />
                        <button className="bg-green rounded-lg px-5 py-3 text-white hover:cursor-pointer font-agrandir">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WaitlistMobile