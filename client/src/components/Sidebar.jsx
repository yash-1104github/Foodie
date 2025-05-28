import { Link } from "react-router-dom";
import { Heart, Home } from "lucide-react";

const Sidebar = () => {


  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );
};



export default Sidebar;

const DesktopSidebar = () => {
  return (
    <>
      <div className="bg-slate-200 p-3 md:p-10 border-r h-full w-24 md:w-64 hidden sm:block  fixed top-0 left-0 ">
        <div className="flex flex-col  gap-10 align-middle justify-center  top-8 left-0">
          <div className="w-full flex justify-center md:justify-start">
            <Link to={"/"} >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0TYCxjgo_eJ5lSjH0m5wXscDbYgAA1i9haw&s.jpg"
                alt="logo"
                className="hidden  p-2 md:block rounded-2xl"
              />
              <img
                src="/mobile-logo.svg"
                alt="logo"
                className="block md:hidden"
              />
            </Link>
          </div>
          <ul className="flex flex-col item-center md:items-start gap-8 justify-center p-4 rounded-lg ">
            <Link to={"/"} className="flex gap-5">
              <Home size={"24"} />
              <span className="font-bold hidden md:block">Home</span>
            </Link>
            <Link to={"/favorite"} className="flex gap-5">
              <Heart size={"24"} />
              <span className="font-bold hidden md:block">Favorites</span>
            </Link>
          </ul>
        </div>

        <div className="flex mt-80 justify-center items-center p-2 rounded-lg ">
          <div className="text-center mt-52 text-slate-500 font-semibold bottom-0">
            @2025 Yash Gupta
          </div>
        </div>
      </div>
    </>
  );
};

const MobileSidebar = () => {
  return (
    <>
      <div
        className="flex justify-center gap-10 border-t fixed w-full
			bottom-0 left-0 bg-slate-200 z-10 p-4 sm:hidden"
      >
        <Link to={"/"}>
          <Home size={"24"} className="cursor-pointer" />
        </Link>
        <Link to={"/favorite"}>
          <Heart size={"24"} className="cursor-pointer" />
        </Link>
      </div>
    </>
  );
};
