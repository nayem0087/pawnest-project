'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';

const SuccessStories = () => {
    return (
        <section className="my-10">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center max-w-3xl mx-auto">

                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                        Happy Adoption Stories
                    </span>

                    <h2 className="text-4xl font-bold text-gray-900 mt-5">
                        Real Stories from Happy Pet Families 🐾
                    </h2>

                    <p className="text-gray-600 mt-5 leading-relaxed">
                        Every adoption creates a beautiful bond between pets and families.
                        Here are some heartwarming stories from people who found their perfect companions.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

                    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300">

                        <Image
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK_CIdrKFAqF5CQBYreNIURnISOyWWCHJXlQ&s"
                            width={500}
                            height={400}
                            alt="Happy Dog"
                            className="w-full h-64 object-cover"
                        />

                        <div className="p-6">

                            <div className="flex items-center gap-1 text-yellow-500">
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mt-4">
                                Bella Found a Loving Home
                            </h3>

                            <p className="text-gray-600 mt-3 leading-relaxed">
                                Bella was rescued from the streets and is now living
                                happily with a caring family who adores her playful energy.
                            </p>

                            <div className="mt-5">
                                <p className="font-semibold text-green-700">
                                    — Sarah & Bella
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300">

                        <Image
                            src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4"
                            width={500}
                            height={400}
                            alt="Happy Cat"
                            className="w-full h-64 object-cover"
                        />

                        <div className="p-6">

                            <div className="flex items-center gap-1 text-yellow-500">
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mt-4">
                                Oliver’s New Beginning
                            </h3>

                            <p className="text-gray-600 mt-3 leading-relaxed">
                                Oliver spent months in a shelter before finding a warm
                                and peaceful home where he now enjoys endless care and love.
                            </p>

                            <div className="mt-5">
                                <p className="font-semibold text-green-700">
                                    — Daniel & Oliver
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300">

                        <Image
                            src="https://i.pinimg.com/736x/bd/49/f7/bd49f7c4eec5760203f745185b2250b4.jpg"
                            width={500}
                            height={400}
                            alt="Happy Pet"
                            className="w-full h-64 object-cover"
                        />

                        <div className="p-6">

                            <div className="flex items-center gap-1 text-yellow-500">
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />

                                <Star
                                    size={18}
                                    className="text-gray-300"
                                    fill="none"
                                />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mt-4">
                                Max Became Family
                            </h3>

                            <p className="text-gray-600 mt-3 leading-relaxed">
                                Max quickly became a beloved member of his new family,
                                bringing happiness, loyalty, and joyful memories every day.
                            </p>

                            <div className="mt-5">
                                <p className="font-semibold text-green-700">
                                    — Emma & Max
                                </p>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default SuccessStories;