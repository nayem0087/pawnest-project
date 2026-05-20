'use client';

import { useState } from "react";
import { Link, Button, Avatar, Dropdown } from "@heroui/react";
import { MdOutlinePets } from "react-icons/md";
import { ArrowRightFromSquare } from "@gravity-ui/icons";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // আপনার Auth সেশন বা স্টেট এখানে বসাবেন (true = logged in, false = logged out)
    const [isLoggedIn, setIsLoggedIn] = useState(true); 
    const [user, setUser] = useState({
        name: "Jane Doe",
        email: "jane@example.com",
        image: "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
    });

    const handleLogout = () => {
        // এখানে আপনার সাইন আউট লজিক লিখবেন
        setIsLoggedIn(false);
    };

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="flex h-16 items-center justify-between px-6 max-w-7xl mx-auto">
                
                {/* Logo & Toggle Button */}
                <div className="flex items-center gap-4">
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="sr-only">Menu</span>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                    <Link href="/" className="flex items-center gap-1 text-current">
                        <MdOutlinePets className="text-3xl text-green-500" />
                        <h2 className="font-bold text-4xl text-green-500">PawNest</h2>
                    </Link>
                </div>

                {/* Desktop Navigation Links */}
                <ul className="hidden items-center gap-6 md:flex font-medium">
                    <li>
                        <Link href="/" color="foreground">Home</Link>
                    </li>
                    <li>
                        <Link href="/all-pets" color="foreground">All Pets</Link>
                    </li>
                   
                </ul>

                {/* Authentication Right Side */}
                <div className="flex items-center gap-4">
                    {isLoggedIn ? (
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
                                     <Link href="/dashboard/my-request">Dashboard</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item key="logout" textValue="Logout" variant="danger" onClick={handleLogout}>
                                        <div className="flex w-full items-center justify-between gap-2 text-danger">
                                            <span>Log Out</span>
                                            <ArrowRightFromSquare className="size-3.5" />
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown.Popover>
                        </Dropdown>
                    ) : (
                        <Button as={Link} href="/login" color="success" variant="flat" className="font-semibold">
                            Login
                        </Button>
                    )}
                </div>
            </header>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="border-t border-separator md:hidden bg-background">
                    <ul className="flex flex-col gap-2 p-4 font-medium">
                        <li>
                            <Link href="/" className="block py-2 w-full" color="foreground">Home</Link>
                        </li>
                        <li>
                            <Link href="/all-pets" className="block py-2 w-full" color="foreground">All Pets</Link>
                        </li>
                        {isLoggedIn && (
                            <>
                                <li>
                                    <Link href="/my-request" className="block py-2 w-full" color="foreground">My Requests</Link>
                                </li>
                                <li>
                                    <Link href="/add-pet" className="block py-2 w-full" color="foreground">Add Pet</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            )}
        </nav>
    );
}