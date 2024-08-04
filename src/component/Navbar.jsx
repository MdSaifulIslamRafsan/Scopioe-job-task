import { AiOutlineAppstore, AiOutlineFileText, AiOutlineSearch, AiOutlineTeam } from "react-icons/ai";
import { CiHeart, CiLogin, CiSettings } from "react-icons/ci";
import { MdOutlineLiveHelp } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import { IoNotifications } from "react-icons/io5";


const Navbar = () => {
    const {user , handleLogout} = useAuth();
   
    
    return (
        <div className="navbar shadow-2xl bg-base-100">
        <div className="navbar-start">
        <Link to={'/'} className="text-[#156BCA] text-center py-5 flex justify-center sm:text-left text-3xl font-normal font-Gupter lg:hidden">
          LOGO
        </Link>
        <div className="hidden lg:flex gap-3">
            <div className="">
            <img className="w-14 rounded-full" src={user?.photoURL ? user?.photoURL : 'https://i.ibb.co/51MhwJ3/Group-12867.png' } alt="" />
                   
            </div>
            <div className="">
            <h4 className="text-lg font-semibold">{user?.displayName}</h4>
            <p>{user?.email}</p>
            </div>
        </div>
        </div>
        <div className="navbar-center hidden lg:flex">
         
        </div>
        <div className="navbar-end">
         <span className="lg:border-2 lg:p-2 lg:rounded-full  lg:mr-4"><IoNotifications></IoNotifications> </span>
        <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            
           <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-60 p-2 shadow"
            >
                <div className=" flex gap-2 justify-end items-end pr-5 pb-5 flex-col h-48 bg-[#156BCA]">
                 
                    <img className="w-14 rounded-full" src={user?.photoURL ? user?.photoURL : 'https://i.ibb.co/51MhwJ3/Group-12867.png' } alt="" />
                    <h4 className="text-white text-sm sm:text-base lg:text-xl font-semibold">{user?.displayName}</h4>
                    <p className="text-[10px]">{user?.email}</p>
                </div>
          <li className="py-2">
            <NavLink className="p-2" to={"/"}>
              <AiOutlineAppstore className="inline-block mr-2 text-2xl" />
              Home
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink className="p-2" to={"/NewListing"}>
              <AiOutlineTeam className="inline-block mr-2 text-2xl" />
              New Listing
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink className="p-2" to={"/Search"}>
              <AiOutlineSearch className="inline-block mr-2 text-2xl" />
              Search
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink className="p-2" to={"/About"}>
              <AiOutlineFileText className="inline-block mr-2 text-2xl" />
              About
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink className="p-2" to={"/Favorites"}>
              <CiHeart className="inline-block mr-2 text-2xl" />
              Favorites
            </NavLink>
          </li>
          <div className="divider"></div>
          <li className="py-2">
            <NavLink className="p-2" to={"/HelpCenter"}>
              <MdOutlineLiveHelp className="inline-block mr-2 text-2xl" />
              Help Center
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink className="p-2" to={"/Settings"}>
              <CiSettings className="inline-block mr-2 text-2xl" />
              Settings
            </NavLink>
          </li>
        </ul>
           </div>
          </div>
          <button onClick={handleLogout} className="text-red-500  hidden lg:flex gap-2"><span className="whitespace-nowrap">Log Out</span><span className="bg-[#FFECEA] font-medium rounded-full p-2"><CiLogin className="inline-block text-2xl"/></span></button>
        </div>
    );
};

export default Navbar;