'use client';

import React, { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function EditPetPage({ params }) {
    const { id } = use(params);
    const router = useRouter();
    const [pet, setPet] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/pet/${id}`)
            .then(res => res.json())
            .then(data => { setPet(data); setLoading(false); });
    }, [id]);

    const handleChange = (e) => setPet({ ...pet, [e.target.name]: e.target.value });

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:5000/pet/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(pet),
            });

            if (res.ok) {
                toast.success("Pet information updated successfully!");
                router.push('/dashboard/my-listing');
            } else {
                toast.error("Failed to update.");
            }
        } catch (error) {
            console.error("Error updating pet:", error);
            toast.error("Something went wrong!");
        }
    };

    if (loading) return <div className="text-center p-10">Loading...</div>;

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-6">
            {/* Header */}
            <button onClick={() => router.back()} className="text-sm text-gray-600 mb-4 flex items-center">
                ← Back to My Listings
            </button>
            <div className="flex items-center gap-2 mb-2 text-rose-400">
                <span className="text-sm font-semibold px-2 py-1 bg-rose-50 rounded">✎ Edit Listing</span>
            </div>
            <h1 className="text-3xl font-bold mb-8">Update <span className="text-teal-600">{pet.petName}'s</span> Listing</h1>

            {/* Form Card */}
            <div className="border border-gray-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                    <span className="text-rose-400">✿</span>
                    <h2 className="font-bold">Pet Information</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="text-sm font-medium block mb-1">Pet Name *</label>
                            <input name="petName" value={pet.petName} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg outline-none focus:border-teal-500" />
                        </div>
                        <div>
                            <label className="text-sm font-medium block mb-1">Species *</label>
                            <select name="species" value={pet.species} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg outline-none">
                                <option value="Bird">Bird</option>
                                <option value="Dog">Dog</option>
                                <option value="Cat">Cat</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-sm font-medium block mb-1">Breed</label>
                            <input name="breed" value={pet.breed} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg outline-none" />
                        </div>
                        <div>
                            <label className="text-sm font-medium block mb-1">Age (years)</label>
                            <input name="age" type="number" value={pet.age} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg outline-none" />
                        </div>
                        <div>
                            <label className="text-sm font-medium block mb-1">Gender</label>
                            <select name="gender" value={pet.gender} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg outline-none">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-sm font-medium block mb-1">Adoption Fee ($)</label>
                            <input name="adoptionFee" type="number" value={pet.adoptionFee} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg outline-none" />
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-medium block mb-1">Image URL</label>
                        <input name="imageUrl" value={pet.imageUrl} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg outline-none" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="text-sm font-medium block mb-1">Health Status *</label>
                            <input name="healthStatus" value={pet.healthStatus} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg outline-none" />
                        </div>
                        <div>
                            <label className="text-sm font-medium block mb-1">Location *</label>
                            <input name="location" value={pet.location} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg outline-none" />
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-medium block mb-1">Description *</label>
                        <textarea name="description" value={pet.description} onChange={handleChange} rows="3" className="w-full p-2 border border-gray-300 rounded-lg outline-none" />
                    </div>

                    {/* Footer Buttons */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <button type="button" onClick={() => router.back()} className="w-full py-2.5 border border-gray-300 rounded-full font-semibold hover:bg-gray-50 transition">
                            Cancel
                        </button>
                        <button type="submit" className="w-full py-2.5 bg-green-500 text-white rounded-full font-semibold shadow-lg hover:opacity-90 transition">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}