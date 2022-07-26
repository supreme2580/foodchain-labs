const HeroMobile = () => {
    return(
        <div className="space-y-8">
            <div className="flex justify-center">
                <div className="space-y-5 flex flex-col justify-center">
                    <div className="text-3xl sm:text-4xl font-semibold text-ash font-syne text-center max-w-2xl">We are building the backbone for digital <span className="text-green">agriculture</span></div>
                    <div className="flex justify-center">
                        <div className="max-w-xl text-xl sm:text-2xl text-dark font-agrandir text-center">
                            Foodchain is indexing farm produce across Africa
                            to enable African farmers to connect with buyers 
                            using web3. We are bringing agricultural harvest 
                            right to everyone at their finger tip.
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="w-full max-w-auto bg-green text-white text-xl sm:text-2xl p-3 rounded-xl font-agrandir">Join the farming revolution</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">    
                <div className="max-w-2xl text-center text-base sm:text-xl font-agrandir text-dark">
                    Foodchain is indexing farm produce across Africa
                    to enable African farmers to connect with buyers 
                    using web3. We are bringing agricultural harvest 
                    right to everyone at their finger tip.
                </div>
            </div>
        </div>
    )
}
export default HeroMobile