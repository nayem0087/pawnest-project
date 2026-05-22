'use client';

import Link from 'next/link';
import { LuCirclePlus, LuPawPrint, LuTrash2 } from 'react-icons/lu';
import { FiEdit } from 'react-icons/fi'; // ১০০% সেফ এবং এরর-মুক্ত এডিট আইকন
import { Button } from '@heroui/react';

export default function MyListingsPage() {
    const myPets = []; // বর্তমানে ফাঁকা রাখা হলো স্ক্রিনশটের মতো দেখানোর জন্য

    return (
        <div className="p-6 md:p-10 max-w-6xl mx-auto w-full bg-gray-100 min-h-screen">
            
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-wide">
                        My Listed Pets
                    </h1>
                    <p className="text-sm text-gray-500 mt-2 font-mono tracking-tight">
                        Manage the pets you have listed for adoption ({myPets.length})
                    </p>
                </div>

                {/* Add New Pet Button */}
                <Link href="/dashboard/add-pet">
                    <Button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-xl shadow-md shadow-green-500/10 transition-all text-sm w-full sm:w-auto justify-center">
                        <LuCirclePlus className="text-lg" />
                        <span>Add New Pet</span>
                    </Button>
                </Link>
            </div>

            {/* Content Area */}
            {myPets.length > 0 ? (
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-gray-200 bg-gray-50">
                                    <th className="p-4 text-xs font-bold text-gray-600 uppercase tracking-widest">Pet Info</th>
                                    <th className="p-4 text-xs font-bold text-gray-600 uppercase tracking-widest">Breed / Species</th>
                                    <th className="p-4 text-xs font-bold text-gray-600 uppercase tracking-widest">Adoption Fee</th>
                                    <th className="p-4 text-xs font-bold text-gray-600 uppercase tracking-widest">Status</th>
                                    <th className="p-4 text-xs font-bold text-gray-600 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myPets.map((pet) => (
                                    <tr key={pet.id} className="border-b border-gray-100 hover:bg-gray-50/80 transition-colors">
                                        <td className="p-4 text-sm font-semibold text-gray-800 flex items-center gap-2">
                                            <LuPawPrint className="text-green-500" />
                                            {pet.petName}
                                        </td>
                                        <td className="p-4 text-sm text-gray-600">
                                            {pet.breed} ({pet.species})
                                        </td>
                                        <td className="p-4 text-sm font-bold text-gray-800">${pet.adoptionFee}</td>
                                        <td className="p-4 text-sm">
                                            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                                                {pet.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-sm text-right flex items-center justify-end gap-3">
                                            {/* এখানে নতুন FiEdit আইকনটি ব্যবহার করা হয়েছে */}
                                            <button className="text-gray-500 hover:text-blue-600 transition" title="Edit">
                                                <FiEdit size={18} />
                                            </button>
                                            <button className="text-gray-500 hover:text-rose-600 transition" title="Delete">
                                                <LuTrash2 size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <div className="bg-white border border-gray-200 rounded-2xl p-20 text-center shadow-sm flex flex-col items-center justify-center">
                    <p className="text-sm text-gray-500 font-sans tracking-wide">
                        You have not listed any pets yet.
                    </p>
                </div>
            )}
        </div>
    );
}