'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
    CalendarDays,
    MapPin,
    Mars,
    ShieldCheck,
    Syringe,
    Venus,
    Loader2
} from 'lucide-react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@heroui/react';
import toast, { Toaster } from 'react-hot-toast'; 

export default function PetDetailsPage({ params: paramsPromise }) {
    const router = useRouter();
    
    // States
    const [params, setParams] = useState(null);
    const [pet, setPet] = useState(null);
    const [loadingPet, setLoadingPet] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    
    // Form States
    const [pickupDate, setPickupDate] = useState('');
    const [message, setMessage] = useState('');

    const user = {
        name: 'Nayem Ahmed',
        email: 'nayem@gmail.com'
    };

    // Unwrapping params Promise in Client Component
    useEffect(() => {
        paramsPromise.then((res) => setParams(res));
    }, [paramsPromise]);

    // Fetch Pet Data on Client Side
    useEffect(() => {
        if (!params?.id) return;

        const fetchPetDetails = async () => {
            try {
                const res = await fetch(`http://localhost:5000/pet/${params.id}`, {
                  
                    cache: 'no-store'
                });
                if (res.ok) {
                    const data = await res.json();
                    setPet(data);
                }
            } catch (error) {
                console.error("Error fetching pet:", error);
            } finally {
                setLoadingPet(false);
            }
        };

        fetchPetDetails();
    }, [params]);

    // Handle Form Submission
    const handleAdoptSubmit = async (e) => {
        e.preventDefault();

        if (!pickupDate || !message) {
            toast.error("Please fill out all the fields!");
            return;
        }

        setSubmitting(true);

        const adoptionData = {
            petId: pet._id,
            petName: pet.petName,
            userName: user.name,
            userEmail: user.email,
            pickupDate: pickupDate,
            message: message,
            requestDate: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            }),
            status: 'pending'
        };

        try {
            const response = await fetch('http://localhost:5000/adoption-request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(adoptionData)
            });

            const result = await response.json();

            if (response.status === 400 || result.alreadyAdopted) {
                toast.error(result.message || "You have already submitted a request for this pet!");
            } else if (response.ok) {
                toast.success("Adoption request submitted successfully!");
                
                setTimeout(() => {
                    router.push('/dashboard/my-request');
                }, 1500); 
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Submission Error:", error);
            toast.error("Server connection failed!");
        } finally {
            setSubmitting(false);
        }
    };

    if (loadingPet) {
        return (
            <div className="flex justify-center items-center min-h-[60vh] bg-gray-50">
                <Loader2 className="animate-spin text-green-500" size={40} />
            </div>
        );
    }

    if (!pet) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] gap-2 py-10 bg-gray-50">
                <h2 className="text-2xl font-bold text-slate-700">Pet Not Found!</h2>
                <p className="text-sm text-slate-400">The pet details could not be loaded from the server.</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-10 bg-gray-50 min-h-screen">
            {/* Toaster Container */}
            <Toaster position="top-center" reverseOrder={false} />

            <Link href={'/all-pets'}>
                <div className='max-w-7xl flex gap-2 items-center pb-5 font-semibold text-gray-700 hover:text-green-600 transition cursor-pointer'>
                    <FaLongArrowAltLeft />
                    <span>Back to all pets</span>
                </div>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Pet Details */}
                <div className="lg:col-span-2 bg-white border rounded-2xl sm:rounded-3xl shadow-sm overflow-hidden">
                    <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px]">
                        <Image
                            src={pet?.imageUrl || "/placeholder.png"} 
                            alt={pet?.petName || "Pet Image"}
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

                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-900">
                            {pet.petName}
                        </h1>
                        <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7 mb-7">
                            {pet.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
                            <div className="border rounded-2xl p-4 sm:p-5">
                                <div className="flex items-center gap-2 mb-2">
                                    <MapPin className="text-green-500" size={20} />
                                    <h4 className="font-semibold text-sm sm:text-base text-gray-800">Location</h4>
                                </div>
                                <p className="text-gray-600 text-sm sm:text-base">{pet.location}</p>
                            </div>

                            <div className="border rounded-2xl p-4 sm:p-5">
                                <div className="flex items-center gap-2 mb-2">
                                    {pet.gender === 'Male' ? <Mars className="text-blue-500" size={20} /> : <Venus className="text-pink-500" size={20} />}
                                    <h4 className="font-semibold text-sm sm:text-base text-gray-800">Gender</h4>
                                </div>
                                <p className="text-gray-600 text-sm sm:text-base">{pet.gender}</p>
                            </div>

                            <div className="border rounded-2xl p-4 sm:p-5">
                                <div className="flex items-center gap-2 mb-2">
                                    <CalendarDays className="text-orange-500" size={20} />
                                    <h4 className="font-semibold text-sm sm:text-base text-gray-800">Age</h4>
                                </div>
                                <p className="text-gray-600 text-sm sm:text-base">{pet.age} Years Old</p>
                            </div>

                            <div className="border rounded-2xl p-4 sm:p-5">
                                <div className="flex items-center gap-2 mb-2">
                                    <ShieldCheck className="text-emerald-500" size={20} />
                                    <h4 className="font-semibold text-sm sm:text-base text-gray-800">Health Status</h4>
                                </div>
                                <p className="text-gray-600 text-sm sm:text-base">{pet.healthStatus}</p>
                            </div>

                            <div className="border rounded-2xl p-4 sm:p-5">
                                <div className="flex items-center gap-2 mb-2">
                                    <Syringe className="text-purple-500" size={20} />
                                    <h4 className="font-semibold text-sm sm:text-base text-gray-800">Vaccination</h4>
                                </div>
                                <p className="text-gray-600 text-sm sm:text-base">{pet.vaccinationStatus}</p>
                            </div>

                            <div className="border rounded-2xl p-4 sm:p-5 bg-green-50/60">
                                <h4 className="font-semibold mb-2 text-sm sm:text-base text-gray-800">Adoption Fee</h4>
                                <p className="text-2xl sm:text-3xl font-bold text-green-600">${pet.adoptionFee}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Adoption Form */}
                <div className="bg-white border rounded-2xl sm:rounded-3xl shadow-sm p-5 sm:p-6 h-fit sticky top-24">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold mb-2 text-gray-900">Adopt {pet.petName}</h2>
                        <p className="text-gray-500 text-sm leading-6">
                            Fill out the form below to submit your adoption request.
                        </p>
                    </div>

                    <form onSubmit={handleAdoptSubmit} className="space-y-5">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">Pet Name</label>
                            <input
                                type="text"
                                value={pet.petName}
                                readOnly
                                className="w-full border rounded-2xl px-4 py-3 bg-gray-50 text-gray-500 outline-none cursor-not-allowed"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">User Name</label>
                            <input
                                type="text"
                                value={user.name}
                                readOnly
                                className="w-full border rounded-2xl px-4 py-3 bg-gray-50 text-gray-500 outline-none cursor-not-allowed"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">User Email</label>
                            <input
                                type="email"
                                value={user.email}
                                readOnly
                                className="w-full border rounded-2xl px-4 py-3 bg-gray-50 text-gray-500 outline-none cursor-not-allowed"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">Pickup Date</label>
                            <input
                                type="date"
                                value={pickupDate}
                                onChange={(e) => setPickupDate(e.target.value)}
                                className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:border-green-500 text-gray-800 bg-white"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Why do you want to adopt this pet?"
                                className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none resize-none focus:border-green-500 text-gray-800 bg-white"
                                required
                            />
                        </div>

                        <Button
                            type="submit"
                            disabled={submitting}
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-6 rounded-2xl text-base flex justify-center items-center gap-2"
                        >
                            {submitting ? (
                                <>
                                    <Loader2 className="animate-spin" size={20} />
                                    <span>Processing...</span>
                                </>
                            ) : (
                                "Adopt Now"
                            )}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}