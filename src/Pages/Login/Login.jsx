import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
// import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {

    const {signIn, googleSignIn} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || '/';

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            // navigate(from, {replace: true})
        })
        .catch(error => console.log(error))
    }

    const handleGoogleSignIn = event =>{
        event.preventDefault();

        googleSignIn()
        .then(result =>{
            const googleUser = result.user;
            console.log(googleUser);
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p>New to Marvel Toys <Link to='/register' className="text-[red] font-bold">Register</Link> </p>
                    </div>
                </div>
                <div>
                    <button onClick={handleGoogleSignIn} className="bg-lime-800 text-white p-4 rounded-md">Sign in with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;