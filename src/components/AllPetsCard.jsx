import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { LuMapPin } from "react-icons/lu";


const AllPetsCard = ({ pet }) => {

    const { _id, petName, species, breed, age, gender, imageUrl, healthStatus, vaccinationStatus, location, adoptionFee, description, ownerEmail } = pet;

    return (
        <div className="shadow-2xl border rounded-xl mx-4">
            <div className="w-full h-[300] overflow-hidden rounded-xl">
                <Image
                    alt={petName}
                    src={imageUrl}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="py-4 px-4">
                <div className="flex justify-between">
                    <span className="bg-green-400 text-white text-sm px-3 py-1 rounded-full">
                        {species}
                    </span>

                    <span className="bg-green-400 text-white text-sm px-3 py-1 rounded-full">
                        Available
                    </span>
                </div>
                <h2 className="text-2xl font-bold py-2">{petName}</h2>
                <p className="flex items-center gap-2 text-gray-600">
                    <span>{breed}</span>
                    <span className="text-xl leading-none">•</span>
                    <span>{age} years old</span>
                    <span className="text-xl leading-none">•</span>
                    <span>{gender}</span>
                </p>
                <div className="flex items-center gap-1 font-semibold py-2">
                    {" "}
                    <LuMapPin className="text-green-500" /> <span>{location}</span>
                </div>
                    <p className="text-xl text-gray-500 font-semibold">$ {adoptionFee} adoption fee</p>
            </div>
         
                <p className="border-2 border-gray-400"></p>
                <div className="flex justify-between px-8 py-4">
                    <Link href={`/all-pets/${pet._id}`}>
                        <Button variant="secondary" className={'text-green-500'}>View Details</Button>
                    </Link>
                    <Button variant="outline" className={'bg-green-500 text-white'}>Adoption Now</Button>
                </div>
        </div>
    );
};

export default AllPetsCard;