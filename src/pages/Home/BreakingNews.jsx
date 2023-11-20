import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex items-center bg-slate-300 rounded mt-5">
            <button className="btn btn-success">Latest</button>
            <div>
                <Marquee className="text-red-500" speed={100}>
                    Through sheer determination, innovation, and audacity, Syed Manzur Elahi became a name synonymous with the success of Bangladeshs leather and footwear industry.
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;