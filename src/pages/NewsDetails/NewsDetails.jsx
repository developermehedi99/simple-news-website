import BreakingNews from "../Home/BreakingNews";
import Header from "../shared/Header/Header";
import RightContent from "../shared/RightContent/RightContent";

const NewsDetails = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <h3>news details</h3>
                </div>
                <div>
                    <RightContent></RightContent>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;