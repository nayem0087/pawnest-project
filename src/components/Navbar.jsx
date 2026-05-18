'use client';

// import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosHome } from 'react-icons/io';
import { MdOutlinePets } from 'react-icons/md';
import { RiSearchLine } from 'react-icons/ri';

const Navbar = () => {

    // const {
    //     data: session,
    // } = authClient.useSession()

    // const user = session?.user;
    // // console.log(user);

    // const handleSignOut = async () => {
    //     await authClient.signOut();
    // }

    return (
        <div className='bg-white py-3'>
            <nav className='max-w-7xl mx-auto flex items-center justify-between'>
                <div className='flex items-center gap-1'>
                    <MdOutlinePets className='text-3xl text-green-500' />
                    <h2 className='font-bold text-4xl text-green-500'>PawNest</h2>
                </div>
                <ul className='flex gap-6'>
                    <li>
                        <Link href="/"
                            className='flex items-center gap-1'>
                            <IoIosHome />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/all-pets"
                            className='flex items-center gap-1'>
                            <RiSearchLine />
                            <span>All-Pets</span>
                        </Link>
                    </li>
                </ul>
                <ul className='flex items-center gap-6'>
                    <Link href="/login">
                        <li>Login</li>
                    </Link>
                    <Link href="/sign-up" 
                    className='bg-green-500 hover:bg-green-600 text-white rounded-xl'>
                        <Button variant=''>Get Started</Button>
                    </Link>
                </ul>
                {/* <ul className='flex items-center gap-6'>
                    <li>
                        <Link href="/profile">Profile</Link>
                    </li>
                    {user ? <>

                        <li>
                            <Avatar>
                                <Avatar.Image
                                    referrerPolicy='no-referrer'
                                    alt="John Doe" src={user?.image} />
                                <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                            </Avatar>
                        </li>
                        <li>
                            <Button
                                size='sm'
                                onClick={handleSignOut}
                                variant='danger' className={'rounded-[5px]'}>
                                Logout
                            </Button>
                        </li>

                    </> : <>
                        <li>
                            <Link href="/login">Login</Link>
                        </li>
                        <li>
                            <Link href="/signup">Sign Up</Link>
                        </li>
                    </>}
                </ul> */}
            </nav>
        </div>
    );
};

export default Navbar;