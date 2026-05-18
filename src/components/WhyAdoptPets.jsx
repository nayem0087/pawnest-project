'use client';

import Image from 'next/image';
import { Heart, Home, ShieldCheck, Smile, PawPrint } from 'lucide-react';

const WhyAdoptPets = () => {
    return (
        <section className="py-20 bg-white">
           
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
                
                <div>

                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                        Why Adopt Pets?
                    </span>

                    <h2 className="text-4xl font-bold text-gray-900 mt-5 leading-tight">
                        Give a Pet a Loving Home and
                        Change a Life Forever 🐾
                    </h2>

                    <p className="text-gray-600 mt-5 leading-relaxed">
                        Adopting a pet means giving rescued animals a second chance
                        to live happily with a caring family. Pets bring love,
                        loyalty, happiness, and unforgettable memories into our lives.
                    </p>

                    <div className="mt-10 space-y-6">

                        <div className="flex gap-4">
                            <div className="bg-green-100 text-green-600 p-3 rounded-xl h-fit">
                                <Heart size={24} />
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-gray-900">
                                    Save a Precious Life
                                </h4>

                                <p className="text-gray-600 mt-1">
                                    Every adoption helps rescued pets find safety,
                                    care, and a loving forever home.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="bg-green-100 text-green-600 p-3 rounded-xl h-fit">
                                <Home size={24} />
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-gray-900">
                                    Build a Lifelong Bond
                                </h4>

                                <p className="text-gray-600 mt-1">
                                    Pets become loyal companions who fill your home
                                    with love and happiness every single day.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="bg-green-100 text-green-600 p-3 rounded-xl h-fit">
                                <ShieldCheck size={24} />
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold text-gray-900">
                                    Support Responsible Care
                                </h4>

                                <p className="text-gray-600 mt-1">
                                    Adoption encourages compassion and helps reduce
                                    the number of homeless animals in shelters.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="relative">

                    <div className="absolute -top-6 -left-6 bg-white shadow-xl rounded-2xl px-5 py-4 hidden md:flex items-center gap-3">
                        <PawPrint className="text-green-600" />
                        <p className="font-semibold text-gray-800">
                            Trusted Pet Adoption
                        </p>
                    </div>

                    <Image
                        src="https://britishpetinsurance.co.uk/wp-content/uploads/2021/10/Pomeranian-featured-2.jpg"
                        width={300}
                        height={200}
                        alt="Pet Adoption"
                        className="rounded-3xl shadow-2xl object-cover max-h-[500] w-full"
                    />

                    <div className="absolute bottom-2 right-2 bg-white shadow-xl rounded-2xl px-5 py-4 hidden md:flex items-center gap-3">
                        <Smile className="text-green-600" />
                        <p className="font-semibold text-gray-800">
                            Happy Pets & Happy Families
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default WhyAdoptPets;