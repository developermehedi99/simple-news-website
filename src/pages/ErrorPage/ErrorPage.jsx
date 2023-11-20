import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1>404</h1>
            <h2>page not found</h2>
            <button><Link to="/">Home</Link></button>
        </div>
    );
};

export default ErrorPage;