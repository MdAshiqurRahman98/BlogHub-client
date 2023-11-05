import { NavLink } from "react-router-dom";
import useAuth from './../../../hooks/useAuth';
import { useTheme } from './../../../hooks/useTheme';
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';

const Navbar = () => {
    const { user, logOut } = useAuth();
    const { changeTheme, mode } = useTheme();

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('User logged out successfully'))
            .catch(error => console.error(error))
    }

    const navLinks = <>
        <li className="mt-2 text-lg"><NavLink to="/" className={({ isActive, isPending }) =>
            isPending
                ? "pending"
                : isActive
                    ? "text-orange-500 text-lg font-bold"
                    : ""
        }>Home</NavLink></li>

        <li className="mt-2 lg:ml-5 text-lg"><NavLink to="/add-blog" className={({ isActive, isPending }) =>
            isPending
                ? "pending"
                : isActive
                    ? "text-orange-500 text-lg font-bold"
                    : ""
        }>Add Blog</NavLink></li>

        <li className="mt-2 lg:ml-5 text-lg"><NavLink to="/all-blogs" className={({ isActive, isPending }) =>
            isPending
                ? "pending"
                : isActive
                    ? "text-orange-500 text-lg font-bold"
                    : ""
        }>All Blogs</NavLink></li>

        <li className="mt-2 lg:ml-5 text-lg"><NavLink to="/featured-blogs" className={({ isActive, isPending }) =>
            isPending
                ? "pending"
                : isActive
                    ? "text-orange-500 text-lg font-bold"
                    : ""
        }>Featured Blogs</NavLink></li>

        <li className="my-2 lg:ml-5 text-lg"><NavLink to="/wishlist" className={({ isActive, isPending }) =>
            isPending
                ? "pending"
                : isActive
                    ? "text-orange-500 text-lg font-bold"
                    : ""
        }>Wishlist</NavLink></li>
    </>

    return (
        <div>
            <nav className="flex justify-between pb-1 mb-3 items-center">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg">
                        {navLinks}
                    </ul>
                </div>

                <figure className="hidden md:contents"><img className="w-[30px] h-[30px] mt-1" src="https://i.ibb.co/r3P0x4d/blog-logo.png" alt="Logo" /><span className="text-3xl font-bold text-orange-500 ml-3">BlogHub</span></figure>

                <span onClick={changeTheme} className="text-xl ml-1 lg:ml-7 mt-1">
                    {
                        mode === 'dark' ? <BiSolidSun className="text-orange-500"></BiSolidSun> : <BiSolidMoon className="text-orange-500"></BiSolidMoon>
                    }
                </span>

                <ul className="hidden lg:flex gap-5 flex-1 items-center justify-start lg:ml-32">
                    <li className="text-lg">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "text-orange-500 text-lg font-bold"
                                        : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li className="text-lg">
                        <NavLink
                            to="/add-blog"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "text-orange-500 text-lg font-bold"
                                        : ""
                            }
                        >
                            Add Blog
                        </NavLink>
                    </li>

                    <li className="text-lg">
                        <NavLink
                            to="/all-blogs"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "text-orange-500 text-lg font-bold"
                                        : ""
                            }
                        >
                            All Blogs
                        </NavLink>
                    </li>

                    <li className="text-lg">
                        <NavLink
                            to="/featured-blogs"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "text-orange-500 text-lg font-bold"
                                        : ""
                            }
                        >
                            Featured Blogs
                        </NavLink>
                    </li>

                    <li className="text-lg">
                        <NavLink
                            to="/wishlist"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "text-orange-500 text-lg font-bold"
                                        : ""
                            }
                        >
                            Wishlist
                        </NavLink>
                    </li>
                </ul>

                <ul>
                    <li className="text-lg">
                        {
                            user ? <div className="flex items-center">
                                <span className="mr-5">{user.displayName}</span>
                                <span className="mr-5"><img className="rounded-full w-9 h-9" src={user.photoURL} alt="" /></span>
                                <NavLink
                                    onClick={handleLogOut}
                                >
                                    <button className="btn btn-sm normal-case text-white bg-orange-500 hover:bg-orange-500">Logout</button>
                                </NavLink>
                            </div>
                                : <NavLink
                                    to="/login"
                                >
                                    <button className="btn btn-sm normal-case text-white bg-orange-500 hover:bg-orange-500">Login</button>
                                </NavLink>
                        }
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;