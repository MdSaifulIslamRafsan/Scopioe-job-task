import { FaEye, FaEyeSlash } from "react-icons/fa";

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Slider from "./../component/Slider";
import { useState } from "react";

const SignUp = () => {
  const [isPassword, setIsPassword] = useState(true);
  const [isReTypePassword, setIsReTypePassword] = useState(true);
  return (
    <section className="max-w-[1440px] sm:w-[90%]  font-Poppins lg:w-9/12 mx-auto">
      <section className="grid grid-cols-1 gap-10  min-h-screen  items-center md:grid-cols-2 lg:gap-24">
        <div className="order-2 md:order-1 bg-[url('https://i.ibb.co/X2G3HbH/i-Phone-14-15-Pro-Max-6.png')] bg-cover bg-center sm:bg-none">
          <div className="py-10 sm:py-0">
            <h1 className="text-[#156BCA] text-center sm:text-left text-4xl font-normal font-Gupter">
              LOGO
            </h1>
            <p className="text-center text-white sm:hidden sm:text-left ">
            Create Account <br />
            Fill in Your Information
            </p>
          </div>
          <div className="bg-white px-2 pt-4 rounded-t-3xl sm:bg-transparent sm:px-0 sm:pt-0 sm:rounded-t-none">
            <h3 className="hidden sm:block text-xl text-center sm:text-left sm:text-2xl font-semibold">
              Sign Up To Your Account
            </h3>
            <h3 className="sm:hidden text-xl text-center sm:text-left sm:text-2xl font-semibold">Sign Up</h3>
            <p className="hidden sm:block text-xs sm:text-sm  text-center sm:text-left">
              elcome Back! By click the sign up button, you're agree to Zenitood
              Terms and Service and acknlowledge the <br /> <Link className="text-[#1da1f2]" to={''}>Privacy and Policy</Link>
            </p>

            <form>
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">Name</span>
                </div>
                <input
                  type="text"
                  placeholder="@username"
                  className="input input-bordered w-full "
                />
              </label>
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
              <label className="form-control pb-4 w-full ">
                <div className="label">
                  <span className="label-text">Password</span>
                </div>
                <div className="relative">
                  <input
                    type={isPassword ? "password" : "text"}
                    placeholder="Enter your password"
                    className="input input-bordered w-full"
                  />
                  <div
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                    onClick={() => setIsPassword(!isPassword)}
                  >
                    {isPassword ? <FaEyeSlash /> : <FaEye></FaEye>}
                  </div>
                </div>
              </label>
              <label className="form-control pb-4 w-full ">
                <div className="label">
                  <span className="label-text">Confirm Password</span>
                </div>
                <div className="relative">
                  <input
                    type={isReTypePassword ? "password" : "text"}
                    placeholder="Re-type password"
                    className="input input-bordered w-full"
                  />
                  <div
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                    onClick={() => setIsReTypePassword(!isReTypePassword)}
                  >
                    {isReTypePassword ? <FaEyeSlash /> : <FaEye></FaEye>}
                  </div>
                </div>
              </label>
              <label htmlFor="checkbox">
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  name=""
                  id="checkbox"
                />
                <span className="ml-2 text-[#156BCA] text-sm sm:text-base cursor-pointer">
                  Accept Terms of Service
                </span>
              </label>
              <button
                type="submit"
                className="btn bg-[#156BCA] text-white px-10 md:px-20 lg:px-24 flex mt-10 mx-auto"
              >
                Sign up
              </button>
              <p className="mt-4 text-xs sm:text-sm lg:text-base text-center">
                Already Have an Account?{" "}
                <Link className="text-[#156BCA]" to="/login">
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div className="mt-10 order-1  hidden sm:block lg:mt-0">
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
                link="Create Account "
                text="Fill in Your Information"
                Slider_img="https://i.ibb.co/YZ3PHWL/Rectangle-9593.png"
              ></Slider>
            </SwiperSlide>
            <SwiperSlide>
              <Slider
                link="Create Account "
                text="Fill in Your Information"
                Slider_img="https://i.ibb.co/YZ3PHWL/Rectangle-9593.png"
              ></Slider>
            </SwiperSlide>
            <SwiperSlide>
              <Slider
                link="Create Account "
                text=" Fill in Your Information"
                Slider_img="https://i.ibb.co/YZ3PHWL/Rectangle-9593.png"
              ></Slider>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </section>
  );
};

export default SignUp;
