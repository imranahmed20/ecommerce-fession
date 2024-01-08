
const Sponsor = () => {
    return (
        <div className="grid md:grid-cols-2 gap-5 mt-16 ">
            <div className="bg-orange-400 p-8 rounded-xl">
                <h1 className="text-xl mb-8">NEW STYLE</h1>
                <h1 className="text-5xl font-bold mb-8">Get 65% offer and Make New Fusion.</h1>
                <button className="btn font-bold rounded-full  btn-secondary">Shop Now</button>
            </div>
            <div className="bg-red-500 p-8 rounded-xl">
                <h1 className="text-xl mb-8">Mega OFFER</h1>
                <h1 className="text-5xl font-bold mb-8">Make your New Style with Our Products</h1>
                <button className="btn font-bold rounded-full  btn-primary">Shop Now</button>
            </div>
        </div>
    );
};

export default Sponsor;