import image1 from '../../../../assets/im2_files/brand-img-1.webp'
import image2 from '../../../../assets/im2_files/brand-img-2.webp'
import image3 from '../../../../assets/im2_files/brand-img-3.webp'
import image4 from '../../../../assets/im2_files/brand-img-4.webp'
import image5 from '../../../../assets/im2_files/brand-img-5.webp'
import image6 from '../../../../assets/im2_files/brand-img-6.webp'
import image7 from '../../../../assets/im2_files/brand-img-7.webp'
import image8 from '../../../../assets/im2_files/brand-img-8.webp'
import image9 from '../../../../assets/im2_files/brand-img-9.webp'
import image10 from '../../../../assets/im2_files/brand-img-10.webp'
import image11 from '../../../../assets/im2_files/brand-img-11.webp'
import image12 from '../../../../assets/im2_files/brand-img-12.webp'

const Brand = () => {
    return (
        <div className='mt-16 mb-16'>
            <h1 className='text-3xl font-bold mb-8'>Brand of Prodcuts</h1>
            <div className="grid md:grid-cols-6 gap-8">
                <div className="card w-44   bg-cyan-50 shadow">
                    <figure className="px-5 pt-8">
                        <img src={image1} alt="" />
                    </figure>

                </div>
                <div className="card w-44  bg-cyan-50 shadow">
                    <figure className="px-5 pt-8">
                        <img src={image2} alt="" />
                    </figure>

                </div>
                <div className="card w-44   bg-cyan-50 shadow">
                    <figure className="px-5 pt-8">
                        <img src={image3} alt="" />
                    </figure>
                </div>
                <div className="card w-44  bg-cyan-50 shadow">
                    <figure className="px-5 pt-8">
                        <img src={image4} alt="" />
                    </figure>

                </div>
                <div className="card w-44  bg-cyan-50 shadow">
                    <figure className="px-5 pt-8">
                        <img src={image5} alt="" />
                    </figure>

                </div>
                <div className="card w-44  bg-cyan-50 shadow">
                    <figure className="px-5 pt-8">
                        <img src={image6} alt="" />
                    </figure>

                </div>
                <div className="card w-44  bg-cyan-50 shadow">
                    <figure className="px-5 pt-8">
                        <img src={image7} alt="" />
                    </figure>

                </div>
                <div className="card w-44  bg-cyan-50 shadow">
                    <figure className="px-5 pt-8">
                        <img src={image8} alt="" />
                    </figure>

                </div>
                <div className="card w-44  bg-cyan-50 shadow">
                    <figure className="px-5 pt-8">
                        <img src={image9} alt="" />
                    </figure>

                </div>
                <div className="card w-44  bg-cyan-50 shadow">
                    <figure className="px-5 pt-8">
                        <img src={image10} alt="" />
                    </figure>

                </div>
                <div className="card w-44  bg-cyan-50 shadow">
                    <figure className="px-5 pt-8">
                        <img src={image11} alt="" />
                    </figure>
                </div>
                <div className="card w-44  bg-cyan-50 shadow">
                    <figure className="px-5 pt-8">
                        <img src={image12} alt="" />
                    </figure>
                </div>
            </div>

        </div>
    );
};

export default Brand;