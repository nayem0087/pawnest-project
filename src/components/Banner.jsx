'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Banner = () => {
    return (
        <section className="bg-gradient-to-br from-green-50 via-white to-emerald-100 overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">

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

                    <div className="mt-8">
                        <Link
                            href="/all-pets"
                            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition duration-300 shadow-lg hover:shadow-green-300"
                        >
                            Adopt Now
                        </Link>
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