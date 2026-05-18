'use client';


import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Button } from '@heroui/react';
import { VscServerProcess } from 'react-icons/vsc';

const Banner = () => {
    return (
        <section className="bg-gradient-to-br from-green-50 via-white to-emerald-100 overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 py-10 lg:py-14 grid lg:grid-cols-2 gap-8 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >

                    <span className="inline-block bg-green-200 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                        🐾 Pet Adoption Platform
                    </span>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                        Find Your
                        <span className="text-green-600"> Perfect </span>
                        Furry Friend
                    </h1>

                    <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
                        Give homeless pets a loving family and discover your new best friend.
                        Browse adorable dogs, cats, birds, and more waiting for adoption.
                    </p>

                    <div className="flex gap-6 mt-8">
                        <Button
                            className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-ml font-semibold transition duration-300 shadow-lg flex gap-2 items-center"
                        >
                            <span>Adopt Now</span>
                            <FaLongArrowAltRight />
                        </Button>
                        <Button
                            variant='outline'
                            className="text-green-500 px-5 py-3 rounded-ml font-semibold transition duration-300 shadow-lg flex gap-2 items-center"
                        >
                            <span>Our Process</span>
                            <VscServerProcess className='text-green-500 text-xl' />
                        </Button>
                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >

                    <Image
                        src="https://archanababu.epizy.com/wp-content/uploads/2022/08/27-1432737199-pet.jpg"
                        width={600}
                        height={500}
                        alt="Pet Adoption"
                        className="w-full max-w-xl mx-auto rounded-2xl object-cover"
                    />

                </motion.div>

            </div>
        </section>
    );
};

export default Banner;