'use client';

import { Button } from '@heroui/react';
import Link from 'next/link';
import React, { useState, useEffect, useCallback } from 'react';

export default function MyRequestsPage() {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    // লগইন করা ইউজারের ইমেইল (আপনার অথেন্টিকেশন ডাইনামিক হলে এটি পরিবর্তন করে নেবেন)
    const user = {
        name: 'Nayem Ahmed',
        email: 'nayem@gmail.com'
    };

    // ১. ডেটা ফেচ করার ফাংশনটিকে useCallback দিয়ে র‍্যাপ করা হলো যেন অন্য পেজ থেকে আসলে এটি রিলিজ হয়
    const fetchMyRequests = useCallback(async () => {
        if (!user?.email) return;
        
        try {
            // Next.js ক্যাশ এড়ানোর জন্য ?timestamp= যোগ করা হলো, এতে প্রতিবার একদম ফ্রেশ ডাটা আসবে
            const res = await fetch(`http://localhost:5000/adoption-requests?email=${user.email}&timestamp=${new Date().getTime()}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                cache: 'no-store', // কোনভাবেই ক্যাশ ডেটা দেখাবে না
                next: { revalidate: 0 } // Next.js কে বাধ্য করবে লাইভ ডেটা আনতে
            });

            if (res.ok) {
                const data = await res.json();
                setRequests(data);
            }
        } catch (error) {
            console.error("Error fetching requests:", error);
        } finally {
            setLoading(false);
        }
    }, [user.email]);

    // ২. এই useEffect-টি এখন অন্য পেজ থেকে ব্যাক করে আসার সাথে সাথেই ট্রিগার হবে
    useEffect(() => {
        setLoading(true);
        fetchMyRequests();
    }, [fetchMyRequests]); // ডিপেন্ডেন্সি হিসেবে fetchMyRequests দেওয়া হলো

    const stats = {
        total: requests.length,
        pending: requests.filter(req => req.status === 'pending').length,
        approved: requests.filter(req => req.status === 'approved').length,
        rejected: requests.filter(req => req.status === 'rejected').length
    };

    // যেহেতু স্পিনার চান না, তাই লোডিং অবস্থায় আমরা সরাসরি আপনার আসল টেবিলের কঙ্কাল (Skeleton) বা ফাঁকা লেআউট দেখাবো, কোনো দানবীয় গোল বৃত্ত আসবে না
    return (
        <div className="p-6 md:p-10 max-w-6xl mx-auto w-full bg-gray-100 min-h-screen">
            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 tracking-wide">
                    My <span className="text-green-500">Adoption</span> Requests
                </h1>
                <p className="text-sm text-gray-500 mt-2 font-mono tracking-tight">
                    Track the status of all your adoption requests here.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {/* Total Stats */}
                <div className="bg-gray-200 border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
                    <span className="text-4xl font-bold text-gray-800 mb-2">
                        {loading ? '...' : stats.total}
                    </span>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Total</span>
                </div>

                {/* Pending Stats */}
                <div className="bg-gray-200 border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
                    <span className="text-4xl font-bold text-gray-800 mb-2">
                        {loading ? '...' : stats.pending}
                    </span>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Pending</span>
                </div>

                {/* Approved Stats */}
                <div className="bg-gray-200 border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
                    <span className="text-4xl font-bold text-gray-800 mb-2">
                        {loading ? '...' : stats.approved}
                    </span>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Approved</span>
                </div>

                {/* Rejected Stats */}
                <div className="bg-gray-200 border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm">
                    <span className="text-4xl font-bold text-gray-800 mb-2">
                        {loading ? '...' : stats.rejected}
                    </span>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Rejected</span>
                </div>
            </div>

            {/* Table Container */}
            <div className="bg-gray-100 border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-200 bg-gray-50">
                                <th className="p-4 text-xs font-bold text-gray-600 uppercase tracking-widest">Pet Name</th>
                                <th className="p-4 text-xs font-bold text-gray-600 uppercase tracking-widest">Request Date</th>
                                <th className="p-4 text-xs font-bold text-gray-600 uppercase tracking-widest">Pickup Date</th>
                                <th className="p-4 text-xs font-bold text-gray-600 uppercase tracking-widest">Status</th>
                                <th className="p-4 text-xs font-bold text-gray-600 uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan="5" className="p-20 text-center text-sm text-gray-400 font-mono tracking-wide animate-pulse">
                                        Loading your latest requests...
                                    </td>
                                </tr>
                            ) : requests.length > 0 ? (
                                requests.map((req, index) => (
                                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50/80 transition-colors">
                                        <td className="p-4 text-sm font-medium text-gray-800">{req.petName}</td>
                                        <td className="p-4 text-sm text-gray-600">{req.requestDate}</td>
                                        <td className="p-4 text-sm text-gray-600">{req.pickupDate}</td>
                                        <td className="p-4 text-sm">
                                            <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                                                req.status === 'approved' ? 'bg-green-100 text-green-800' :
                                                req.status === 'rejected' ? 'bg-rose-100 text-rose-800' :
                                                'bg-amber-100 text-amber-800'
                                            }`}>
                                                {req.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-sm text-right">
                                            <Link href={`/all-pets/${req.petId}`}>
                                                <Button variant='outline' className="text-sm font-semibold text-green-600 hover:text-green-700 transition">View</Button>
                                            </Link>
                                        </td>
                                        <td className="p-4 text-sm text-right">
                                            <Link href={`/all-pets/${req.petId}`}>
                                                <Button variant='outline' className="text-sm font-semibold text-green-600 hover:text-green-700 transition">Cancel</Button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr> 
                                    <td colSpan="5" className="p-20 text-center text-sm text-gray-400 font-mono tracking-wide">
                                        No adoption requests found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}