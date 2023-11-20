import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftContent = () => {
    const [categorys, setCategorys] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategorys(data))
    }, [])
    return (
        <div>
            <h1 className="text-xl mb-4 font-bold">All categorys </h1>
            {
                categorys.map(category => <Link
                    className="block ml-3 mb-2"
                    key={category.id}>
                    {category.name}</Link>)
            }
        </div>
    );
};

export default LeftContent;