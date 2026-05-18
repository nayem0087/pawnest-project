'use client';

import Image from 'next/image';
import {
    HeartPulse,
    Utensils,
    ShieldCheck,
    Dumbbell,
} from 'lucide-react';

const PetCareTips = () => {
    return (
        <section className="py-20 bg-white">

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">

                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                        Pet Wellness Guide
                    </span>

                    <h2 className="text-4xl font-bold text-gray-900 mt-5">
                        Essential Pet Care Tips
                    </h2>

                    <p className="text-gray-600 mt-5 leading-relaxed">
                        Proper care helps pets stay healthy, active, and emotionally happy.
                        Small daily habits can create a safer and more joyful life for your furry companions.
                    </p>

                </div>

                <div className="items-center mt-10">

                    <div className="space-y-6">

                        <div className="bg-green-50 border border-green-100 rounded-3xl p-6 hover:shadow-lg transition duration-300">

                            <div className="flex items-start gap-5">

                                <div className="bg-green-100 text-green-700 p-4 rounded-2xl">
                                    <Utensils size={28} />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        Provide Nutritious Food
                                    </h3>

                                    <p className="text-gray-600 mt-2 leading-relaxed">
                                        A healthy and balanced diet keeps pets active, energetic,
                                        and emotionally happy throughout the day. Proper nutrition
                                        also strengthens immunity, supports healthy growth, and
                                        helps prevent common health problems.
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className="bg-green-50 border border-green-100 rounded-3xl p-6 hover:shadow-lg transition duration-300">

                            <div className="flex items-start gap-5">

                                <div className="bg-green-100 text-green-700 p-4 rounded-2xl">
                                    <Dumbbell size={28} />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        Daily Exercise Matters
                                    </h3>

                                    <p className="text-gray-600 mt-2 leading-relaxed">
                                        Regular exercise helps pets maintain a healthy weight and
                                        reduces stress, boredom, and anxiety. Activities like walks,
                                        playtime, and training sessions also improve their physical
                                        fitness and strengthen the bond with their owners.
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className="bg-green-50 border border-green-100 rounded-3xl p-6 hover:shadow-lg transition duration-300">

                            <div className="flex items-start gap-5">

                                <div className="bg-green-100 text-green-700 p-4 rounded-2xl">
                                    <ShieldCheck size={28} />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        Keep Vaccinations Updated
                                    </h3>

                                    <p className="text-gray-600 mt-2 leading-relaxed">
                                        Routine vaccinations and regular veterinary checkups are
                                        essential for protecting pets from dangerous diseases and
                                        infections. Preventive healthcare ensures pets live a longer,
                                        safer, and healthier life with their families.
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className="bg-green-50 border border-green-100 rounded-3xl p-6 hover:shadow-lg transition duration-300">

                            <div className="flex items-start gap-5">

                                <div className="bg-green-100 text-green-700 p-4 rounded-2xl">
                                    <HeartPulse size={28} />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        Give Love & Attention
                                    </h3>

                                    <p className="text-gray-600 mt-2 leading-relaxed">
                                        Pets need emotional care, affection, and companionship to
                                        feel safe and comfortable in their environment. Spending
                                        quality time with them builds trust, improves behavior,
                                        and creates a deep lifelong connection.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default PetCareTips;