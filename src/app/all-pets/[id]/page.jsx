import Image from 'next/image';
import {
    CalendarDays,
    MapPin,
    Mars,
    ShieldCheck,
    Syringe,
    Venus
} from 'lucide-react';

const PetDetailsPage = async ({ params }) => {

    const { id } = await params;

    const res = await fetch(`http://localhost:5000/pet/${id}`, {
        cache: 'no-store'
    });

    const pet = await res.json();

    return (
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-10">

            <div className="max-w-5xl mx-auto bg-white border rounded-2xl sm:rounded-3xl shadow-sm overflow-hidden">

                <div className="relative w-full h-[250px] sm:h-[350px] md:h-[420px]">
                    <Image
                        src={pet.imageUrl}
                        alt={pet.petName}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="p-4 sm:p-6 md:p-8">

                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-5">

                        <span className="bg-green-100 text-green-700 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
                            {pet.species}
                        </span>

                        <span className="bg-blue-100 text-blue-700 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
                            {pet.breed}
                        </span>

                        <span className="bg-orange-100 text-orange-700 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
                            Available
                        </span>

                    </div>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                        {pet.petName}
                    </h1>

                    <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7 mb-6">
                        {pet.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">

                        <div className="border rounded-2xl p-4 sm:p-5">

                            <div className="flex items-center gap-2 mb-2">
                                <MapPin className="text-green-500" size={20} />

                                <h4 className="font-semibold text-sm sm:text-base">
                                    Location
                                </h4>
                            </div>

                            <p className="text-gray-600 text-sm sm:text-base">
                                {pet.location}
                            </p>

                        </div>

                        <div className="border rounded-2xl p-4 sm:p-5">

                            <div className="flex items-center gap-2 mb-2">

                                {
                                    pet.gender === 'Male'
                                        ? <Mars className="text-blue-500" size={20} />
                                        : <Venus className="text-pink-500" size={20} />
                                }

                                <h4 className="font-semibold text-sm sm:text-base">
                                    Gender
                                </h4>

                            </div>

                            <p className="text-gray-600 text-sm sm:text-base">
                                {pet.gender}
                            </p>

                        </div>

                        <div className="border rounded-2xl p-4 sm:p-5">

                            <div className="flex items-center gap-2 mb-2">
                                <CalendarDays className="text-orange-500" size={20} />

                                <h4 className="font-semibold text-sm sm:text-base">
                                    Age
                                </h4>
                            </div>

                            <p className="text-gray-600 text-sm sm:text-base">
                                {pet.age} Years Old
                            </p>

                        </div>

                        <div className="border rounded-2xl p-4 sm:p-5">

                            <div className="flex items-center gap-2 mb-2">
                                <ShieldCheck className="text-emerald-500" size={20} />

                                <h4 className="font-semibold text-sm sm:text-base">
                                    Health Status
                                </h4>
                            </div>

                            <p className="text-gray-600 text-sm sm:text-base">
                                {pet.healthStatus}
                            </p>

                        </div>

                        <div className="border rounded-2xl p-4 sm:p-5">

                            <div className="flex items-center gap-2 mb-2">
                                <Syringe className="text-purple-500" size={20} />

                                <h4 className="font-semibold text-sm sm:text-base">
                                    Vaccination
                                </h4>
                            </div>

                            <p className="text-gray-600 text-sm sm:text-base">
                                {pet.vaccinationStatus}
                            </p>

                        </div>

                        <div className="border rounded-2xl p-4 sm:p-5 bg-green-50">

                            <h4 className="font-semibold mb-2 text-sm sm:text-base">
                                Adoption Fee
                            </h4>

                            <p className="text-2xl sm:text-3xl font-bold text-green-600">
                                $ {pet.adoptionFee}
                            </p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetDetailsPage;