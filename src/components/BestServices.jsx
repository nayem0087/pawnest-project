import {
    PawPrint,
    Scissors,
    HandHelping,
    Dog,
    ShieldPlus,
    Dumbbell,
} from 'lucide-react';

const services = [
    {
        id: 1,
        title: 'Daycare',
        icon: HandHelping,
    },
    {
        id: 2,
        title: 'Dog Walking',
        icon: Dog,
        active: true,
    },
    {
        id: 3,
        title: 'Grooming',
        icon: Scissors,
    },
    {
        id: 4,
        title: 'Boarding',
        icon: PawPrint,
    },
    {
        id: 5,
        title: 'Training',
        icon: Dumbbell,
    },
    {
        id: 6,
        title: 'Veterinary Care',
        icon: ShieldPlus,
    },
];

const BestServices = () => {
    return (
        <section className="py-20 px-4 relative overflow-hidden">

            {/* Top Right Design */}
            <div className="absolute top-0 right-0 hidden md:block">
                <div className="" />
            </div>

            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Why we choice me?
                    </h2>
                    <p className='max-w-[600] mx-auto text-gray-500 mt-2'>We provide trusted and professional pet care services designed to keep your furry friends healthy, happy, active, and surrounded with love every day.</p>

                    <div className="flex justify-center mt-2">
                        <div className="w-12 h-2 rounded-full rotate-12"></div>
                    </div>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">

                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.id}
                                className="flex flex-col items-center bg-green-100 rounded-xl"
                            >
                                <div
                                    className={`w-24 h-24 rounded-3xl flex items-center justify-center transition duration-300 hover:-translate-y-2 cursor-pointer
                                    `}
                                >
                                    <Icon
                                        size={38}
                                        className="text-gray-800"
                                    />
                                </div>

                                <p
                                    className={`text-sm md:text-base font-semibold text-gray-500 text-center pb-6 ${service.active
                                        }`}
                                >
                                    {service.title}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default BestServices;