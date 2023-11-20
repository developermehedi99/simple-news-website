import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftContent from "../shared/LeftContent/LeftContent";
import Navbar from "../shared/Navbar/Navbar";
import RightContent from "../shared/RightContent/RightContent";
import BreakingNews from "./BreakingNews";
import NewsCard from "../NewsCard/NewsCard";

const Home = () => {
    const news = useLoaderData();
    
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-4">
                <div className="border ">
                    <LeftContent></LeftContent>
                </div>

                {/* news middle showing  */}
                <div className="col-span-2 border">
                    {
                        news.map(anews => <NewsCard
                        key={anews._id}
                        news={anews}
                        ></NewsCard>)
                    }
                </div>
                <div className="border">
                    <RightContent></RightContent>
                </div>
            </div>
        </div>
    );
};

export default Home;