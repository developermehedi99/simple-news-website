import moment from 'moment';

const Header = () => {
    return (
        <div className="text-center">
            <h1 className="text-6xl font-normal">The Dragon News</h1>
            <p className="text-lg font-normal my-5">Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium'>{moment().format("dddd, MMMM D, YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;