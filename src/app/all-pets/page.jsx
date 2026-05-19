import AllPetsCard from '@/components/AllPetsCard';
import React from 'react';

const AllPets = async () => {

    const res = await fetch('http://localhost:5000/pet');
    const pets = await res.json()
    console.log(pets);

    return (
        <div className='max-w-7xl mx-auto'>
            <h2>All Pets</h2>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>
                {
                    pets.map(pet => <AllPetsCard key={pet._id} pet={pet}/>)
                }
            </div>
        </div>
    );
};

export default AllPets;