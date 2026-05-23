import Link from 'next/link'; 
import AllPetsCard from "./AllPetsCard";
import { Button } from '@heroui/react';

const Featured = async () => {

    const res = await fetch('http://localhost:5000/pet', {
        cache: 'no-store'
    });

    const allPets = await res.json();
    const featuredPets = allPets.slice(0, 6);

    return (
        <div className="mt-20 px-4 md:px-8 lg:px-0 max-w-7xl mx-auto text-center">

            <div className="flex flex-col items-center mb-12">
                <span className="px-4 py-2 mb-4 text-sm font-medium text-green-500 bg-green-100 rounded-full">
                    ✿ Featured Pets
                </span>
                <h1 className="text-3xl md:text-5xl font-bold mb-2">
                    Pets Available for <span className="text-transparent bg-clip-text bg-green-500  to-teal-500">Adoption</span>
                </h1>
                <p className="text-gray-500 max-w-lg px-4">
                    These wonderful pets are waiting for their forever homes. Will you be the one to change their lives?
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
                {featuredPets.map(pet => (
                    <AllPetsCard
                        key={pet._id}
                        pet={pet}
                    />
                ))}
            </div>

            <div className="flex justify-center mb-20">
                <Link href={'/all-pets'}>
                    <Button className="px-8 py-3 rounded-full font-semibold bg-green-500 flex items-center gap-2  hover:opacity-90 transition-all duration-300 shadow-lg">
                        View All Pets <span>→</span>
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Featured;