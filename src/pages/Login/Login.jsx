import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const Login = () => {

    const handleForm = e => {
        e.preventDefault();
       const form = new FormData(e.currentTarget);
       console.log(form.get('password'))
    }

    return (
        <div>
            <Navbar></Navbar>

            <div>

                <div className="hero min-h-screen bg-base-200">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-3xl font-bold text-center pt-5">Login your account</h1>
                        <form onSubmit={handleForm} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email address</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password"  placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="pb-5 text-center">Do not have account? Please <Link className="text-red-600 text-lg" to="/register">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;