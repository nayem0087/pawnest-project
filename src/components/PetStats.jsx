'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
    {
        id: 1,
        number: 721,
        suffix: '+',
        title: 'PET ADOPTED',
    },
    {
        id: 2,
        number: 124,
        suffix: '+',
        title: 'HAPPY PET LOVER',
    },
    {
        id: 3,
        number: 51,
        suffix: '+',
        title: 'VOLUNTEER',
    },
    {
        id: 4,
        number: 15,
        suffix: '+',
        title: 'YEARS OF EXPERIENCE',
    },
];

const PetStats = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <section className="md:mt-20 mt-12">
            <div className="max-w-3xl mx-auto text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                    Our Impact in Pet Adoption
                </h2>

                <p className="mt-2 text-gray-600 text-base md:text-lg leading-relaxed">
                    We are dedicated to connecting loving families with pets in need.
                    Every adoption creates a new beginning filled with care,
                    happiness, and lifelong companionship.
                </p>
            </div>
            <div
                ref={ref}
                className="max-w-7xl mx-auto bg-green-400 rounded-[30px] overflow-hidden grid grid-cols-2 lg:grid-cols-4"
            >
                {stats.map((stat, index) => (
                    <div
                        key={stat.id}
                        className={`flex flex-col items-center justify-center py-12 px-6 text-center ${
                            index !== stats.length - 1
                                ? 'border-r border-white/20'
                                : ''
                        } ${
                            index === 1
                                ? 'border-r-0 lg:border-r border-white/20'
                                : ''
                        }`}
                    >
                        <h2 className="text-white text-5xl md:text-7xl font-light">
                            {inView ? (
                                <CountUp
                                    end={stat.number}
                                    duration={2.5}
                                />
                            ) : (
                                0
                            )}
                            {stat.suffix}
                        </h2>

                        <p className="mt-4 text-white font-semibold tracking-[3px] text-xs md:text-sm">
                            {stat.title}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PetStats;