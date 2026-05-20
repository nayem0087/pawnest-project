import AllPetsCard from '@/components/AllPetsCard';

const AllPets = async ({ searchParams }) => {

    const params = await searchParams;

    const search = params.search || '';
    const species = params.species || '';

    const query = new URLSearchParams();

    if (search) {
        query.append('search', search);
    }

    if (species) {
        query.append('species', species);
    }

    const res = await fetch(
        `http://localhost:5000/pet?${query.toString()}`,
        {
            cache: 'no-store'
        }
    );

    const pets = await res.json();

    return (
        <div className='max-w-7xl mx-auto px-4 py-8'>

            <div className='flex flex-col md:flex-row justify-between gap-4 mb-8'>

                <h2 className='text-3xl font-bold'>
                    All Pets
                </h2>

                <form
                    action="/all-pets"
                    className='flex flex-col md:flex-row gap-3'
                >

                    <input
                        type="text"
                        name="search"
                        placeholder='Search by pet name'
                        defaultValue={search}
                        className='border px-4 py-3 rounded-xl'
                    />

                    <select
                        name="species"
                        defaultValue={species}
                        className='border px-4 py-3 rounded-xl'
                    >
                        <option value="">All Categories</option>
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                        <option value="Bird">Bird</option>
                        <option value="Rabbit">Rabbit</option>
                    </select>

                    <button
                        type='submit'
                        className='bg-green-500 text-white px-6 py-3 rounded-xl'
                    >
                        Search
                    </button>

                </form>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    pets.map(pet => (
                        <AllPetsCard
                            key={pet._id}
                            pet={pet}
                        />
                    ))
                }
            </div>

        </div>
    );
};

export default AllPets;