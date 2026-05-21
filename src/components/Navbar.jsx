'use client';

import { useState } from "react";
import { Link, Button, Avatar, Dropdown } from "@heroui/react";
import { MdOutlinePets } from "react-icons/md";
import { ArrowRightFromSquare } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import { FaArrowDownLong } from "react-icons/fa6";

export default function Navbar() {

    const {
        data: session,
    } = authClient.useSession()

    console.log(session, 'session');

    const user = session?.user
    console.log(user, 'user');


    const [isMenuOpen, setIsMenuOpen] = useState(false);


    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [user, setUser] = useState({
    //     name: "Jane Doe",
    //     email: "jane@example.com",
    //     image: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
    // });

    // const handleLogout = () => {
    //     setIsLoggedIn(false);
    // };

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="flex h-16 items-center justify-between px-6 max-w-7xl mx-auto">

                {/* ১. Logo & Mobile Menu Button */}
                <div className="flex items-center gap-4">
                    <button
                        className="md:hidden text-black"
                        onClick={() => setIsMenuOpen(!isMenuOpen)} // ক্লিক করলে স্টেট টগল হবে
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                    <Link href="/" className="flex items-center gap-1 text-current">
                        <MdOutlinePets className="text-3xl text-green-500" />
                        <h2 className="font-bold text-4xl text-green-500">PawNest</h2>
                    </Link>
                </div>

                <ul className="hidden items-center gap-6 md:flex font-medium">
                    <li>
                        <Link href="/" color="foreground">Home</Link>
                    </li>
                    <li>
                        <Link href="/all-pets" color="foreground">All Pets</Link>
                    </li>

                </ul>


                <div className="flex items-center gap-4">
                    {user ? <>
                        <div className="flex gap-2 items-center">
                            <h5 className="flex items-center gap-1">{user?.name} <FaArrowDownLong /></h5>
                            <Dropdown placement="bottom-end">
                                <Dropdown.Trigger className="cursor-pointer rounded-full">
                                    <Avatar size="md" src={user?.image} name={user?.name?.charAt(0)} />
                                </Dropdown.Trigger>
                                <Dropdown.Popover>
                                    <div className="px-3 pt-3 pb-1">
                                        <div className="flex items-center gap-2">
                                            <Avatar size="sm" src={user?.image} name={user?.name?.charAt(0)} />
                                            <div className="flex flex-col">
                                                <p className="text-sm leading-5 font-medium">{user?.name}</p>
                                                <p className="text-xs leading-none text-neutral-500">{user?.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Dropdown.Menu aria-label="User Actions">
                                        <Dropdown.Item key="dashboard" textValue="Dashboard">
                                            <Link href="/dashboard/my-request" className="w-full text-foreground block">Dashboard</Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item key="logout" textValue="Logout" variant="danger">
                                            <div className="flex w-full items-center justify-between gap-2 text-danger">
                                                <span>Log Out</span>
                                                <ArrowRightFromSquare className="size-3.5" />
                                            </div>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Popover>
                            </Dropdown>
                        </div>
                    </>
                        : <>
                            <div className="flex items-center gap-3">
                                <Link href="/login" className="text-sm font-semibold text-foreground hover:opacity-80">
                                    Login
                                </Link>
                                <Link href="/sign-up">
                                    <Button
                                        color="success"
                                        className="font-semibold text-white bg-green-500 hover:bg-green-600 rounded-xl"
                                    >
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        </>
                    }

                </div>
            </header>


            <div className={`${isMenuOpen ? "block" : "hidden"} border-t border-slate-100 md:hidden bg-white text-black absolute left-0 w-full shadow-lg z-50`}>
                <ul className="flex flex-col gap-2 p-4 font-medium">
                    <li>
                        <Link href="/" className="block py-2 w-full" color="foreground">Home</Link>
                    </li>
                    <li>
                        <Link href="/all-pets" className="block py-2 w-full" color="foreground">All Pets</Link>
                    </li>
                        <li>
                            <Link href="/dashboard/my-request" className="block py-2 w-full" color="foreground">My Requests</Link>
                        </li>
                        <li>
                            <Link href="/dashboard/add-pet" className="block py-2 w-full" color="foreground">Add Pet</Link>
                        </li>
                </ul>
            </div>
        </nav>
    );
}