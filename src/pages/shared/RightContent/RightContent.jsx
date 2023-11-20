import { FaFacebook, FaGithub, FaGoogle, FaTwitter, FaInstagram } from 'react-icons/fa';
import image1 from "../../../assets/Rectangle 3991 (1).png"
import image2 from "../../../assets/Rectangle 3991 (2).png"
import image3 from "../../../assets/Rectangle 3991.png"

const RightContent = () => {
    return (
        <div>
            <div className='py-2 px-3 mb-5'>
                <h2 className='text-xl font-bold mb-4'>Login with</h2>
                <button className='flex items-center border w-full rounded text-center mb-2 py-1'>
                    <FaGoogle className='mx-3'></FaGoogle>
                    <p className='text-base'>Login with google</p>
                </button>
                <button className='flex items-center border w-full rounded text-center py-1'>
                    <FaGithub className='mx-3'></FaGithub>
                    <p className='text-base'>Login with Github</p>
                </button>
            </div>
            <div className='py-2 px-3 mb-5'>
                <h2 className='text-xl font-bold mb-4 '>Fine Us On</h2>
                <a className='flex items-center border' href="">
                    <FaFacebook className='mx-3'></FaFacebook>
                    Facebook
                </a>
                <a className='flex items-center border my-5' href="">
                    <FaTwitter className='mx-3'></FaTwitter>
                    Twitter
                </a>
                <a className='flex items-center border' href="">
                    <FaInstagram className='mx-3'></FaInstagram>
                    Instagram
                </a>
            </div>
            <div className='py-2 px-3 mb-5'>
                <h2 className='text-xl font-bold mb-4 '>X-Zone</h2>
                <div className='my-5'>
                    <img src={image1} alt="" />
                    <p className='text-center'>Swimming</p>
                </div>
                <div className='my-5'>
                    <img src={image2} alt="" />
                    <p className='text-center'>class</p>
                </div>
                <div className='my-5'>
                    <img src={image3} alt="" />
                    <p className='text-center'>Play Ground</p>
                </div>
            </div>
        </div>
    );
};

export default RightContent;