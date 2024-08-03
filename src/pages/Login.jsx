import { FaEye, FaEyeSlash, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";
import Slider from './../component/Slider';
import { useState } from "react";

const Login = () => {
  const [isPassword , setIsPassword]  = useState(true)
  return (
    <section className="max-w-[1440px] sm:w-[90%]  font-Poppins lg:w-9/12 mx-auto">
      <section className="grid grid-cols-1 gap-10  min-h-screen  items-center md:grid-cols-2 lg:gap-24">
        <div className="order-2 bg-[url('https://i.ibb.co/X2G3HbH/i-Phone-14-15-Pro-Max-6.png')] bg-cover bg-center sm:bg-none">
          <div className="py-10 sm:py-0">
          <h1 className="text-[#156BCA] text-center sm:text-left text-4xl font-normal font-Gupter">
            LOGO
          </h1>
          <p className="text-center text-white sm:hidden sm:text-left ">Sign In to view all the <br /> massage therapists</p>
          </div>
          <div className="bg-white px-2 pt-4 rounded-t-3xl sm:bg-transparent sm:px-0 sm:pt-0 sm:rounded-t-none">
          <h3 className="text-xl text-center sm:text-left sm:text-2xl font-semibold">Log In To Your Account</h3>
          <p className="text-xs sm:text-sm lg:text-base text-center sm:text-left">Welcome Back! Select a method to log in:</p>

          <div className="flex mt-5 justify-between gap-5">
            <button
              type="button"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              className="mb-2 w-1/2  flex justify-center rounded bg-gradient-to-r from-gray-300 to-white px-6 py-3 text-xs font-medium uppercase leading-normal text-[#152A16] shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            >
              <span className="me-2 [&>svg]:h-4 [&>svg]:w-4">
                <FcGoogle />
              </span>
              Google
            </button>

            <button
              type="button"
              data-twe-ripple-init
              data-twe-ripple-color="light"
              className="mb-2 w-1/2  flex justify-center  rounded bg-[#1da1f2] px-6 py-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            >
              <span className="me-2 [&>svg]:h-4 [&>svg]:w-4">
                <FaFacebookF />
              </span>
              Facebook
            </button>
          </div>

          <div className="divider">Or Continue with Email</div>

          <form>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
             <div className="relative">
             <input
                type={isPassword ? "password" : 'text'}
                placeholder="Enter your password"
                className="input input-bordered w-full"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2" onClick={()=>setIsPassword(!isPassword)}>
                 {isPassword ? <FaEyeSlash /> : <FaEye></FaEye> 
 }
              </div>
             </div>
            </label>
            <div className="mt-4 flex justify-between">
              <label htmlFor="checkbox">
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  name=""
                  id="checkbox"
                />
                <span className="ml-2 text-sm sm:text-base cursor-pointer">Remember me</span>
              </label>
              <span className="text-[#156BCA] text-sm sm:text-base cursor-pointer">
                Forgot password?
              </span>
            </div>
            <button
              type="submit"
              className="btn bg-[#156BCA] text-white px-10 md:px-20 lg:px-24 flex mt-10 mx-auto"
            >
              Sign in
            </button>
            <p className="mt-4 text-xs sm:text-sm lg:text-base text-center">
              Don’t Have an Account?{" "}
              <Link className="text-[#156BCA]" to="/signUp">
                Create Account
              </Link>
            </p>
          </form>
          </div>
        </div>
        <div className="mt-10 hidden sm:block lg:mt-0">
        <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Slider link="Sign In " text="to view all the massage therapists" Slider_img="https://i.ibb.co/YZ3PHWL/Rectangle-9593.png"></Slider></SwiperSlide>
        <SwiperSlide><Slider link="Sign In " text="to view all the massage therapists" Slider_img="https://i.ibb.co/YZ3PHWL/Rectangle-9593.png"></Slider></SwiperSlide>
        <SwiperSlide><Slider link="Sign In " text="to view all the massage therapists" Slider_img="https://i.ibb.co/YZ3PHWL/Rectangle-9593.png"></Slider></SwiperSlide>
        

        
      </Swiper>
        </div>
      </section>
    </section>
  );
};

export default Login;
