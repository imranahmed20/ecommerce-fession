import { FaStar } from "react-icons/fa";
import image1 from '../../../../assets/im2_files/product-img-1.webp'
import image2 from '../../../../assets/im2_files/product-img-2.webp'
import image3 from '../../../../assets/im2_files/product-img-3.webp'

const Seller = () => {
    return (
        <div className="bg-red-50 p-5 rounded  mb-8">
            <h1 className='text-3xl font-bold mb-8'>Best Sell in this Week</h1>
            <div className="grid md:grid-cols-3 gap-5">
                <div className="card card-compact w-96 bg-white shadow-xl">
                    <figure><img src={image1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="flex mb-2">
                            <FaStar className="text-orange-500 text-xl"></FaStar>
                            <FaStar className="text-orange-500 text-xl"></FaStar>
                            <FaStar className="text-orange-500 text-xl"></FaStar>
                            <FaStar className="text-orange-500 text-xl"></FaStar>
                            <FaStar className="text-orange-500 text-xl"></FaStar>
                        </div>
                        <h2 className="card-title">Slim-Fit Shirt</h2>
                        <p className="text-xl text-red-400 font-bold">$6.45</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-white shadow-xl">
                    <figure><img src={image2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="flex mb-2">
                            <FaStar className="text-orange-500 text-xl"></FaStar>
                            <FaStar className="text-orange-500 text-xl"></FaStar>
                            <FaStar className="text-orange-500 text-xl"></FaStar>
                            <FaStar className="text-orange-500 text-xl"></FaStar>
                            <FaStar className="text-orange-500 text-xl"></FaStar>
                        </div>
                        <h2 className="card-title">Sequin Dress</h2>
                        <p className="text-xl text-red-400 font-bold">$15.99</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-white shadow-xl">
                    <figure><img src={image3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="flex mb-2">
                            <FaStar className="text-orange-500 text-xl"></FaStar>
                            <FaStar className="text-orange-500 text-xl"></FaStar>
                            <FaStar className="text-orange-500 text-xl"></FaStar>
                            <FaStar className="text-orange-500 text-xl"></FaStar>
                            <FaStar className="text-orange-500 text-xl"></FaStar>
                        </div>
                        <h2 className="card-title">Red Sequin Dress</h2>
                        <p className="text-xl text-red-400 font-bold">$13.99</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Add To Cart</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Seller;