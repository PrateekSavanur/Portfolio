import NavItems from "./NavItems";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="top-0 w-full bg-blue-950 md:sticky z-[999]">
      <div className="md:hidden">
        <NavItems />
      </div>
      <div className=" hidden  md:block">
        <div className="flex justify-between text-[30px] text-slate-100 font-mono font-bold">
          <div className="pt-6 pl-3 ml-4 ">
            <Link className="" to="/">
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
            <Link className="mr-8 p-2" to="/projects">
              Projects
            </Link>
            <Link className="mr-8 p-2" to="/contact">
              Contact
            </Link>
            <button className="rounded-lg border-2 border-teal-400 text-teal-400 p-2 mr-8">
              <a
                href="https://bit.ly/Resume_Prateek"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
