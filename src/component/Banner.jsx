import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="lg:flex bg-white p-5 m-5 shadow-2xl gap-24 rounded-xl">
        <div className="lg:w-2/5 space-y-3">
            <h4 className="lg:text-lg font-semibold">I'm Looking for Massage Therapist Near...</h4>
            <p className="text-sm lg:text-base">In using this site, I agree to be bound by the <Link className="text-[#156BCA]" to={"/"}>Terms of Service</Link>  and  <Link className="text-[#156BCA]" to={'/'}>Privacy Policy</Link></p>
            <div className="hidden border rounded-xl p-1 lg:flex">
            <input type="text" placeholder="ZIP code or city name" className="outline-none flex-1 px-4" />
            <button className="btn  btn-primary">GO</button>
            </div>
        </div>
        <div className="lg:w-1/2 my-10 lg:my-0 flex justify-center lg:justify-end bg-[url('https://i.ibb.co/hLn1QmP/Vector-1.png')] bg-cover bg-center">
            <img src="https://i.ibb.co/bb5XrqM/Group-1000001700.png" alt="" />
        </div>
        <div className="lg:hidden  border rounded-xl p-1 flex">
            <input type="text" placeholder="ZIP code or city name" className="outline-none w-full flex-1 px-2 sm:px-4" />
            <button className="btn  btn-primary">GO</button>
            </div>
    </div>
    );
};

export default Banner;