import NavItems from "./NavItems";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="z-1 top-0 w-full bg-blue-950 md:fixed">
      <div className="md:hidden">
        <NavItems />
      </div>
      <div className=" hidden  md:block">
        <div className="flex justify-between text-[20px] text-slate-100 ">
          <div className="p-5 ml-4 ">
            <Link className="p-2 " to="/">
              Prateek
            </Link>
          </div>
          <div className="flex text-right text-[20px] p-5 ">
            <Link className="mr-8 p-2" to="/">
              About
            </Link>
            <Link className="mr-8 p-2" to="/experience">
              Experience
            </Link>
            <Link className="mr-8 p-2" to="/work">
              Work
            </Link>
            <Link className="mr-8 p-2" to="/contact">
              Contact
            </Link>
            <button className="rounded-lg border-2 border-teal-400 text-teal-400 p-2 mr-8">
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
