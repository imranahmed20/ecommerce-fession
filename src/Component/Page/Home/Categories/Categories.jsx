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
        <div>
            <h1>Our Categories</h1>
            <div className="grid md:grid-cols-5 gap-5">              
                    <div className="card w-44   bg-base-100 shadow-xl">
                        <figure className="px-5 pt-8">
                            <img src={image1} alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                        </div>
                    </div>
                <div>
                    <img src={image2} alt="" />
                </div>
                <div>
                    <img src={image3} alt="" />
                </div>
                <div>
                    <img src={image4} alt="" />
                </div>
                <div>
                    <img src={image5} alt="" />
                </div>
                <div>
                    <img src={image6} alt="" />
                </div>
                <div>
                    <img src={image7} alt="" />
                </div>
                <div>
                    <img src={image8} alt="" />
                </div>
                <div>
                    <img src={image9} alt="" />
                </div>
                <div>
                    <img src={image10} alt="" />
                </div>

            </div>

        </div>
    );
};

export default Categories;