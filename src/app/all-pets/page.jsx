import AllPetsCard from '@/components/AllPetsCard';
import { FilterInput } from '@/components/FilterInput';
import { SearchInput } from '@/components/SearchInput';
import { Search } from 'lucide-react';

const AllPets = async ({ searchParams }) => {

    const params = await searchParams;
    const search = params?.search || "";
    const species = params?.species || ""; 
    const sort = params?.sort || "";

    const query = new URLSearchParams();

    if (search) {
        query.append('search', search);
    }

    if (species && species !== "All") {
        query.append('species', species);
    }

    if (sort) {
        query.append('sort', sort);
    }

    const res = await fetch(
        `http://localhost:5000/pet?${query.toString()}`,
        {
            cache: 'no-store'
        }
    );

    const pets = await res.json();
    // console.log(pets, 'pets');

    return (
        <div className='max-w-7xl mx-auto px-4 py-8'>

            <section className="py-16 md:py-24 px-6 transition-colors duration-500 bg-white dark:bg-slate-950">
                <div className="container mx-auto max-w-6xl">
                    
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                            All Pets Here
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            {pets?.length || 0} pets are available
                        </p>
                        <div className="w-20 h-1.5 bg-[#56B6C6] mx-auto mt-6 rounded-full"></div>
                    </div>

                    {/* Filter and Search Section */}
                    <div className="my-6 md:my-12 container mx-auto bg-slate-100 dark:bg-slate-900 shadow-md md:shadow-lg p-4 sm:p-6 md:p-8 rounded-xl w-[95%] lg:w-full border border-transparent dark:border-slate-800 transition-colors duration-300">
                        <h2 className="flex items-center gap-1.5 mb-6 text-slate-800 dark:text-slate-100">
                            <Search className="w-5 h-5" />
                            <span className="font-bold text-lg">Filter and search</span>
                        </h2> 

                        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-5">
                            {/* SearchInput Component */}
                            <div className="flex-1">
                                <SearchInput defaultValue={search} />
                            </div>

                            <div className="flex flex-row items-end gap-3 md:gap-5">
                                {/* FilterInput Component */}
                                <FilterInput defaultSpecies={species} defaultSort={sort} />
                            </div>
                        </div>
                    </div>

                    {/* Pets Grid Rendering */}
                    {!pets || pets.length === 0 ? (
                        <div className="text-center py-12 text-gray-500 dark:text-gray-400 font-medium text-lg">
                            No pets found matching your filter criteria. 🐾
                        </div>
                    ) : (
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                            {pets.map(pet => (
                                <AllPetsCard
                                    key={pet._id}
                                    pet={pet}
                                />
                            ))}
                        </div>
                    )}
                    
                </div>
            </section>
        </div>
    );
};

export default AllPets;