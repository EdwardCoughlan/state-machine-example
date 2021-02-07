import { Link } from "react-router-dom";
import logo from "../icons/muffin.svg";

export const Header = () => (
  <nav className="bg-white shadow-sm w-100">
    <div className="container px-4 py-2 mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800 md:text-3xl">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} className="w-8 h-8" alt="logo" />
              <span className="inline-block">Muffin Tech</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col -mx-2">
          <Link
            to="login"
            className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  </nav>
);
