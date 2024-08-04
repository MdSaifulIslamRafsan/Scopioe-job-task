import {
  AiOutlineAppstore,
  AiOutlineFileText,
  AiOutlineSearch,
  AiOutlineTeam,
} from "react-icons/ai";
import { CiHeart, CiSettings } from "react-icons/ci";
import { MdOutlineLiveHelp } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const Root = () => {
  return (
    <div className="flex font-Poppins">
      <aside className="w-[16%]  hidden lg:block min-h-screen shadow-2xl">
        <Link to={'/'} className="text-[#156BCA] text-center py-5 flex justify-center sm:text-left text-4xl font-normal font-Gupter">
          LOGO
        </Link>
        <ul>
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
      </aside>
      <div className="w-full">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
