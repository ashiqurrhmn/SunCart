"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { RiMenu5Fill } from "react-icons/ri";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  console.log(user);

  const handleSignOut = async () => {
    await authClient.signOut();
  }

  const [open, setOpen] = useState(false);

  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 w-11/12 mx-auto">
        <div className="flex gap-2 items-center">
          <h2 className="text-xl font-extrabold">
            Sun<span className="text-orange-500">Cart</span>
          </h2>
        </div>

        <ul className="hidden md:flex font-medium items-center gap-5 text-sm">
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

        <div className="hidden md:flex items-center gap-3">
          {!user && (
            <ul className="flex items-center font-semibold text-sm gap-2">
              <li>
                <Link
                  className="bg-gray-300 text-black px-3 py-2 rounded-2xl"
                  href={"/signin"}
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  className="hover:bg-orange-400 bg-orange-500 text-white px-3 py-2 rounded-2xl"
                  href={"/register"}
                >
                  Register
                </Link>
              </li>
            </ul>
          )}
          {user && (
            <div className="flex gap-2">
              <Avatar>
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleSignOut}
                  className="bg-gray-300 text-black px-3 py-2 rounded-2xl"
                >
                  Sign Out
                </Button>
            </div>
            
          )}
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            <RiMenu5Fill />
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden flex flex-col items-center  bg-white border-t px-4 py-4 space-y-3 text-sm">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/all-products" onClick={() => setOpen(false)}>
            Products
          </Link>
          <Link href="/profile" onClick={() => setOpen(false)}>
            My Profile
          </Link>

          {
            !user && <div className="pt-2 flex flex-col gap-2">
            <Link
              className="bg-gray-300 text-black px-3 py-2 rounded-2xl text-center"
              href="/signin"
            >
              SignIn
            </Link>
            <Link
              className="bg-orange-500 text-white px-3 py-2 rounded-2xl text-center"
              href="/register"
            >
              Register
            </Link>
          </div>
          }
          {user && (
            <div className="flex flex-col items-center gap-2">
              <Avatar>
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleSignOut}
                  className="bg-gray-300 text-black px-3 py-2 rounded-2xl"
                >
                  Sign Out
                </Button>
            </div>
            
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
