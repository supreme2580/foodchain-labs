const Hero = () => {
    return(
        <div className="space-y-16">
            <div className="flex justify-center">
                <div className="space-y-5 max-w-4xl">
                    <div className="text-6xl font-semibold">We are building the backbone of digital <span className="text-lime-500">agriculture</span></div>
                    <div className="max-w-2xl text-2xl">
                        Foodchain is indexing farm produce across Africa

                        to enable African farmers to connect with buyers 

                        using web3. We are bringing agricultural harvest 

                        right to everyone at their finger tip.
                    </div>
                    <button className="w-full max-w-2xl bg-lime-500 text-white text-2xl p-3 rounded-xl">Join the farming revolution</button>
                </div>
            </div>
            <div className="flex justify-between px-10 text-2xl">
                <div>Foodchain Labs</div>
                <div>|</div>
                <div>Foodchain Labs</div>
                <div>|</div>
                <div>Foodchain Labs</div>
                <div>|</div>
                <div>Foodchain Labs</div>
                <div>|</div>
                <div>Foodchain Labs</div>
                <div>|</div>
                <div>Foodchain Labs</div>
            </div>
        </div>
    )
}
export default Hero