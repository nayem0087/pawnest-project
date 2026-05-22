'use client';

import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '@/providers/AuthProvider';
import { Card, Button } from "@heroui/react";
import { useDisclosure } from "@heroui/use-disclosure";
import Link from 'next/link';

export default function MyListingsPage() {
    const { user } = useContext(AuthContext);
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false); // Delete Modal
    const [selectedPetId, setSelectedPetId] = useState(null);

    // Request Modal State
    const [selectedPet, setSelectedPet] = useState(null);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    // --- নতুন স্টেট: রিকোয়েস্ট ডাটা এবং লোডিং এর জন্য ---
    const [petRequests, setPetRequests] = useState([]);
    const [isFetchingRequests, setIsFetchingRequests] = useState(false);

    // --- নতুন useEffect: selectedPet সেট হলেই রিকোয়েস্ট ফেচ করবে ---
    useEffect(() => {
        if (selectedPet?._id) {
            setIsFetchingRequests(true);
            fetch(`http://localhost:5000/adoption-requests-by-pet/${selectedPet._id}`)
                .then(res => res.json())
                .then(data => {
                    setPetRequests(data);
                    setIsFetchingRequests(false);
                })
                .catch(err => {
                    console.error("Error fetching requests:", err);
                    setIsFetchingRequests(false);
                });
        }
    }, [selectedPet]);

    // ডেটা ফেচিং ফাংশন (পুরানো লজিক)
    const fetchMyListings = async () => {
        if (!user?.email) return;
        try {
            setLoading(true);
            const res = await fetch(`http://localhost:5000/my-listings?email=${user.email}`);
            const data = await res.json();
            setListings(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Error fetching listings:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMyListings();
    }, [user?.email]);


    const handleRequestAction = async (requestId, status) => {
        try {
            const res = await fetch(`http://localhost:5000/adoption-requests/${requestId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status }), // status হতে পারে 'approved' বা 'rejected'
            });

            const data = await res.json();

            if (res.ok) {
                // লোকাল স্টেট আপডেট করা যাতে UI সাথে সাথে রিফ্রেস হয়
                setPetRequests((prevRequests) =>
                    prevRequests.map((req) =>
                        req._id === requestId ? { ...req, status: status } : req
                    )
                );
                alert(`Request ${status} successfully!`);
            } else {
                alert(data.message || "Something went wrong");
            }
        } catch (error) {
            console.error("Error updating request:", error);
            alert("Failed to update request.");
        }
    };

    // ডিলিট ফাংশনালিটি (পুরানো লজিক)
    const handleConfirmDelete = async () => {
        if (!selectedPetId) return;
        try {
            const res = await fetch(`http://localhost:5000/pet/${selectedPetId}`, { method: 'DELETE' });
            if (res.ok) {
                setListings(listings.filter(pet => pet._id !== selectedPetId));
                setIsModalOpen(false);
                alert("Pet deleted successfully!");
            }
        } catch (error) {
            alert("Failed to delete.");
        }
    };

    const stats = {
        total: listings.length,
        available: listings.filter(p => p.status === 'available').length,
        adopted: listings.filter(p => p.status === 'adopted').length
    };

    return (
        <div className="p-6 w-full">
            <h1 className="text-2xl font-bold mb-6">My <span className="text-pink-500">Listings</span></h1>

            {/* স্ট্যাটাস কার্ডস */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="p-6 text-center border shadow-sm">
                    <h2 className="text-3xl font-bold text-pink-500">{loading ? '...' : stats.total}</h2>
                    <p className="text-xs font-bold text-gray-500 mt-2">TOTAL</p>
                </Card>
                <Card className="p-6 text-center border shadow-sm">
                    <h2 className="text-3xl font-bold text-green-500">{loading ? '...' : stats.available}</h2>
                    <p className="text-xs font-bold text-gray-500 mt-2">AVAILABLE</p>
                </Card>
                <Card className="p-6 text-center border shadow-sm">
                    <h2 className="text-3xl font-bold text-gray-700">{loading ? '...' : stats.adopted}</h2>
                    <p className="text-xs font-bold text-gray-500 mt-2">ADOPTED</p>
                </Card>
            </div>

            {/* পেট লিস্ট কার্ডস */}
            {loading ? (
                <p className="text-center py-10">Loading your pet listings...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {listings.map((pet) => (
                        <Card key={pet._id} className="p-6 border shadow-sm flex flex-row items-center gap-6">
                            <img src={pet.imageUrl} className="w-24 h-24 rounded-lg object-cover" alt="pet" />
                            <div className="flex-grow">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-bold">{pet.petName}</h3>
                                    <span className="text-rose-500 font-bold">${pet.adoptionFee}</span>
                                </div>
                                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                                    <Link href={`/all-pets/${pet._id}`} className="font-medium text-gray-700">👁️ View</Link>
                                    <Link href={`/dashboard/edit-pet/${pet._id}`} className="font-medium text-gray-700">📝 Edit</Link>
                                    <button onClick={() => { setSelectedPet(pet); onOpen(); }} className="text-left font-medium text-blue-600">👥 Requests</button>
                                    <button onClick={() => { setSelectedPetId(pet._id); setIsModalOpen(true); }} className="text-left font-medium text-red-500">🗑️ Delete</button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-2xl w-80">
                        <h3 className="font-bold mb-4">Are you sure?</h3>
                        <div className="flex gap-3">
                            <Button onClick={() => setIsModalOpen(false)}>No</Button>
                            <Button onClick={handleConfirmDelete} className="bg-red-500 text-white">Yes, Delete</Button>
                        </div>
                    </div>
                </div>
            )}

            {/* Request Modal - Dynamic Content */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 relative">
                        <button onClick={() => onOpenChange(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">✕</button>

                        <h2 className="text-xl font-bold mb-6">Adoption Request Details</h2>

                        {isFetchingRequests ? (
                            <p className="text-center py-10">Loading requests...</p>
                        ) : petRequests.length > 0 ? (
                            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                                {petRequests.map(req => {
                                    // রিকোয়েস্টের পুরো ডাটা কনসোলে দেখার জন্য
                                    console.log("Single request data:", req);

                                    return (
                                        <div key={req._id} className="p-4 border border-gray-200 rounded-xl bg-gray-50">
                                            <div>
                                                <h5 className='text-sm font-semibold text-gray-600'>Pet Title</h5>
                                                <h3 className='font-bold pb-3'>{req.petName || req.name}</h3>
                                            </div>
                                            <div className="flex justify-between text-sm mb-4">
                                                <div>
                                                    <p className="text-xs text-gray-500 uppercase font-semibold">Requested By</p>
                                                    <p className="font-bold text-gray-800">{req.userName}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500 uppercase font-semibold">Email Address</p>
                                                    <p className="font-medium text-gray-700">{req.userEmail}</p>
                                                </div>
                                            </div>

                                            <div className='flex justify-between'>
                                                <div className="mb-4">
                                                    <p className="text-xs text-gray-500 uppercase font-semibold">Current Status</p>
                                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${req.status === 'approved' ? 'bg-green-100 text-green-700' :
                                                        req.status === 'rejected' ? 'bg-red-100 text-red-700' :
                                                            'bg-orange-100 text-orange-700'
                                                        }`}>
                                                        {req.status?.toUpperCase()}
                                                    </span>
                                                </div> 
                                                <div>
                                                    <p className='font-semibold text-sm text-gray-500'>PROPOSED PICKUP DATE</p>
                                                    <h5 className='font-semibold'>{req.requestDate}</h5>
                                                </div>
                                            </div>


                                            {/* Action Buttons */}
                                            {req.status === 'pending' && (
                                                <div className="flex gap-3 mt-4 pt-4 border-t border-gray-200">
                                                    <Button
                                                        size="sm"
                                                        color="danger"
                                                        variant="danger"
                                                        className="flex-1"
                                                        onClick={() => handleRequestAction(req._id, 'rejected')}
                                                    >
                                                        Reject Request
                                                    </Button>
                                                    <Button
                                                        size="sm"
                                                        color="success"
                                                        className="flex-1 text-white"
                                                        onClick={() => handleRequestAction(req._id, 'approved')}
                                                    >
                                                        Approve Request
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="py-10 text-center text-gray-500 bg-gray-50 rounded-xl border border-dashed">
                                No requests yet for {selectedPet?.petName}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}