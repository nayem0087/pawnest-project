'use client';

import Image from 'next/image';
import { PawPrint } from 'lucide-react';

const HappyPetsSection = () => {
    return (
        <section className="overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

             
                <div className="order-2 lg:order-1 relative flex justify-center">

                 
                    <div className="absolute w-[320px] h-[500] rounded-full"></div>

                    <div className="absolute left-0 top-20 text-yellow-400 text-6xl font-bold">
                        ✦
                    </div>

                    <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKZQXKI4FWUXmmPfcF7YkxdZSZ_iqnXcbyew&s"
                        width={500}
                        height={700}
                        alt="Happy Pet Owner"
                        className="relative z-10 object-cover rounded-3xl"
                    />

                </div>

                <div className="order-1 lg:order-2 max-w-xl">

                    <div className="flex items-center gap-3 text-gray-700">

                        <PawPrint className="w-7 h-7" />

                        <p className="font-semibold italic tracking-wide">
                            Our promise for you...
                        </p>

                    </div>

                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mt-6">
                        Happy pets,
                        <br />
                        happy humans
                    </h2>

                    <p className="text-gray-600 mt-8 leading-relaxed text-lg">
                        Every pet deserves love, care, and a safe place to call home.
                        Through adoption, rescued animals find families who truly
                        care for them while bringing endless happiness and companionship
                        into people’s lives.
                    </p>

                    <p className="text-gray-600 mt-5 leading-relaxed text-lg">
                        From playful puppies to gentle cats, every adoption story
                        creates unforgettable memories and lifelong friendships
                        filled with loyalty, joy, and unconditional love.
                    </p>

                </div>

            </div>

        </section>
    );
};

export default HappyPetsSection;