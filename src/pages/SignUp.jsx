import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/css"; 
import "swiper/css/pagination"; 
import { Pagination } from "swiper/modules"; 
import Slider from "./../component/Slider"; 
import { useState } from "react"; 
import { useForm } from "react-hook-form"; 
import useAuth from "../Hook/useAuth";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

const SignUp = () => {
    // State to toggle password visibility
  const [isPassword, setIsPassword] = useState(true); 
  // State to toggle re-type password visibility
  const [isReTypePassword, setIsReTypePassword] = useState(true); 
  const {createAccount} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  // Form methods from react-hook-form
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  
  // Function to handle form submission
  const onSubmit = (data) => {
    const {email , password , username} = data;
    createAccount(email, password)
    .then(() => {
      updateProfile(auth.currentUser, {
        displayName: username,
      })
      Swal.fire({
        title: "Good job!",
        text:  "Congratulations! Your account has been successfully created.",
        icon: "success"
      });
      reset();
      navigate(location?.state ? location?.state : '/' )
    })
    .catch((error) => {
      const errorMessage = error.message;
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    });
   

    // Handle login with email and password here
  };
  // Watch password field for validation
  const password = watch("password"); 
  return (
    <section className="max-w-[1440px] sm:w-[90%] font-Poppins lg:w-9/12 mx-auto">
      <section className="grid grid-cols-1 gap-10 min-h-screen items-center md:grid-cols-2 lg:gap-24">
        {/* Left side: Form and background image */}
        <div className="order-2 md:order-1 bg-[url('https://i.ibb.co/X2G3HbH/i-Phone-14-15-Pro-Max-6.png')] bg-cover bg-center sm:bg-none">
          <div className="py-10 sm:py-0">
            <h1 className="text-[#156BCA] text-center sm:text-left text-4xl font-normal font-Gupter">
              LOGO
            </h1>
            <p className="text-center text-white sm:hidden sm:text-left">
              Create Account <br />
              Fill in Your Information
            </p>
          </div>
          <div className="bg-white px-2 pt-4 rounded-t-3xl sm:bg-transparent sm:px-0 sm:pt-0 sm:rounded-t-none">
            <h3 className="hidden sm:block text-xl text-center sm:text-left sm:text-2xl font-semibold">
              Sign Up To Your Account
            </h3>
            <h3 className="sm:hidden text-xl text-center sm:text-left sm:text-2xl font-semibold">
              Sign Up
            </h3>
            <p className="hidden sm:block text-xs sm:text-sm text-center sm:text-left">
              Welcome Back! By clicking the sign-up button, you agree to Zenitood
              Terms and Service and acknowledge the <br />{" "}
              <Link className="text-[#1da1f2]" to={''}>
                Privacy and Policy
              </Link>
            </p>

            {/* Form for user sign-up */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Name field */}
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Name</span>
                </div>
                <input
                  {...register("username", { required: "This field is required" })}
                  type="text"
                  name="username"
                  placeholder="@username"
                  className="input input-bordered w-full"
                />
                {errors.username && (
                  <span className="text-red-500">{errors.username.message}</span>
                )}
              </label>
              
              {/* Email field */}
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Email</span>
                </div>
                <input
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </label>
              
              {/* Password field */}
              <label className="form-control pb-4 w-full">
                <div className="label">
                  <span className="label-text">Password</span>
                </div>
                <div className="relative">
                  <input
                    {...register("password", {
                      required: "This field is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long",
                      },
                    })}
                    name="password"
                    type={isPassword ? "password" : "text"}
                    placeholder="Enter your password"
                    className="input input-bordered w-full"
                  />
                  <div
                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={() => setIsPassword(!isPassword)}
                  >
                    {isPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
                {errors.password && (
                  <span className="text-red-500">{errors.password.message}</span>
                )}
              </label>
              
              {/* Confirm Password field */}
              <label className="form-control pb-4 w-full">
                <div className="label">
                  <span className="label-text">Confirm Password</span>
                </div>
                <div className="relative">
                  <input
                    {...register("reTypePassword", {
                      required: "This field is required",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                    name="reTypePassword"
                    type={isReTypePassword ? "password" : "text"}
                    placeholder="Re-type password"
                    className="input input-bordered w-full"
                  />
                  <div
                    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={() => setIsReTypePassword(!isReTypePassword)}
                  >
                    {isReTypePassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
                {errors.reTypePassword && (
                  <span className="text-red-500">{errors.reTypePassword.message}</span>
                )}
              </label>
              
              {/* Terms and Conditions checkbox */}
              <label htmlFor="checkbox">
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  name="terms"
                  {...register("terms", { required: "You must accept the terms" })}
                  id="checkbox"
                />
                <span className="ml-2 text-[#156BCA] text-sm sm:text-base cursor-pointer">
                  Accept Terms of Service
                </span>
                <br />
                {errors.terms && (
                  <span className="text-red-500">{errors.terms.message}</span>
                )}
              </label>
              
              {/* Submit button */}
              <button
                type="submit"
                className="btn bg-[#156BCA] text-white px-10 md:px-20 lg:px-24 flex mt-10 mx-auto"
              >
                Sign up
              </button>
              
              {/* Link to login page */}
              <p className="mt-4 text-xs sm:text-sm lg:text-base text-center">
                Already Have an Account?{" "}
                <Link className="text-[#156BCA]" to="/login">
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
        
        {/* Right side: Slider */}
        <div className="mt-10 order-1 hidden sm:block lg:mt-0">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {/* Swiper slides */}
            <SwiperSlide>
              <Slider
                link="Create Account"
                text="Fill in Your Information"
                Slider_img="https://i.ibb.co/YZ3PHWL/Rectangle-9593.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slider
                link="Create Account"
                text="Fill in Your Information"
                Slider_img="https://i.ibb.co/YZ3PHWL/Rectangle-9593.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slider
                link="Create Account"
                text="Fill in Your Information"
                Slider_img="https://i.ibb.co/YZ3PHWL/Rectangle-9593.png"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </section>
  );
};

export default SignUp;
