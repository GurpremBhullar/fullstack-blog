import React from "react";
import { Link } from "react-router-dom";
import { nav } from "../../data";

const DemoHeader = () => {
    const [isActive, setIsActive] = useState(false);
  return (
    <header className="border-b border-black sticky top-0 z-50">
      <div className="size h-[70px] flex items-center justify-between">
        <Link to={"/"}>
          <img className="h-[4rem]" src="./camera.jpg" alt="dh" />
        </Link>
      </div>
      <div>
        <div className="absolute top-5 right-0 flex items-center gap-5 pr-4">
          {nav.map((link, i) => (
            <Link key={i} to={link.path}>
              {link.title}
            </Link>
          ))}
          <button className="hidden text-sm sm:flex items-center gap-5">
            Sign In
          </button>
          <button className="bg-black text-white rounded-full px-3 p-2 text-sm font-medium">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default DemoHeader;
