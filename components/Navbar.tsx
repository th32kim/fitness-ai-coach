"use client";

import { UserButton, SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const routes = [
  {
    name: "Chat",
    path: "/",
  },
  {
    name: "Profile",
    path: "/profile",
  },
];

function Navbar() {
  const pathname = usePathname();

  return (
    <div className="p-4 flex flex-row justify-between items-center bg-black text-white">
      {/*logo*/}
      <Link href="/">
        <h1 className="text-2xl font-bold">Fitness AI</h1>
      </Link>
      <div className="flex gap-6 text-lg items-center">
        {/*Routes*/}
        {routes.map((route, idx) => (
          <Link
            key={idx}
            href={route.path}
            className={
              pathname === route.path
                ? "border-b-2 border-yellow-400 pb-1"
                : "hover:text-yellow-400 transition-colors"
            }
          >
            {route.name}
          </Link>
        ))}

        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <button className="border border-[#6c47ff] text-[#6c47ff] rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer hover:bg-[#6c47ff]/10">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
      </div>
    </div>
  )
}

export default Navbar