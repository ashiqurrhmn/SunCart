"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 w-9/12 mx-auto">
        <div className="flex gap-2 items-center">
          <h2 className="text-xl font-extrabold">SunCart</h2>
        </div>

        <ul className="flex font-medium items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-products"}>Products</Link>
          </li>
          <li>
            <Link href={"/profile"}>My Profile</Link>
          </li>
        </ul>

        <div className="">
          <ul className="flex items-center font-semibold text-sm gap-2">
            <li>
              <Link className="bg-gray-300 text-black px-3 py-2 rounded-2xl" href={"/signin"}>SignIn</Link>
            </li>
            <li>
              <Link className="bg-black text-white px-3 py-2 rounded-2xl" href={"/register"}>Register</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;