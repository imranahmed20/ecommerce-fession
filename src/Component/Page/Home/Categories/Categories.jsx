import image1 from '../../../../assets/pic 1.webp'
import image2 from '../../../../assets/pic-2.webp'
import image3 from '../../../../assets/pic 3.webp'
import image4 from '../../../../assets/pic 5.webp'
import image5 from '../../../../assets/baby.webp'
import image6 from '../../../../assets/bags.webp'
import image7 from '../../../../assets/cap.webp'
import image8 from '../../../../assets/ring.webp'
import image9 from '../../../../assets/watch.webp'
import image10 from '../../../../assets/pic 11.webp'
const Categories = () => {
    return (
        <div className='mt-16 mb-16'>
            <h1 className='text-3xl font-bold mb-8'>Our Categories</h1>
            <div className="grid md:grid-cols-6 gap-5">
                <div className="card w-44   bg-rose-100 shadow-xl">
                    <figure className="px-5 pt-8">
                        <img src={image1} alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Dresses</h2>
                    </div>
                </div>
                <div className="card w-44  bg-rose-100 shadow-xl">
                    <figure className="px-5 pt-8">
                        <img src={image2} alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Leather Bags</h2>
                    </div>
                </div>
                <div className="card w-44   bg-rose-100 shadow-xl">
                    <figure className="px-5 pt-8">
                        <img src={image3} alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Boots</h2>
                    </div>
                </div>
                <div className="card w-44  bg-rose-100 shadow-xl">
                    <figure className="px-5 pt-8">
                        <img src={image4} alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Boots</h2>
                    </div>
                </div>
                <div className="card w-44  bg-rose-100 shadow-xl">
                    <figure className="px-5 pt-8">
                        <img src={image5} alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Gift for Him</h2>
                    </div>
                </div>
                <div className="card w-44  bg-rose-100 shadow-xl">
                    <figure className="px-5 pt-8">
                        <img src={image6} alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Sneakers</h2>
                    </div>
                </div>
                <div className="card w-44  bg-rose-100 shadow-xl">
                    <figure className="px-5 pt-8">
                        <img src={image7} alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cap</h2>
                    </div>
                </div>
                <div className="card w-44  bg-rose-100 shadow-xl">
                    <figure className="px-5 pt-8">
                        <img src={image8} alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Gold Rings</h2>
                    </div>
                </div>
                <div className="card w-44  bg-rose-100 shadow-xl">
                    <figure className="px-5 pt-8">
                        <img src={image9} alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Watch</h2>
                    </div>
                </div>
                <div className="card w-44  bg-rose-100 shadow-xl">
                    <figure className="px-5 pt-8">
                        <img src={image10} alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Sweaters</h2>
                    </div>
                </div>
                <div className="card w-44  bg-rose-100 shadow-xl">
                    <figure className="px-5 pt-8">
                        <img src={image9} alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Watch</h2>
                    </div>
                </div>
                <div className="card w-44  bg-rose-100 shadow-xl">
                    <figure className="px-5 pt-8">
                        <img src={image3} alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Boots</h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Categories;