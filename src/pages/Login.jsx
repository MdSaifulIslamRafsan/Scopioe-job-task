import { FaEye, FaEyeSlash, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";
import Slider from './../component/Slider';
import { useState } from "react";
import useAuth from "../Hook/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = () => {
  // Custom hook for authentication-related functions
  const { handleGoogleLogin, handleFacebookLogin, handleLoginAccount } = useAuth();
  
  // React Router hook for navigation
  const navigate = useNavigate();
  const location = useLocation();
  // State to toggle password visibility
  const [isPassword, setIsPassword] = useState(true);

  // useForm hook from react-hook-form for managing form state and validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => {
    const {email , password } = data;
    // Handle login with email and password here
    handleLoginAccount(email, password)
    .then(() => {
      reset();

      Swal.fire({
        title: "Good job!",
        text: "You've successfully logged in. Let's get started!",
        icon: "success",
      });
      navigate(location?.state ? location?.state : '/' )
      // ...
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error?.message,
      });
    });
  };

  return (
    <section className="max-w-[1440px] sm:w-[90%] font-Poppins lg:w-9/12 mx-auto">
      <section className="grid grid-cols-1 gap-10 min-h-screen items-center md:grid-cols-2 lg:gap-24">
        {/* Left section for background and form */}
        <div className="order-2 md:order-1 bg-[url('https://i.ibb.co/X2G3HbH/i-Phone-14-15-Pro-Max-6.png')] bg-cover bg-center sm:bg-none">
          <div className="py-10 sm:py-0">
            <h1 className="text-[#156BCA] text-center sm:text-left text-4xl font-normal font-Gupter">
              LOGO
            </h1>
            <p className="text-center text-white sm:hidden sm:text-left">
              Sign In to view all the <br /> massage therapists
            </p>
          </div>
          <div className="bg-white px-2 pt-4 rounded-t-3xl sm:bg-transparent sm:px-0 sm:pt-0 sm:rounded-t-none">
            <h3 className="text-xl text-center sm:text-left sm:text-2xl font-semibold">
              Log In To Your Account
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-center sm:text-left">
              Welcome Back! Select a method to log in:
            </p>

            {/* Buttons for Google and Facebook login */}
            <div className="flex mt-5 justify-between gap-5">
              <button
                onClick={() => handleGoogleLogin(navigate, location)}
                type="button"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                className="mb-2 w-1/2 flex justify-center rounded bg-gradient-to-r from-gray-300 to-white px-6 py-3 text-xs font-medium uppercase leading-normal text-[#152A16] shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              >
                <span className="me-2 [&>svg]:h-4 [&>svg]:w-4">
                  <FcGoogle />
                </span>
                Google
              </button>

              <button
                onClick={() => handleFacebookLogin(navigate, location)}
                type="button"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                className="mb-2 w-1/2 flex justify-center rounded bg-[#1da1f2] px-6 py-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              >
                <span className="me-2 [&>svg]:h-4 [&>svg]:w-4">
                  <FaFacebookF />
                </span>
                Facebook
              </button>
            </div>

            <div className="divider">Or Continue with Email</div>

            {/* Login form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email input field */}
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
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                />
                {/* Display error message if email is invalid */}
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </label>

              {/* Password input field */}
              <label className="form-control w-full">
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
                    type={isPassword ? "password" : 'text'}
                    placeholder="Enter your password"
                    className="input input-bordered w-full"
                  />
                   {/* Toggle password visibility */}
                   <div className="absolute right-4 top-1/2 -translate-y-1/2" onClick={() => setIsPassword(!isPassword)}>
                    {isPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
                  {/* Display error message if password is missing or less than 6 characters */}
                  {errors.password && (
                    <span className="text-red-500">{errors.password.message}</span>
                  )}
              </label>

              {/* Remember me checkbox and forgot password link */}
              <div className="mt-4 flex justify-between">
                <div className="">
                <label htmlFor="checkbox" className="flex items-center">
                  <input
                    {...register("remember", { required: "You must agree to the terms" })}
                    className="cursor-pointer"
                    type="checkbox"
                    id="checkbox"
                  />
                  <span className="ml-2 text-sm sm:text-base cursor-pointer">Remember me</span>
                  
                </label>
                
                {/* Display error message if checkbox is not checked */}
                {errors.remember && (
                  <span className="text-red-500">{errors.remember.message}</span>
                )}
                </div>
                <span className="text-[#156BCA] text-sm sm:text-base cursor-pointer">
                  Forgot password?
                </span>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="btn bg-[#156BCA] text-white px-10 md:px-20 lg:px-24 flex mt-10 mx-auto"
              >
                Sign in
              </button>

              {/* Link to sign up page */}
              <p className="mt-4 text-xs sm:text-sm lg:text-base text-center">
                Don’t Have an Account?{" "}
                <Link className="text-[#156BCA]" to="/signUp">
                  Create Account
                </Link>
              </p>
            </form>
          </div>
        </div>

        {/* Right section for Swiper slider */}
        <div className="mt-10 order-1 hidden sm:block lg:mt-0">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Slider
                link="Sign In"
                text="to view all the massage therapists"
                Slider_img="https://i.ibb.co/YZ3PHWL/Rectangle-9593.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slider
                link="Sign In"
                text="to view all the massage therapists"
                Slider_img="https://i.ibb.co/YZ3PHWL/Rectangle-9593.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slider
                link="Sign In"
                text="to view all the massage therapists"
                Slider_img="https://i.ibb.co/YZ3PHWL/Rectangle-9593.png"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </section>
  );
};

export default Login;
