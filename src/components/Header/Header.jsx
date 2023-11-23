import { NavLink } from "react-router-dom";

const links = <>
    <li><NavLink
        to="/"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline decoration-[#FF444A] text-[#FF444A] font-bold text-lg" : "text-lg"
        }
    >
        Home
    </NavLink></li>
    <li><NavLink
        to="/donation"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline decoration-[#FF444A] text-[#FF444A] font-bold text-lg" : "text-lg"
        }
    >
        Donation
    </NavLink></li>
    <li><NavLink
        to="/statistics"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline decoration-[#FF444A] text-[#FF444A] font-bold text-lg" : "text-lg"
        }
    >
        Statistics
    </NavLink></li>
</>

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <img className="w-40" src="/src/assets/Logo.png" alt="Donation-campaign-logo" />
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu-horizontal px-1 gap-10">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Header;