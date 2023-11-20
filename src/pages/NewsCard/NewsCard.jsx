import { Link } from "react-router-dom";

const NewsCard = ({news}) => {
    const {title,image_url,details, _id} = news;
    return (
        <div>
            <h2 className="text-lg font-bold">{title}</h2>
            <img className="pt-4 pb-6" src={image_url} alt="" />
            {
                details.length > 200 ? 
                <p className="mb-7">{details.slice(0, 200)} <Link to={`/news/${_id}`} 
                className="text-red-600 font-bold">Read more...</Link></p> 
                : <h2>{details}</h2>
            }
        </div>
    );
};

export default NewsCard;