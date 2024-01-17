import { Link } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavItems() {
  const [open, setOpen] = useState();

  return (
    <div className="flex justify-between p-5 text-slate-100 md:invisible">
      <div>
        <Link to="/">Prateek</Link>
      </div>
      {!open ? (
        <div>
          <button onClick={() => setOpen(!open)}>
            <MenuIcon />
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-end md:invisible">
          <div className="align-items-end ">
            <button onClick={() => setOpen(!open)}>
              <MenuIcon />
            </button>
          </div>
          <div className="flex flex-col text-right text-[20px]">
            <Link className="mt-4" to="/">
              About
            </Link>
            <Link className="mt-4" to="/experience">
              Experience
            </Link>
            <Link className="mt-4" to="/work">
              Work
            </Link>
            <Link className="mt-4" to="/contact">
              Contact
            </Link>
            <button className="rounded-lg border-2 border-teal-400 text-teal-400 mt-4">
              Resume
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
