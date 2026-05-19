import Image from "next/image";


const AllPetsCard = ({ pet }) => {

    const { _id, petName, species, breed, age, gender, imageUrl, healthStatus, vaccinationStatus, location, adoptionFee, description, ownerEmail } = pet;

    return (
        <div>
            <div className="w-full h-[300] overflow-hidden rounded-xl">
                <Image
                    alt={petName}
                    src={imageUrl}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                />
            </div>
            <h2>{petName}</h2>
        </div>
    );
};

export default AllPetsCard;