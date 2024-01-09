
const Banner = () => {
    return (
        <div className="carousel w-full bg-red-300 py-5">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="text-center">
                        <h1 className="text-2xl text-center font-bold mb-8  mt-8">1 UP TO <span className="text-4xl text-violet-700">70% </span>OFF</h1>
                        <h1 className="text-7xl font-bold mb-8 ">Fashion Collection Summer Sale</h1>
                        <button className="btn font-bold rounded-full  btn-accent">Shop Now</button>
                    </div>
                    <img src="https://img.freepik.com/free-photo/laptop-near-smartphone-tags-tablet-packet_23-2147961975.jpg?size=626&ext=jpg&ga=GA1.1.1646345824.1704259903&semt=ais" className="w-50 " />

                </div>
                <div className="absolute flex flex-col md:flex-row justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="text-center">
                        <h1 className="text-2xl  font-bold mb-8  mt-8">3 UP TO <span className="text-4xl text-violet-700">70% </span>OFF</h1>
                        <h1 className="text-7xl font-bold mb-8 text-center">Fashion Collection Summer Sale</h1>
                        <button className="btn font-bold rounded-full  btn-accent">Shop Now</button>
                    </div>
                    <img src="https://img.freepik.com/free-photo/laptop-near-smartphone-tags-tablet-packet_23-2147961975.jpg?size=626&ext=jpg&ga=GA1.1.1646345824.1704259903&semt=ais" className="w-50" />

                </div>
                <div className="absolute flex flex-col md:flex-row justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="text-center">
                        <h1 className="text-2xl text-center font-bold mb-8  mt-8">2 UP TO <span className="text-4xl text-violet-700">70% </span>OFF</h1>
                        <h1 className="text-7xl font-bold mb-8 text-center">Fashion Collection Summer Sale</h1>
                        <button className="btn font-bold rounded-full  btn-accent">Shop Now</button>
                    </div>
                    <img src="https://img.freepik.com/free-photo/laptop-near-smartphone-tags-tablet-packet_23-2147961975.jpg?size=626&ext=jpg&ga=GA1.1.1646345824.1704259903&semt=ais" className="w-50" />

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>

    );
};

export default Banner;